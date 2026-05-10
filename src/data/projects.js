const projects = [
  {
    id: "fedex",
    title: "FEDEX",
    description:
      "FedEx MWI (Mobile Work Interface) is a digital solution designed to streamline operational workflows for FedEx drivers and workshop managers. The project focused on optimizing the application to improve task efficiency for delivery, collections, and vehicle service coordination, while enhancing usability and performance across mobile devices.",
    coverImage: "/images/covers/fedex-bg.png",
    logo: "/images/logos/fedex-express.svg",
    link: "/case-study/fedex",
    caseStudy: {
      title: "FedEx - MWI",
      hero: {
        bg: "#EDEDED",
        height: 507,
        image: "/images/case-studies/fedex/banner.png",
      },
      summary:
        "FedEx MWI (Mobile Work Interface) streamlines operational workflows for FedEx drivers and workshop managers, improving efficiency across deliveries, collections, and vehicle service coordination with enhanced mobile usability and performance.",
      meta: {
        timeline: "2025-2026",
        role: "Design lead",
        platform: "Android",
        deliverables:
          "Stakeholder Interview, Legacy system Audit, User Flow, Design System, Experience Design, Development Hand-off",
        tools: "FIGMA",
      },
      blocks: [
        { type: "heading", text: "Overview" },
        {
          type: "paragraph",
          size: "lg",
          body: "FedEx's Mobile Worker In-Cab (MWI) application is the daily driver-facing tool used by field couriers across Italy to manage collections, deliveries, signatures, and route operations. The existing system ran on a Windows-based handheld and no longer reflected how modern field workers expect to interact with their devices.",
        },
        {
          type: "paragraph",
          size: "lg",
          body: "I led the redesign that took MWI from a legacy Windows handheld application to a modern Android experience now deployed across the FedEx Italy field operation.",
        },
        { type: "image", src: "/images/case-studies/fedex/overview.png", alt: "FedEx MWI overview" },

        { type: "heading", text: "The Challenge" },
        {
          type: "paragraph",
          body: "The legacy system had no documentation :\n\nThere was no architecture diagram, no business logic spec, no documented user flows. The application had grown organically over years and the institutional knowledge lived in the heads of a few stakeholders.",
        },
        {
          type: "paragraph",
          body: "The platform shift was a paradigm shift, not a form factor shift :\n\nDrivers were moving from a Windows-based handheld to a rugged Android handheld — same context, same in-cab use, but a fundamentally different interaction model. The legacy app was built around Windows handheld conventions: stylus input, hardware buttons, dense form-driven screens, and dropdown-heavy navigation. The new Android experience needed to be touch-first, gesture-aware, and aligned with patterns drivers would recognize from any modern mobile device.",
        },
        { type: "divider" },

        { type: "heading", text: "My Role" },
        {
          type: "list",
          intro: "I led the design effort end-to-end alongside a small dev team. My responsibilities included:",
          items: [
            "Reverse-engineering the legacy Windows handheld application to map its workflows and business logic",
            "Running stakeholder interviews to fill gaps in undocumented behavior",
            "Defining the new information architecture for Android",
            "Owning the visual system, interaction patterns, and screen-level design decisions",
            "Driving alignment with product, engineering, and FedEx Italy operations",
          ],
        },
        { type: "image", src: "/images/case-studies/fedex/my-role.png", alt: "My Role" },
        { type: "divider" },

        { type: "heading", text: "Key Screens" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "In-Cab Login —\n\nModernized branding and a cleaner entry point that orients drivers immediately on device wake.",
        },
        { type: "image", src: "/images/case-studies/fedex/in-cab-1-login.png", alt: "In-Cab Login screen" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Mobile Worker Device Registration-\n\nSimplified Registration with device setup folded into onboarding, removing a separate configuration step.",
        },
        { type: "image", src: "/images/case-studies/fedex/device-registration.png", alt: "Device Registration screen" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Mobile Worker Menu -\n\nDashboard-driven navigation replacing the legacy menu structure, with notifications surfaced where drivers actually look.",
        },
        { type: "image", src: "/images/case-studies/fedex/in-cab-2-menu.png", alt: "Mobile Worker Menu screen" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Job Summary-\n\nTab-based separation of collections and deliveries, with clear visibility of what's outstanding versus completed.",
        },
        { type: "image", src: "/images/case-studies/fedex/in-cab-3-job-summary.png", alt: "Job Summary screen" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Collection Flow-\n\nStreamlined operational data layout with a clearer CTA hierarchy for the actions drivers take most often.",
        },
        { type: "image", src: "/images/case-studies/fedex/in-cab-4-collection.png", alt: "Collection Flow screen" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Delivery Flow-\n\nRestructured confirmation flow that made the primary action obvious and reduced steps to capture proof of delivery.",
        },
        { type: "image", src: "/images/case-studies/fedex/in-cab-5-delivery.png", alt: "Delivery Flow screen" },

        { type: "heading", text: "Outcome" },
        {
          type: "paragraph",
          size: "lg",
          body: "The redesigned MWI application was successfully rolled out across 3,000+ rugged Android devices used by FedEx drivers and field workers throughout Italy.\n\nThe rollout validated the core bet of the project: that a legacy Windows handheld workflow could be fully reimagined for modern Android without disrupting the operation. Drivers adopted the new application at scale in real-world delivery conditions.",
        },
        { type: "divider" },

        { type: "heading", text: "Reflection" },
        {
          type: "paragraph",
          size: "lg",
          maxWidth: 1032,
          body: "The hardest part of this project wasn't the visual design — it was working without a map. Reverse-engineering an undocumented Windows handheld system while simultaneously redesigning it for Android required holding two mental models at once: how the legacy device worked in drivers' hands, and how the new device should work for the same people doing the same job.\n\nThe lesson I took from MWI is that platform migrations are really interaction migrations. When the form factor stays roughly the same but the OS changes underneath it, the design challenge isn't translation — it's deciding which habits to honor and which to retire.",
        },
      ],
    },
  },
  {
    id: "audi",
    title: "AUDI",
    description:
      "Audi Genie is a next-generation infotainment system designed to enhance the in-car digital experience for Audi users. The project focused on optimizing interaction flows to reduce cognitive load and improve driver efficiency across navigation, media, and vehicle controls.",
    coverImage: "/images/covers/audi.png",
    logo: "/images/logos/audi.svg",
    link: "/case-study/audi",
    caseStudy: {
      title: "AUDI - Drive Genie",
      hero: {
        bg: "#000000",
        height: 507,
        image: "/images/case-studies/audi/hero.png",
      },
      summary:
        "Audi Genie is an in-car AI companion designed for Audi vehicles that learns how you drive, where you go, and how you like to feel inside the car, then quietly handles the details before you think to ask.",
      meta: {
        timeline: "2026",
        role: "Product Design, Visual Design",
        platform: "Automotive (In-Car Display + Voice)",
        deliverables: "User Flow, Experience Design, Development Hand-off",
        tools: "FIGMA",
      },
      blocks: [
        { type: "heading", text: "Overview" },
        {
          type: "paragraph",
          size: "lg",
          body: "Most in-car assistants are reactive. You ask, they answer. Audi Genie was a different brief: build something that understands context well enough to act before the driver reaches for a button.",
        },
        {
          type: "paragraph",
          size: "lg",
          body: "The concept centered on a core intelligence layer that sits beneath the car's existing CID. It watches. It learns. Over time, it connects the dots between your calendar, your habits, your usual routes, and your comfort preferences, and it starts making the right call without being asked.",
        },
        { type: "image", src: "/images/case-studies/audi/overview.png", alt: "Audi Drive Genie overview" },
        { type: "divider" },

        { type: "heading", text: "My Role" },
        {
          type: "list",
          intro: "I led the experience design for Audi Genie end-to-end. My responsibilities included:",
          items: [
            "Mapping the requirement-to-scenario-to-flow structure for each feature, so nothing was designed in isolation from actual driver behavior",
            "Running the interaction design for voice, CID cards, and adaptive UI states",
            "Defining how the system communicates without being intrusive",
            "Aligning the flows with engineering constraints on what the car's sensor and calendar data could actually support",
          ],
        },
        { type: "divider" },

        { type: "heading", text: "Capability Areas" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Learning Daily Routines —\n\nThe system records route, departure time, and destination passively over a period of days. Once a pattern solidifies, it surfaces a routine card on the home screen. Flows cover weekday detection, contextual nudges mid-route (a Tuesday coffee shop stop, for instance), and separate weekend pattern logic that doesn't bleed into weekday suggestions.",
        },
        { type: "video", src: "/videos/case-studies/audi/learning-routines.mp4", poster: "/images/case-studies/audi/cap-1-routines.png", aspectRatio: "2228 / 916" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Destination Suggestions —\n\nGenie combines two data sources: calendar events and learned routine history. A morning calendar meeting generates a navigation card with ETA. An evening routine triggers a grocery suggestion based on what the driver usually does after work on Thursdays. The third flow combines both signals for a Saturday gym suggestion that the system has observed consistently over several weekends.",
        },
        { type: "video", src: "/videos/case-studies/audi/destination-suggestions.mp4", poster: "/images/case-studies/audi/cap-2-destinations.png", aspectRatio: "2228 / 916" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Curated Playlists —\n\nMedia habits follow the same pattern as routes. Morning commute, evening wind-down, weekend errands each carry a distinct listening profile. Genie learns these and surfaces the right playlist before the driver has opened the media app. The flows cover routine-based morning curation, time-of-day evening relaxation, and mood-based weekend suggestions.",
        },
        { type: "video", src: "/videos/case-studies/audi/curated-playlists.mp4", poster: "/images/case-studies/audi/cap-3-playlists.png", aspectRatio: "2228 / 916" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "One-Click Comfort Settings —\n\nClimate, seat adjustment, and massage preferences are saved as presets tied to routine context. A morning commute preset differs from an evening one. Weekend driving gets its own profile. The fourth flow adds a quick-access comfort button to the home screen for moments when the driver wants to override the suggestion without digging into settings.",
        },
        { type: "video", src: "/videos/case-studies/audi/comfort-settings.mp4", poster: "/images/case-studies/audi/cap-4-comfort.png", aspectRatio: "2228 / 916" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Vehicle Data Alerts —\n\nFor EV drivers, the system monitors battery level against the day's planned destinations. A low battery alert fires before the driver leaves home. A calendar-aware charging reminder calculates whether current range covers the next meeting destination. The predictive weekend flow checks the usual Saturday route against expected range and suggests a charging stop proactively.",
        },
        { type: "video", src: "/videos/case-studies/audi/vehicle-data-alerts.mp4", poster: "/images/case-studies/audi/cap-5-vehicle-data.png", aspectRatio: "2228 / 916" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Voice Assistant —\n\nHands-free interaction across all capability areas. Navigation commands, playlist requests, comfort adjustments, and battery checks all work through natural language. The design constraint was hard: no screen tap required, and no visual confirmation blocking the driver's focus. Four flows covering each category, all resolved through voice confirmation and minimal CID feedback.",
        },
        { type: "video", src: "/videos/case-studies/audi/voice.mp4", poster: "/images/case-studies/audi/cap-6-voice.png", aspectRatio: "2228 / 916" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Adaptive UI —\n\nThe most complex capability. During a normal drive, the CID shows the full dashboard. As traffic complexity rises, Genie simplifies the interface automatically: fewer widgets, larger navigation elements, voice-only for secondary actions. When the driver enters a busy interchange, the screen shows only what they need. When conditions ease, the full UI restores without prompting.",
        },
        { type: "video", src: "/videos/case-studies/audi/adaptive-ui.mp4", poster: "/images/case-studies/audi/cap-7-adaptive.png", aspectRatio: "2228 / 916" },
        { type: "divider" },

        { type: "heading", text: "Reflection" },
        {
          type: "paragraph",
          size: "lg",
          maxWidth: 1032,
          body: "The thing that kept coming up in every flow review was the question of when silence is the right answer. A proactive assistant that always offers something isn't helpful. It's exhausting. The design had to include logic for when Genie stays quiet: no suggestion if the driver just dismissed one, no playlist prompt if they're already playing music, no comfort preset offer if they haven't moved yet.\n\nDesigning restraint into an AI feature is harder than designing the feature itself. The flows that took the longest weren't the complex ones. They were the ones where the right answer was: do nothing.",
        },
      ],
    },
  },
  {
    id: "general-motors",
    title: "General Motors",
    description:
      "General Motors’ connected vehicle platform was reimagined to deliver a more intuitive in-car and companion app experience. The project focused on simplifying complex feature flows, improving information hierarchy across infotainment and mobile surfaces, and aligning the digital experience with GM’s next-generation vehicle ecosystem.",
    coverImage: "/images/covers/general-motors.png",
    logo: null,
    link: "/case-study/general-motors",
  },
  {
    id: "amns",
    title: "AM/NS India",
    description:
      "Redesign pitch for AM/NS India, a joint venture between ArcelorMittal and Nippon Steel, focused on modernizing the company\u2019s digital presence using existing design system elements. The objective was to improve content discoverability, strengthen brand storytelling, and create a more engaging experience.",
    coverImage: "/images/covers/amns.png",
    logo: "/images/logos/amns.svg",
    link: "/case-study/amns",
  },
  {
    id: "tata-bolt",
    title: "TATA AIG - BOLT",
    description:
      "TATA AIG\u2019s agent portal was redesigned to create a unified digital experience that balances modern design aesthetics with ease of use for its promoters. The project focused on simplifying complex workflows, improving accessibility, and enhancing overall usability across the platform.",
    coverImage: "/images/covers/tata-bolt.png",
    logo: "/images/logos/tata-aig.png",
    logoClass: "max-w-[280px] max-h-[100px]",
    link: "/case-study/tata-bolt",
  },
  {
    id: "tata-inspectify",
    title: "TATA AIG - INSPECTIFY",
    description:
      "Inspectify is a self-inspection platform developed for TATA AIG to simplify motor insurance renewals for vehicles with expired policies. The platform enables users to seamlessly record and submit vehicle condition videos through a guided digital experience.",
    coverImage: "/images/covers/tata-inspectify.png",
    logo: null,
    link: "/case-study/tata-inspectify",
  },
  {
    id: "jsw",
    title: "The Inspire Institute of Sport - JSW Group",
    description:
      "Inspired by India’s growing Olympic ambitions, this concept pitch for Inspire Institute of Sport explored how a digital platform could reflect the intensity, precision, and aspiration of a world-class athletic ecosystem. The project focused on translating elite sports performance into a modern digital experience through bold visual storytelling, structured content architecture, and performance-driven design systems.",
    coverImage: "/images/covers/jsw.png",
    logo: null,
    link: "/case-study/jsw",
  },
  {
    id: "cartier",
    title: "Cartier MyAtlas",
    description:
      "Cartier myAtlas is an internal social media platform built to streamline communication and foster collaboration within the organization. The project focused on optimizing user flows, improving content discoverability, and ensuring a consistent, intuitive interface.",
    coverImage: "/images/covers/cartier.png",
    logo: "/images/logos/cartier.svg",
    link: "/case-study/cartier",
  },
  {
    id: "stockmann",
    title: "Stockmann",
    description:
      "myStockmann a loyalty app concept that evolved into the central idea for the programme\u2019s overall marketing campaign. The app redesign focused on enhancing the onboarding journey and improving the usability of the dashboard experience.",
    coverImage: "/images/covers/stockmann.png",
    logo: "/images/logos/stockmann-text.svg",
    link: "/case-study/stockmann",
  },
];

export default projects;
