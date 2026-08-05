/**
 * Transcribed from Jaydeep_Das_Product_Designer_2026.pdf — the same file the
 * Resume card links to. This is the authority for dates, titles and education;
 * projects.js is the authority for case-study detail.
 *
 * Keep this in step when the PDF changes. The deliberate omission is the phone
 * number: it is on the downloadable PDF for anyone who wants it, but the agent
 * should not be reading a personal mobile out to anonymous visitors.
 */

export const profile = {
  name: "Jaydeep Das",
  title: "Product Designer | AI & Interaction Design",
  location: "Pune, India (open to relocation)",
  email: "jaydeepdas06@gmail.com",
  site: "itsmejaydeep.com",
  linkedin: "linkedin.com/in/jaydeep-das-8a1169143",
  years: 7,
  summary:
    "Product designer with 7 years shipping AI and enterprise SaaS products end to end: research, IA, high-fidelity prototyping, and design systems in Figma. Interaction lead on Audi Drive Genie, an in-car AI assistant across voice and display. Design lead on a FedEx field app deployed to 3,000+ devices, and team lead for 3 designers on a B2C launch that reached 40,000+ users, owning sprint planning and delivery.",
};

export const roles = [
  {
    title:
      "Senior Interaction Design Analyst (Product Design, AI and Enterprise Platforms)",
    company: "Accenture",
    location: "Pune, India",
    from: "Nov 2024",
    to: "Present",
    points: [
      "Audi Drive Genie (in-car AI): led interaction design across voice and centre display, defining conversational patterns and adaptive UI states that respond to sensor and calendar context without interrupting the driver.",
      "GM Finance360 (enterprise web): built a cross-region financial intelligence platform — briefing homepage, KPI drill-downs, plant benchmarking, and AI Insights with a human commentary and sign-off loop across dozens of modules.",
      "FedEx Mobile Worker In-Cab, design lead: owned the redesign of FedEx Italy's field app from legacy Windows handheld to touch-first Android, deployed on 3,000+ rugged devices.",
      "Delivery ownership: scoped releases with product and engineering, tracked parallel workstreams in Jira, ran handoff and QA reviews, and standardised reusable patterns in the shared enterprise design system.",
    ],
  },
  {
    title: "Senior Experience Designer (UI/UX)",
    company: "TheMinimalist Solution",
    location: "Mumbai, India",
    from: "Apr 2023",
    to: "Sep 2024",
    points: [
      "Tata AIG Inspectify (Android, iOS): designed an AI-guided self-inspection flow combining visual cues with voice capture, built to hold user error below 40% on unsupervised photo capture.",
      "Tata AIG BOLT (web): unified policy generation, renewals and records; a stepper-to-dropdown shift on mobile freed screen space and shortened the completion path.",
      "AM/NS India and JSW Inspire Institute of Sport: built modular homepage architectures with persona-based discovery serving athletes, parents, donors and partners from a single IA.",
      "Raised user satisfaction 25% and task efficiency 20% as single point of contact across client stakeholders.",
    ],
  },
  {
    title: "Junior UI/UX Designer",
    company: "BORN Group",
    location: "Bangalore, India",
    from: "Sep 2022",
    to: "Feb 2023",
    points: [
      "Cartier MyAtlas (iOS): shipped end-to-end flows and card patterns for an internal collaboration platform and contributed to the global design system.",
      "Stockmann loyalty app (iOS, Android): created the visual concept that became the tagline for the loyalty campaign.",
      "Lifted conversion 20% through A/B testing on banners, CTAs, layouts and user flows.",
    ],
  },
  {
    title: "Programmer Analyst (UI)",
    company: "Cognizant",
    location: "Kolkata, India",
    from: "Apr 2022",
    to: "Sep 2022",
    points: [
      "Audited UI components, layouts and flows for WCAG compliance and clean engineering handoff.",
    ],
  },
  {
    title: "Lead UI/UX Designer",
    company: "Agpaytech Pvt. Ltd.",
    location: "Kolkata, India",
    from: "Oct 2020",
    to: "Apr 2022",
    points: [
      "Owned web and mobile design for a B2C remittance platform that grew to 40,000+ new customers.",
      "Led 3 designers through launch: allocated work, ran critiques, planned sprints against the engineering roadmap, and reported to founders.",
    ],
  },
  {
    title: "Graphic Designer",
    company: "ATM Softek",
    location: "Kolkata, India",
    from: "2019",
    to: "2020",
    points: ["Brand and marketing collateral."],
  },
  {
    title: "Graphic Designer (Games)",
    company: "GunjaanApps Studio",
    location: "Kolkata, India",
    from: "2019",
    to: "2019",
    points: ["Layout, characters and illustration for kids' mobile titles."],
  },
];

export const education = [
  {
    award: "Master of Fine Arts",
    institution: "Sarbabharatiya Sangeet-O-Sanskriti Parishad, Kolkata",
    date: "Jul 2018",
  },
  {
    award: "Bachelor of Fine Arts",
    institution: "Sarbabharatiya Sangeet-O-Sanskriti Parishad, Kolkata",
    date: "Jul 2016",
  },
];

export const certifications = [
  {
    award: "Foundations of User Experience (UX) Design",
    issuer: "Google",
    date: "2021",
  },
];

export const skillGroups = {
  "AI product design":
    "generative AI experience, AI product strategy, AI feature ideation, human-AI interaction, conversational UI, multimodal interaction (voice, touch, in-car display), human-in-the-loop review flows, AI-assisted design workflows",
  "Product & interaction design":
    "product design, enterprise product design, interaction design, UX strategy, information architecture, user flows, wireframing, high-fidelity prototyping, responsive design, accessibility (WCAG 2.1 AA)",
  "Platform & design systems":
    "design systems, component libraries, design tokens, design operations, design-to-development handoff",
  "Research & testing":
    "user research, usability testing, design sprints, user interviews, affinity mapping, journey mapping, heuristic evaluation, A/B testing",
  "Project management":
    "project management, strategic planning, risk mitigation, roadmap and sprint planning, Agile and Scrum, backlog management, release planning, resource allocation, dependency tracking",
  Tools:
    "Figma (advanced), FigJam, Sketch, Adobe XD, Photoshop, After Effects, Miro, Jira, Confluence, Notion, Slack",
};
