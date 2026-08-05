import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Vite's dev server doesn't run the api/ functions Vercel deploys, so `npm run dev`
 * would 404 on /api/chat. This mounts the real handler on the dev server, converting
 * between Node's req/res and the Web Request/Response the handler speaks — so local
 * development exercises the same code path production does, without `vercel dev`.
 */
function apiRoutes() {
  return {
    name: 'api-routes',
    apply: 'serve',
    configureServer(server) {
      // Vite loads .env into import.meta.env for the client only. The handler runs
      // as server code and reads process.env, the way Vercel injects it in
      // production — so the unprefixed vars are copied across here.
      const env = loadEnv(server.config.mode, process.cwd(), '')
      for (const [k, v] of Object.entries(env)) {
        if (!k.startsWith('VITE_') && process.env[k] === undefined) process.env[k] = v
      }

      server.middlewares.use('/api/chat', async (req, res) => {
        try {
          // Matches how Vercel resolves it: the Web signature is the `fetch`
          // property of the default export, not the default export itself.
          const mod = await server.ssrLoadModule('/api/chat.js')
          const handler = mod.default.fetch

          const body = await new Promise((resolve) => {
            const chunks = []
            req.on('data', (c) => chunks.push(c))
            req.on('end', () => resolve(Buffer.concat(chunks)))
          })

          const response = await handler(
            new Request(`http://localhost${req.url}`, {
              method: req.method,
              headers: req.headers,
              body: ['GET', 'HEAD'].includes(req.method) ? undefined : body,
            })
          )

          res.statusCode = response.status
          response.headers.forEach((v, k) => res.setHeader(k, v))

          if (response.body) {
            const reader = response.body.getReader()
            for (;;) {
              const { done, value } = await reader.read()
              if (done) break
              res.write(value)
            }
          }
          res.end()
        } catch (err) {
          res.statusCode = 500
          res.end(JSON.stringify({ error: err.message }))
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), apiRoutes()],
})
