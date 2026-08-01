# Portfolio Redesign — Design Spec

**Date:** 2026-08-02
**Status:** Awaiting review
**Source design:** Figma `jcAf5gYz9oftVsLBH0arEA` — page frame `3365-72239`, card component `3386-75236`

---

## 1. Goal

The current portfolio does not generate interviews. This redesign targets one reader:

> A design manager or recruiter hiring a **senior/lead product designer**, who gives the
> homepage roughly 40 seconds before deciding whether to open a case study.

Every decision below serves that reader. Success is measured by case-study open rate,
not by homepage dwell time.

## 2. Scope

**In scope**

- Full visual redesign of the homepage, built from the Figma bento layout
- Light and dark themes, both fully specified
- Restyle of all case-study pages to match
- Project cards gain identifying labels and link to their case studies

**Out of scope**

- Case-study body copy. Text stays exactly as written in `src/data/projects.js`.
  Only layout, typography, colour, and navigation change.
- New case studies or new photography.
- **An experience/work-history section.** The Figma has none and the user has confirmed
  it stays out. `Currently at Accenture` in the hero remains the only employment signal
  on the page. Consequence: `src/components/Experience/ExperienceList.jsx` and
  `src/data/experience.js` become unreferenced and are deleted rather than left dead.
  A reader wanting work history is served by the résumé card.

**Known risk, accepted by the user:** for senior/lead conversion the case-study writing
is usually the dominant lever. This redesign deliberately does not touch it. If the
redesign ships and response stays flat, rewriting case-study narratives is the next move.

## 3. Decisions

| Decision | Choice |
|---|---|
| Layout | Figma bento grid |
| Palette | Light `#F4F4F4` base, plus a full dark theme |
| Homepage order | As drawn in Figma — personality cards share screen one with the hero |
| Case-study copy | Preserved verbatim |
| Typeface | Red Hat Display substituted for Google Sans |
| Project labels | Chip component from `3386-75236`, applied to every project card |

Two of these were user overrides of my recommendation and are recorded as such:

- I recommended **light only**; the user chose **both themes**.
- I recommended **moving personality cards below the work**; the user chose to
  **keep the Figma order**.

Both are implemented as the user specified.

## 4. Design tokens

### Typography

Google Sans is not licensable for web use. **Red Hat Display** is already loaded by the
site and is the nearest geometric match, so it is substituted at the same scale. No new
font files are added.

| Role | Size | Weight |
|---|---|---|
| Hero name | 43px | 500 |
| Hero subhead | 25px | 400 |
| Card chip / body | 17px | 400 |
| Tag / meta | 12px | 400 |

### Colour

Light values are read directly from the Figma. Dark values are derived to hold the same
contrast relationships.

| Token | Light | Dark |
|---|---|---|
| `--bg-page` | `#F4F4F4` | `#0F0F0F` |
| `--bg-card` | `#EDEDED` | `#1A1A1A` |
| `--bg-card-alt` | `#EEEEEE` | `#1E1E1E` |
| `--bg-chip` | `#FFFFFF` | `#2A2A2A` |
| `--tint-green` | `#E2F3E5` | `#14231A` |
| `--tint-cyan` | `#EAFDFF` | `#10222A` |
| `--text-primary` | `#000000` | `#F5F5F5` |
| `--text-dim` | `#666666` | `#9A9A9A` |
| `--text-on-tint` | `#174C20` | `#8FD79E` |
| `--border-hairline` | `#DFE1E5` | `#2E2E2E` |

### Geometry

| Token | Value |
|---|---|
| `--radius-card` | `29px` |
| `--content-width` | `1356px` |
| `--grid-gutter` | `20px` |
| `--card-height` | `583px` |

## 5. Theme implementation

Themes are CSS custom properties on `:root`, overridden under `[data-theme="dark"]`.

- Default resolves from `prefers-color-scheme`.
- The user's explicit choice persists to `localStorage` and wins over the media query.
- The toggle lives in the dark-mode card already drawn in the Figma at `x=1071, y=32`.
- Applied via an inline script in `index.html` before first paint, to avoid a flash.

**Product imagery in dark mode.** Project cards contain light-background product
screenshots (FedEx purple-on-white, the AM/NS site, Stockmann). These are **never
inverted or filtered** — inverting misrepresents the work. Instead the card surface
stays neutral and the image sits in its own well with a hairline border, so the
screenshot reads as an artefact on a surface rather than a glowing panel.

## 6. Homepage structure

Vertical order, matching the Figma exactly.

### 6.1 Screen one — three columns

Left column `617px`, middle `383px`, right `322px`.

| Region | Position | Content |
|---|---|---|
| Hero | left, `y=40` | Name, positioning line, `Currently at Accenture`, `Get in touch` |
| Résumé card | `302×160`, `y=403` | Link to résumé PDF |
| Pune card | `302×160`, `y=403` | Map still + live local clock |
| Tools card | `617×160`, `y=575` | `I design and built websites with` + tool logos, green tint |
| Playground | `383×703`, `y=32` | `Things i play around with` — Genie phone, **no case-study link** |
| Theme toggle | `322×119`, `y=32` | Light/dark switch |
| Skills | `322×573`, `y=162` | `Im good at`, cyan tint |

**Hero copy.** The current line — *"I design and build digital products & visual
interfaces. Welcome to my small corner of web."* — describes every designer alive.
Replacement, drawn from facts already in `projects.js`:

> **Hi, I'm Jaydeep**
> I redesign the enterprise tools people are stuck using — legacy field ops,
> plant safety, claims — and ship them.
> Currently at Accenture.

**Skills list.** The Figma lists 25 tags, including `Interaction Design` twice. At
senior/lead a long list reads as insecurity. Reduced to six, chosen to match the
positioning line:

`Enterprise Product Design` · `Design Systems` · `Interaction Design` ·
`UX Strategy` · `Accessibility (WCAG)` · `Executive Stakeholder Management`

The duplicate is removed regardless of how many tags survive review.

### 6.2 Work

Five rows of cards, each `583px` tall, separated by the `20px` gutter. Rows use explicit
flex ratios rather than a column system, because the Figma widths do not divide evenly
into any clean grid.

| Row | Widths | Ratio |
|---|---|---|
| 1 | 632 / 706 | `0.472 / 0.528` |
| 2 | 844 / 489 | `0.633 / 0.367` |
| 3 | 1356 | full bleed |
| 4 | 632 / 703 | `0.474 / 0.526` |
| 5 | 810 / 528 | `0.605 / 0.395` |

### 6.3 Footer

`© 2026 Jaydeep Das` and `Made with React, Cursor, Figma and Claude Code`, separated by
a hairline rule.

## 7. Project card component

The chip treatment from Figma node `3386-75236`, applied to every project card.

```
┌──────────────────────────────┐
│                              │
│      product visual          │
│                              │
│  ╭────────╮ ╭──────────────╮ │
│  │ FedEx  │ │ Windows → An…│ │
│  ╰────────╯ ╰──────────────╯ │
└──────────────────────────────┘
      entire card → /case-study/fedex
```

- Two white pills, bottom-left, `17px`, over the visual.
- **Chip 1** — client name.
- **Chip 2** — what changed. The Figma currently carries deliverables
  (`Legacy system Audit, User Flow`); for a lead-level reader this is replaced by the
  outcome, e.g. `Windows handheld → Android, shipped to FedEx Italy field ops`.
- The whole card is a single link. Playground cards use the same visual treatment but
  render as a non-interactive `div` with no chips and no link.

### Data change

`src/data/projects.js` gains one field per project:

```js
outcome: "Windows handheld → Android, shipped to FedEx Italy field ops"
```

Drafted from existing case-study copy, inventing no facts. Every drafted value is listed
for the user to correct before launch — outcome claims must be accurate.

## 8. Component architecture

```
src/
├── components/
│   ├── bento/
│   │   ├── BentoGrid.jsx        row ratios, gutter
│   │   ├── ProjectCard.jsx      visual + chips + link
│   │   ├── PlaygroundCard.jsx   visual, no chips, no link
│   │   └── InfoCard.jsx         résumé, Pune, tools, skills
│   ├── theme/
│   │   ├── ThemeToggle.jsx
│   │   └── useTheme.js          localStorage + media query
│   └── ...existing Hero, CaseStudy/Template
└── styles/
    ├── tokens.css               both themes
    └── ...
```

Each card type is one file with one job. `BentoGrid` owns layout only and knows nothing
about card contents.

## 9. Responsive

The 1356px grid is desktop-only. Below that:

| Breakpoint | Behaviour |
|---|---|
| ≥1400px | Full bento as specified |
| 1024–1399px | Grid scales proportionally, ratios preserved |
| 768–1023px | Rows collapse to two equal columns, height `auto` |
| <768px | Single column, cards stack, height `auto`, chips remain |

Fixed `583px` heights become `min-height` below 1024px so cards grow with content
instead of clipping.

## 10. Accessibility

- Cards are real `<a>` elements, not click-handled `div`s.
- Chips are text, not baked into images — readable by screen readers and searchable.
- Theme toggle is a `<button>` with `aria-pressed`.
- Contrast verified in both themes; the tint cards are the risk and use
  `--text-on-tint` rather than body ink.
- `prefers-reduced-motion` disables card hover transforms and the live clock's tick
  animation.
- Every project image carries a real `alt` naming the client and screen.

## 11. Testing

| Layer | What |
|---|---|
| Visual regression | Playwright screenshots at 320 / 768 / 1024 / 1440, **both themes** |
| Accessibility | Automated axe pass per route; keyboard traversal of all cards |
| Unit | `useTheme` persistence and media-query fallback |
| Manual | Every card links to the correct case study; playground cards do not link |

## 12. Open questions

1. Are the drafted `outcome` values accurate? Every one needs the user's sign-off.
2. Which six skill tags, if not the six proposed in §6.1?
3. Does the résumé card link to a PDF that is current? It is now the only route to
   full work history.
