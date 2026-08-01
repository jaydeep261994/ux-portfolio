import puppeteer from "puppeteer";
const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" });
const p = await b.newPage();
const out = "/private/tmp/claude-501/-Users-jaydeep-Documents-Personal-Portfolio/b35a48c1-3be9-413e-8d6d-9e4f79157ac2/scratchpad";
for (const [theme, w, name] of [["light",1440,"light-desktop"],["dark",1440,"dark-desktop"],["light",390,"light-mobile"]]) {
  await p.setViewport({ width: w, height: 1000, deviceScaleFactor: 1 });
  await p.goto("http://localhost:5173/", { waitUntil: "networkidle0" });
  await p.evaluate((t) => { localStorage.setItem("theme", t); document.documentElement.dataset.theme = t; }, theme);
  // Walk the page so lazy images actually load before the full-page capture.
  await p.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
    await Promise.all([...document.images].filter(i => !i.complete).map(i => i.decode().catch(() => {})));
  });
  await new Promise(r => setTimeout(r, 700));
  await p.screenshot({ path: `${out}/${name}.png`, fullPage: true });
  console.log(name, "ok");
}
await b.close();
