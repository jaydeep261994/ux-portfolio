# Portfolio Chat Agent — Design

**Date:** 2026-08-06
**Status:** Approved, ready to implement

## Purpose

A floating chat widget, centre-bottom on every page, that answers questions about
Jaydeep's work. The primary reader is a recruiter or hiring manager who wants to
know what he did on a given project, or whether he has a given skill, without
reading five case studies.

## Why this is viable here

`src/data/projects.js` already holds ~6,400 words of real case-study prose across
9 projects — problem framing, role, decisions, outcomes. The failure mode of a
portfolio chatbot is inventing credentials; grounding on text the author actually
wrote removes most of that risk.

## Decisions taken

| Question | Decision |
|---|---|
| Panel size | Figma geometry exactly; height alone grows to ~560px on desktop |
| Dark mode | Themed via tokens — light renders exactly as drawn |
| Rate limiting | In-function per-IP limits; hard spend cap on the OpenRouter key |
| Voice | Speaks as Jaydeep, first person; "Portfolio agent" stays the widget label |
| Model | Free model primary, cheap paid model as automatic fallback |
| Streaming | Yes — free models can take 10–20s, a spinner that long reads as broken |

## Architecture

```
api/chat.js          Vercel function. Holds the key, rate limits, builds the
                     system prompt, proxies OpenRouter, streams the reply.
api/_knowledge.js    Flattens projects/experience/skills into prose. Built once
                     per cold start, not per request.

src/components/chat/
  ChatWidget.jsx     Owns open/closed. Renders pill or panel.
  ChatPanel.jsx      Header, message list, composer.
  ChatMessage.jsx    One bubble.
src/hooks/useChat.js Message state, streaming fetch, error and limit handling.
src/styles/chat.css  Figma geometry in the project's token vocabulary.
```

**Flow:** browser POSTs the last 6 turns to `/api/chat` → per-IP limit check →
system prompt + knowledge prepended → OpenRouter call → reply streamed back.

The API key never reaches the browser. This is the reason the feature needs a
serverless function at all: every `VITE_*` var is baked into the client bundle,
so a key there would be public.

### Knowledge base

Generated at cold start by importing the same data files the site renders from.
The bot cannot drift out of date — adding a project teaches the bot about it.
Roughly 7–8k tokens against a 262k context window, so no retrieval needed.

### Grounding rules

The system prompt instructs: answer only from supplied material; when something
is not covered, say so and point to email rather than infer. A recruiter catching
the bot inventing a project is the worst outcome this design can produce, so the
prompt is written to prefer "I haven't written about that publicly" over a guess.

## Security and cost

- Key server-side only, read from `OPENROUTER_API_KEY` (no `VITE_` prefix).
- Per-IP rate limit, ~8/hour. Sized against OpenRouter's account-level cap so one
  visitor cannot exhaust the daily allowance for everyone else.
- Hard `max_tokens` per reply; history capped at 6 turns.
- Request body length capped, to reject prompt-stuffing.
- In-memory counters are per-instance and reset on cold start. This is a speed
  bump, not a wall. The actual backstop is the spend cap on the key.

## UI

From Figma `3725:5889` (pill), `3729:5933` (open), `3730:5976` (messages).

- **Pill** — 155×48, r29, `#F2F2F2` / 0.5px `#DBDBDB`, 4px padding, 40px orb.
- **Panel** — 294 wide, r30, `#F0F0F0` / 1px `#DDDDDD`, 10px padding.
- **Header** — 12px label + 21px close chip `#E4E4E4`, X in `#2D2D2D`.
- **Empty state** — 76px orb, 16px greeting, 12px/17 sub in `#6E6E6E`.
- **Composer** — 274×48, r35, white, 1px `#DBDBDB`, 40px send circle `#ECECEC`.
- **Bubbles** — user white + 0.5px `#C5C5C5` right; assistant `#F8F8F8` left;
  10/5 padding, 12px/17, 16px gap, fully rounded.

### Copy corrections

- `"Tell me abut youself"` → `"Tell me about yourself"` (two typos)
- `"Hello Jaydeep"` → `"Hi, I'm Jaydeep"` — as drawn it greets the author, not
  the visitor.

### States not in the frames

Thinking indicator, error, rate-limited, disabled send on empty input, and
scrolling for long answers. Designed to match the drawn language.

### Accessibility

Follows the patterns already in `CaseStudySheet`: focus moves in on open and
returns on close, Escape closes, replies announced via `aria-live="polite"`,
labelled input, motion gated on `prefers-reduced-motion`.

### Disclosure

The first assistant message states once that it is an AI trained on the
portfolio. The voice is first person throughout, so a recruiter should not be
left to work out later that they were not talking to a person.

## Local development

Vite's dev server does not run `api/` functions. A small dev-only middleware in
`vite.config.js` mounts the same handler, so `npm run dev` exercises the real
code path without requiring `vercel dev`.

## Out of scope

Persistence across reloads, multi-turn memory beyond 6 turns, analytics on chat
content, retrieval/embeddings, and voice input. None are needed at this size and
each can be added later without reworking the above.
