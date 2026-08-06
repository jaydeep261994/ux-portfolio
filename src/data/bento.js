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
    ar: "632 / 583",
    title: "FedEx",
    outcome: "Windows handheld → Android, live across FedEx Italy",
    // Figma 3750-8004, exported transparent so one asset serves both themes
    // and at higher resolution than the previous flattened PNG.
    image: "/images/bento/fedex.webp",
    alt: "FedEx MWI running on a Zebra handheld — dashboard and consignment screens",
    link: "/case-study/fedex",
  },
  audi: {
    id: "audi",
    ar: "706 / 583",
    title: "Audi",
    outcome: "Genie — an in-car AI companion that learns how you drive",
    image: "/images/bento/genie.webp",
    alt: "Audi Genie — in-car climate, seat position and comfort controls",
    link: "/case-study/audi",
  },
  generalMotors: {
    id: "general-motors",
    ar: "844 / 583",
    title: "General Motors",
    outcome: "Finance360 — variance and performance for GM finance teams",
    image: "/images/bento/mfg-dashboard.webp",
    // Needs its own dark export (Figma 3750-6893). Its widgets are separated by
    // plate-coloured rules that run to the panel edge, so stripping the plate cut
    // transparent channels straight through them. Invisible on light, where the
    // gap reads as the plate it replaced; on dark it showed as slots of card.
    imageDark: "/images/bento/mfg-dashboard-dark.webp",
    alt: "GM Finance360 — EBIT variance, MCPU efficiency and total manufacturing spend",
    link: "/case-study/general-motors",
  },
  tataBolt: {
    id: "tata-bolt",
    ar: "489 / 583",
    title: "TATA AIG",
    outcome: "Policies, renewals and records in one agent workflow",
    image: "/images/bento/tata-bolt.webp",
    alt: "TATA AIG Bolt — individual selection screen on mobile web",
    link: "/case-study/tata-bolt",
  },
  amns: {
    id: "amns",
    ar: "1356 / 583",
    title: "AM/NS India",
    outcome: "Homepage pitch for the ArcelorMittal–Nippon Steel JV",
    image: "/images/bento/amns.webp",
    alt: "AM/NS India homepage — Smarter Steels, Brighter Futures hero",
    link: "/case-study/amns",
  },
  inspectify: {
    id: "tata-inspectify",
    ar: "632 / 583",
    title: "TATA AIG",
    outcome: "AI-guided self-inspection, built to cut errors below 40%",
    image: "/images/bento/tata-inspectify.webp",
    alt: "TATA AIG Inspectify — guided odometer capture during vehicle self-inspection",
    link: "/case-study/tata-inspectify",
  },
  cartier: {
    id: "cartier",
    ar: "703 / 583",
    title: "Cartier",
    outcome: "UI design and testing for the internal employee network",
    image: "/images/bento/cartier.webp",
    alt: "Cartier myAtlas — key messages feed on iOS",
    link: "/case-study/cartier",
  },
  jsw: {
    id: "jsw",
    ar: "810 / 583",
    title: "Inspire Institute of Sport",
    outcome: "Concept: one site for athletes, partners, donors, media",
    image: "/images/bento/jsw.webp",
    alt: "Inspire Institute of Sport — Fueling India's Next Generation of Champions hero",
    link: "/case-study/jsw",
  },
  stockmann: {
    id: "stockmann",
    ar: "528 / 583", // Figma has this one at 584; normalised so rows stay uniform
    title: "Stockmann",
    outcome: "Onboarding and dashboard redesign for the loyalty app",
    image: "/images/bento/stockmann.webp",
    // The only card that needs a second export. Its visual is a cut-out silhouette
    // with no image boundary, so the light version dissolves into a dark card; the
    // dark one (Figma 3750-7171) rim-lights the hands so they read. Every other
    // card is a rectangle or light enough to work on either plate.
    imageDark: "/images/bento/stockmann-dark.webp",
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
  { widths: [632, 706], gap: 18, cards: [cards.fedex, cards.audi] },
  { widths: [844, 489], gap: 23, cards: [cards.generalMotors, cards.tataBolt] },
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
    image: "/images/bento/playground-idle.webp",
    alt: "A conversational AI concept at rest — How's it going, Bianca?",
  },
  {
    id: "listening",
    kind: "device",
    image: "/images/bento/playground-listening.webp",
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

/**
 * Skills, in Figma reading order from 3627-75462. "Interaction Design" appears
 * twice in the source; the repeat is dropped, leaving 22.
 */
export const skills = [
  "Project management",
  "Risk Mitigation",
  "Strategic Planning",
  "Emotional Intelligence",
  "Enterprise Product Design",
  "Interaction Design",
  "Generative AI Experience",
  "AI Product Strategy",
  "Platform & Design Systems",
  "Design Operations",
  "Cross-functional Leadership",
  "Product Design",
  "Design System",
  "UX Strategy",
  "Information Architecture",
  "Usability Testing",
  "Design Sprints",
  "Accessibility (WCAG)",
  "AI Feature Ideation",
  "Human-AI Interaction",
  "Conversational UI",
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
