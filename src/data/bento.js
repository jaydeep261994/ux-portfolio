/**
 * Homepage bento layout.
 *
 * Visuals and row ratios are exported from Figma jcAf5gYz9oftVsLBH0arEA / 3365-72239.
 * Figma widths do not divide into any clean column grid, so each row carries the
 * explicit ratio measured from the design instead.
 *
 * `outcome` is the second chip: what changed, drawn from the case-study copy in
 * projects.js. These are user-reviewed claims — do not embellish them.
 */

const cards = {
  fedex: {
    id: "fedex",
    title: "FedEx",
    outcome: "Windows handheld → Android, live across FedEx Italy",
    image: "/images/bento/fedex.png",
    alt: "FedEx MWI running on a Zebra handheld — dashboard and consignment screens",
    link: "/case-study/fedex",
  },
  genie: {
    id: "genie",
    title: "Genie",
    outcome: "In-car climate and comfort controls",
    image: "/images/bento/genie.png",
    alt: "Genie automotive interface — climate, seat position and comfort controls",
    link: null, // no case study written yet
  },
  mfgDashboard: {
    id: "mfg-dashboard",
    title: "Manufacturing analytics",
    outcome: "EBIT variance and spend, one operating picture",
    image: "/images/bento/mfg-dashboard.png",
    alt: "Manufacturing analytics cards showing EBIT variance, MCPU efficiency and total spend",
    link: null, // no case study written yet
  },
  tataBolt: {
    id: "tata-bolt",
    title: "TATA AIG",
    outcome: "Policies, renewals and records in one agent workflow",
    image: "/images/bento/tata-bolt.png",
    alt: "TATA AIG Bolt — individual selection screen on mobile web",
    link: "/case-study/tata-bolt",
  },
  amns: {
    id: "amns",
    title: "AM/NS India",
    outcome: "Homepage pitch for the ArcelorMittal–Nippon Steel JV",
    image: "/images/bento/amns.png",
    alt: "AM/NS India homepage — Smarter Steels, Brighter Futures hero",
    link: "/case-study/amns",
  },
  inspectify: {
    id: "tata-inspectify",
    title: "TATA AIG",
    outcome: "AI-guided self-inspection, built to cut errors below 40%",
    image: "/images/bento/tata-inspectify.png",
    alt: "TATA AIG Inspectify — guided odometer capture during vehicle self-inspection",
    link: "/case-study/tata-inspectify",
  },
  cartier: {
    id: "cartier",
    title: "Cartier",
    outcome: "UI design and testing for the internal employee network",
    image: "/images/bento/cartier.png",
    alt: "Cartier myAtlas — key messages feed on iOS",
    link: "/case-study/cartier",
  },
  jsw: {
    id: "jsw",
    title: "Inspire Institute of Sport",
    outcome: "Concept: one site for athletes, partners, donors, media",
    image: "/images/bento/jsw.png",
    alt: "Inspire Institute of Sport — Fueling India's Next Generation of Champions hero",
    link: "/case-study/jsw",
  },
  stockmann: {
    id: "stockmann",
    title: "Stockmann",
    outcome: "Onboarding and dashboard redesign for the loyalty app",
    image: "/images/bento/stockmann.png",
    alt: "My Stockmann loyalty app — member dashboard held in hand",
    link: "/case-study/stockmann",
  },
};

/**
 * Each row carries its measured Figma card widths and the gap between them. Widths
 * become `fr` units so the row scales below the design width while keeping its
 * proportions; every row sums to 1356 with its own gap, which a uniform gutter
 * would miss by about a pixel per row.
 */
export const workRows = [
  { widths: [632, 706], gap: 18, cards: [cards.fedex, cards.genie] },
  { widths: [844, 489], gap: 23, cards: [cards.mfgDashboard, cards.tataBolt] },
  { widths: [1356], gap: 0, cards: [cards.amns] },
  { widths: [632, 703], gap: 21, cards: [cards.inspectify, cards.cartier] },
  { widths: [810, 528], gap: 18, cards: [cards.jsw, cards.stockmann] },
];

/**
 * Playground states. The card crossfades between these on a timer; the phone is
 * composited from Figma's screen node under its device bezel, so it floats on the
 * card tint rather than carrying a baked-in plate.
 */
export const playgroundFrames = [
  {
    id: "idle",
    kind: "device",
    image: "/images/bento/playground-idle.png",
    alt: "A conversational AI concept at rest — How's it going, Bianca?",
  },
  {
    id: "listening",
    kind: "device",
    image: "/images/bento/playground-listening.png",
    alt: "The same concept listening — Hey, I am listening. What do you need?",
  },
  {
    id: "dither",
    kind: "art",
    image: "/images/bento/play-dither.webp",
    alt: "Pixel Shader — a hand dissolving into a dithered halftone",
  },
  {
    id: "scanline",
    kind: "art",
    image: "/images/bento/play-scanline.webp",
    alt: "Pixel Shader — a street scene smeared through a scanline effect",
  },
  {
    id: "halftone",
    kind: "art",
    image: "/images/bento/play-halftone.webp",
    alt: "Pixel Shader — a chair on a hillside rendered as halftone dots",
  },
  {
    id: "pixel-art",
    kind: "art",
    image: "/images/bento/play-pixel-art.webp",
    alt: "Pixel Shader — a portrait reduced to coarse pixel art",
  },
  {
    id: "editor",
    kind: "art",
    image: "/images/bento/play-editor.webp",
    alt: "Pixel Shader — the effect editor, with pixel size and palette controls",
  },
];

/** Reduced from the 25 tags in the Figma — a long list reads as insecurity at lead level. */
export const skills = [
  "Enterprise Product Design",
  "Design Systems",
  "Interaction Design",
  "UX Strategy",
  "Accessibility (WCAG)",
  "Executive Stakeholder Management",
];

/** Logo marks exported from Figma 3624-75318. Order matches the design's overlap. */
export const tools = [
  { name: "Figma", icon: "/images/tools/figma.png" },
  { name: "After Effects", icon: "/images/tools/after-effects.png" },
  { name: "Photoshop", icon: "/images/tools/photoshop.png" },
  { name: "Illustrator", icon: "/images/tools/illustrator.png" },
  { name: "Claude", icon: "/images/tools/claude.png" },
  { name: "Framer", icon: "/images/tools/framer.png" },
  { name: "Cursor", icon: "/images/tools/cursor.png" },
  { name: "Claude Code", icon: "/images/tools/claude-code.png" },
  { name: "Jira", icon: "/images/tools/jira.png" },
];

export default cards;
