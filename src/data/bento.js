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

/** Each row: measured Figma widths, converted to flex ratios. */
export const workRows = [
  { ratio: [0.472, 0.528], cards: [cards.fedex, cards.genie] },
  { ratio: [0.633, 0.367], cards: [cards.mfgDashboard, cards.tataBolt] },
  { ratio: [1], cards: [cards.amns] },
  { ratio: [0.474, 0.526], cards: [cards.inspectify, cards.cartier] },
  { ratio: [0.605, 0.395], cards: [cards.jsw, cards.stockmann] },
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
