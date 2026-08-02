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
        bg: "#EDEDED",
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
      "Finance360 is General Motors’ internal financial intelligence platform — the operating system for how GM’s finance teams track performance, surface variances, benchmark plants, and sign off on commentary across every region. The project focused on unifying fragmented reporting tools into a single experience that serves both executives reading a summary and analysts drilling into regional variances.",
    coverImage: "/images/covers/general-motors.png",
    logo: null,
    link: "/case-study/general-motors",
    caseStudy: {
      title: "General Motors - FINANCE360",
      hero: {
        bg: "#EDEDED",
        height: 507,
        image: "/images/case-studies/gm/hero.png",
        fit: "cover",
      },
      summary:
        "Finance360 is GM's internal financial intelligence platform, built for finance teams to track performance, surface variances, and make faster decisions across every region and business unit.",
      meta: {
        timeline: "2026",
        role: "Product Design",
        platform: "Web (Internal Enterprise)",
        deliverables: "User Flow, Experience Design",
        tools: "FIGMA",
      },
      blocks: [
        { type: "heading", text: "Overview" },
        {
          type: "paragraph",
          size: "lg",
          body: "Finance360 is General Motors' internal financial intelligence platform. Not a dashboard. The operating system for how GM's finance teams track performance, surface variances, benchmark plants, and sign off on commentary across every region the company runs.",
        },
        { type: "image", src: "/images/case-studies/gm/overview.png", alt: "Finance360 overview" },
        { type: "divider" },

        { type: "heading", text: "The Challenge" },
        {
          type: "paragraph",
          body: "GM's finance teams worked across fragmented tools. Static reports, disconnected spreadsheets, manual sign-off. Decision-makers spent more time finding data than acting on it.",
        },
        {
          type: "paragraph",
          body: "The brief was one platform that could serve an executive reading a summary and an analyst drilling into regional variances, without either feeling like a compromise.",
        },
        { type: "divider" },

        { type: "heading", text: "Key Screens" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Homepage —\n\nA personalised briefing, not a menu. AI-suggested prompts, top insights surfaced automatically, and a KPI dashboard pulled from the consoles each user tracks.",
        },
        { type: "video", src: "/videos/case-studies/gm/homepage.mp4", poster: "/images/case-studies/gm/homepage.png", aspectRatio: "1032 / 514" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Manufacturing Console —\n\nWhere analysts live. Multi-filter bar, modular data cards, waterfall chart, heatmap, competitive losses, commentary sign-off, all in one view.",
        },
        { type: "image", src: "/images/case-studies/gm/manufacturing-console.png", alt: "Manufacturing Console screen" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "L2 Drill-Down —\n\nEvery KPI card opens here. Current forecast vs budget vs prior year, a full year trend line, regional breakdown by GMNA, GMAP, GMSA, and an AI Insights panel on the right that does the first pass before the analyst starts reading.",
        },
        { type: "video", src: "/videos/case-studies/gm/l2-drilldown.mp4", poster: "/images/case-studies/gm/l2-drilldown.png", aspectRatio: "1032 / 514" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Plant Benchmarking —\n\nCompares Non-Scheduled Overtime across Arlington, Flint, and Fort Wayne against target. AI Insights call out the outliers directly. A comment thread below lets finance teams annotate with dollar context.",
        },
        { type: "video", src: "/videos/case-studies/gm/plant-benchmarking.mp4", poster: "/images/case-studies/gm/plant-benchmarking.png", aspectRatio: "1032 / 514" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Report Hub —\n\nA library of purpose-built views across Financial, Commercial, Operational, and Risk domains. Personalised by recency, favorites, and AI recommendations.",
        },
        { type: "video", src: "/videos/case-studies/gm/report-hub.mp4", poster: "/images/case-studies/gm/report-hub.png", aspectRatio: "1032 / 514" },
        { type: "divider" },

        { type: "heading", text: "Reflection" },
        {
          type: "paragraph",
          size: "lg",
          maxWidth: 1032,
          body: "The real design problem was hierarchy. Every team wanted their metric visible. Getting the right number as the headline, the right chart at full width, and the right AI insight surfaced, consistently across dozens of modules, was where most of the work lived.",
        },
      ],
    },
  },
  {
    id: "amns",
    title: "AM/NS India",
    description:
      "Redesign pitch for AM/NS India, a joint venture between ArcelorMittal and Nippon Steel, focused on modernizing the company\u2019s digital presence using existing design system elements. The objective was to improve content discoverability, strengthen brand storytelling, and create a more engaging experience.",
    coverImage: "/images/covers/amns.png",
    logo: "/images/logos/amns.svg",
    link: "/case-study/amns",
    caseStudy: {
      title: "AM/NS India",
      hero: {
        bg: "#EDEDED",
        height: 507,
        video: "/videos/case-studies/amns/banner.mp4",
        poster: "/images/case-studies/amns/hero.png",
        fit: "cover",
      },
      summary:
        "AM/NS India is a joint venture between ArcelorMittal and Nippon Steel. This was a homepage redesign pitch to modernize their digital presence, making it easier for a wide range of users, from government stakeholders to vendors and students, to find what they need and feel the weight of the brand.",
      meta: {
        timeline: "2024",
        role: "User Interface Designer",
        platform: "Website",
        deliverables: "Content Architecture, UX Wire framing, UI Design, Interactive Prototype",
        tools: "FIGMA, Photoshop",
      },
      blocks: [
        { type: "heading", text: "Overview" },
        {
          type: "paragraph",
          size: "lg",
          body: "The design focused on creating a scalable, modular structure that balances industrial credibility with human-centric storytelling. I restructured the homepage around key strategic pillars \u2014 vision, discovery, impact, and credibility \u2014 using purposeful layouts, video-driven hero content, persona-based navigation, and contextual CTAs. The Smart Discovery section was a key UX innovation, merging multiple entry points into a single, intuitive interaction system.",
        },
        { type: "divider" },

        { type: "heading", text: "Key Sections" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Hero Section \u2014\n\nContent: The homepage opens with \"Smarter Steels, Brighter Futures\" in bold typography, paired with \"Powering India's growth\u2026\" as supporting copy. A full-bleed background video showreel runs on loop, muted, with subtle parallax scrolling for depth and immersion.\n\nInteractions: Three interactive highlight cards \u2014 Thought Leadership, Innovation, Sustainability \u2014 reveal content on hover, each with a dedicated CTA for deeper exploration. This drives discovery without cluttering the layout.",
        },
        { type: "video", src: "/videos/case-studies/amns/hero-section.mp4", poster: "/images/case-studies/amns/hero-section.png", aspectRatio: "1032 / 514" },
        { type: "divider" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Who We Are \u2014\n\nContent: This fold establishes trust and emotional connection by showcasing AM/NS India's history and values: Relentless Safety, Endlessly Creative, Consistently Excellent, Always Collaborative, Forever Dynamic. The narrative emphasizes purpose-driven growth that empowers all stakeholders.\n\nInteractions: Text is progressively highlighted on scroll while team imagery and supporting visuals create rhythm and flow.",
        },
        { type: "image", src: "/images/case-studies/amns/who-we-are.png", alt: "Who We Are section mock", aspectRatio: "1032 / 530" },
        { type: "divider" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Product Discovery \u2014\n\nContent: The \"Start Product Discovery\" CTA launches a guided three-step flow where users select their persona, industry, and need. This progressive disclosure reduces overwhelm and creates a tailored experience.\n\nInteractions: Each choice dynamically reveals the next question (for example: Government Official \u2192 Infrastructure \u2192 Structural Strength). The final \"See Results\" delivers recommended products with specs, visuals, and a \"Retake Quiz\" option for iterative exploration.",
        },
        { type: "image", src: "/images/case-studies/amns/product-discovery.png", alt: "Product Discovery flow", aspectRatio: "1032 / 538" },
        { type: "divider" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "The Impact Trio \u2014\n\nContent: Innovation, Sustainability, and Safety are spotlighted with bold metrics and supporting narratives, underscoring AM/NS India's leadership in technology, green initiatives, and workplace culture.\n\nInteractions: Side-by-side imagery and animated counters appear as users scroll. Each pillar ends with a CTA linking to a dedicated detail page.",
        },
        { type: "image", src: "/images/case-studies/amns/impact-trio.png", alt: "The Impact Trio" },
        { type: "divider" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Flagship Products Gallery \u2014\n\nContent: A masonry-style grid presents ten flagship products with high-quality renders and concise titles. For pre-painted products, users can preview different color options instantly.\n\nInteractions: The gallery is responsive with swipeable carousel functionality on mobile, ensuring smooth and intuitive product exploration.",
        },
        { type: "image", src: "/images/case-studies/amns/flagship.png", alt: "Flagship Products Gallery" },
        { type: "divider" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "CSR Stories & Community Impact \u2014\n\nContent: Human-centered storytelling brings community work to life. Real portraits and pull-quotes highlight authentic impact stories, fostering empathy and cultural connection.\n\nInteractions: Each portrait is layered over a softly blurred background, ensuring focus on the individual. A clear \"See Our Initiatives\" CTA drives traffic to the full CSR section.",
        },
        { type: "image", src: "/images/case-studies/amns/csr.png", alt: "CSR Stories", aspectRatio: "1032 / 538", bg: "#181818" },
        { type: "divider" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "News & Insights Carousel \u2014\n\nContent: A horizontal slider displays the latest blogs, press releases, and insights with thumbnails, headlines, and short excerpts.\n\nInteractions: Users can navigate with arrows or pagination. The teaser approach invites click-through to full articles while keeping the homepage light and uncluttered.",
        },
        { type: "image", src: "/images/case-studies/amns/news.png", alt: "News & Insights Carousel", aspectRatio: "4128 / 2155", bg: "#181818" },
        { type: "divider" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Culture & Careers \u2014\n\nContent: Employee testimonials paired with portraits highlight diversity, innovation, and workplace culture. The branded initiative #SheMakesSteelSmarter reinforces AM/NS India's inclusive narrative.\n\nInteractions: A standout \"See Open Roles\" button directs users straight to the careers section, streamlining recruitment.",
        },
        { type: "image", src: "/images/case-studies/amns/culture.png", alt: "Culture & Careers", aspectRatio: "4128 / 2155", bg: "#181818" },
        { type: "divider" },

        { type: "heading", text: "Conclusion" },
        {
          type: "paragraph",
          size: "lg",
          maxWidth: 1032,
          body: "The AM/NS India homepage design blends innovation, sustainability, and scale into a seamless digital experience. By creating immersive storytelling, it transforms complex information into clarity. More than a corporate site, it is a discovery platform that reflects the brand’s global leadership and vision.",
        },
      ],
    },
  },
  {
    id: "tata-bolt",
    title: "TATA AIG - BOLT",
    description:
      "TATA AIG\u2019s agent portal was redesigned to create a unified digital experience that balances modern design aesthetics with ease of use for its promoters. The project focused on simplifying complex workflows, improving accessibility, and enhancing overall usability across the platform.",
    coverImage: "/images/covers/tata-bolt.png",
    logo: "/images/logos/tata-aig.png",
    logoClass: "max-w-[100px] max-h-[36px] sm:max-w-[180px] sm:max-h-[68px] lg:max-w-[280px] lg:max-h-[100px]",
    link: "/case-study/tata-bolt",
    caseStudy: {
      title: "TATA AIG Bolt",
      hero: {
        bg: "#EDEDED",
        height: 507,
        image: "/images/case-studies/tata-bolt/hero.png",
        fit: "cover",
      },
      summary:
        "TATA AIG agents handle a lot. New policies, renewals, record-keeping, all while sitting across from a customer who just wants a straight answer. The existing process was slow and scattered. This platform was built to fix that \u2014 policy generation, renewals, and record management, unified into one workflow that finally moves as fast as the agents do.",
      meta: {
        timeline: "2024",
        role: "Product Design",
        platform: "Web",
        deliverables: "UX Wireframing, UI Design, Interactive Prototype",
        tools: "FIGMA, Illustrator",
      },
      blocks: [
        { type: "heading", text: "Overview" },
        {
          type: "paragraph",
          size: "lg",
          body: "TATA AIG agents handle a lot. New policies, renewals, record-keeping, all while sitting across from a customer who just wants a straight answer.\n\nThe existing process was slow and scattered. This platform was built to fix that. Policy generation, renewals, and record management, unified into one workflow that finally moves as fast as the agents do.",
        },
        { type: "divider" },

        { type: "heading", text: "The Challenge" },
        {
          type: "paragraph",
          body: "Agents fell into three categories: high-yielding, medium-yielding, and low-yielding. Each had different needs, different comfort levels with technology, and different definitions of what \"easy\" meant.",
        },
        {
          type: "paragraph",
          body: "The design had to work for all three without being watered down for any of them. Less form-filling. Fewer screens. No dead ends.",
        },
        {
          type: "carousel",
          aspectRatio: "1542 / 863",
          bg: "#EDEDED",
          images: [
            { src: "/images/case-studies/tata-bolt/challenge-1.png", alt: "Legacy flow — screen 1" },
            { src: "/images/case-studies/tata-bolt/challenge-2.png", alt: "Legacy flow — screen 2" },
            { src: "/images/case-studies/tata-bolt/challenge-3.png", alt: "Legacy flow — screen 3" },
          ],
        },
        { type: "divider" },

        { type: "heading", text: "Key Design Decisions" },
        {
          type: "paragraph",
          size: "lg",
          body: "Four moves that shaped the product.",
        },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Simplified Form Flow \u2014\n\nThe biggest friction point was the policy generation form. Long, dense, and unforgiving. We restructured the journey to reduce input steps and surface only what was needed at each stage.",
        },
        { type: "video", src: "/videos/case-studies/tata-bolt/simplified-form.mp4", poster: "/images/case-studies/tata-bolt/decision-1-form.png", aspectRatio: "1030 / 538" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Stepper to Dropdown \u2014\n\nOn mobile, the traditional stepper was eating screen space and losing agents mid-flow. We moved to a dropdown-based approach that kept the current step visible, made it easy to jump back, and freed up room for the actual content.",
        },
        { type: "image", src: "/images/case-studies/tata-bolt/decision-2-stepper.png", alt: "Stepper to Dropdown", aspectRatio: "1031 / 538" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Service Discovery on Landing \u2014\n\nAll of TATA AIG's offerings were buried. A toggle on the landing banner now lets agents switch between product categories and see everything upfront, cutting the time spent searching for the right policy type.",
        },
        { type: "image", src: "/images/case-studies/tata-bolt/decision-3-discovery.png", alt: "Service Discovery on Landing" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Design System \u2014\n\nClean lines, bold colors, consistent components. Built to scale so future product additions don't require rebuilding from scratch every time.",
        },
        { type: "image", src: "/images/case-studies/tata-bolt/decision-4-design-system.png", alt: "Design System" },
        { type: "divider" },

        { type: "heading", text: "Outcome" },
        {
          type: "paragraph",
          size: "lg",
          maxWidth: 1032,
          body: "Time given back to the conversation.\n\nA platform that reduced the time agents spent on process and gave it back to the conversation with the customer. Scalable by design, so the team could keep adding products without revisiting the foundations.",
        },
      ],
    },
  },
  {
    id: "tata-inspectify",
    title: "TATA AIG - INSPECTIFY",
    description:
      "Inspectify is a self-inspection platform developed for TATA AIG to simplify motor insurance renewals for vehicles with expired policies. The platform enables users to seamlessly record and submit vehicle condition videos through a guided digital experience.",
    coverImage: "/images/covers/tata-inspectify.png",
    logo: null,
    link: "/case-study/tata-inspectify",
    caseStudy: {
      title: "TATA AIG INSPECTIFY",
      logo: "/images/case-studies/inspectify/logo-badge.png",
      hero: {
        bg: "#CFDEF2",
        height: 507,
        image: "/images/case-studies/inspectify/hero.png",
        fit: "cover",
      },
      summary:
        "Inspectify is a self-inspection platform developed for Tata AIG to streamline motor insurance renewals for vehicles with expired policies. The platform enables users to seamlessly record and submit vehicle inspection videos through an intuitive, AI-assisted experience featuring real-time visual cues and voice-guided instructions. By digitizing the inspection process, Inspectify reduces manual intervention, accelerates policy renewals, and delivers a faster, more convenient experience for customers.",
      meta: {
        timeline: "2024",
        role: "Product Design",
        platform: "Android, iOS",
        deliverables:
          "Stakeholder Interview, Existing App Audit, User Flow, Wireframing, UI Experience",
        tools: "FIGMA, Mid-journey, Photoshop",
      },
      blocks: [
        { type: "heading", text: "Background" },
        {
          type: "paragraph",
          size: "lg",
          body: "Tata AIG Inspectify is a smart self-inspection platform designed to simplify the pre-inspection process for private, commercial, and goods-carrying vehicles in break-in insurance cases. The platform enables customers with expired motor insurance policies to easily assess and document their vehicle's condition by recording guided videos and photos directly from their device.\n\nPowered by AI-driven visual and voice assistance, Inspectify ensures a smooth and standardized inspection experience while helping insurers verify that no damage occurred during the policy break period. By digitizing the verification process, the platform accelerates policy renewals, reduces manual intervention, and delivers a faster, more convenient customer experience.",
        },
        { type: "divider" },

        { type: "heading", text: "Objective & Goal" },
        {
          type: "paragraph",
          body: "Design a scalable and future-ready product foundation capable of supporting diverse inspection use cases and evolving business requirements.",
        },
        {
          type: "paragraph",
          body: "The primary objective was to reduce the inspection error rate to below 40% while significantly minimizing the number of steps and user interactions required to complete the process. To enhance accuracy and usability, the platform provides real-time feedback, intelligent error detection, and AI-powered visual guidance to help users correctly identify and capture vehicle parts — especially areas that are typically difficult to locate or inspect.",
        },
        { type: "image", src: "/images/case-studies/inspectify/objective.png", alt: "Objective & Goal", aspectRatio: "1031 / 538" },
        { type: "divider" },

        { type: "heading", text: "Business Pains" },
        {
          type: "paragraph",
          body: "The average time required to complete the inspection process was approximately 8 minutes, creating friction in the overall user experience.",
        },
        {
          type: "paragraph",
          body: "Additionally, nearly 40% of submissions were placed on hold due to two major issues — incomplete vehicle video captures and poor visual clarity — both of which resulted in failed validations during the pre-inspection process. The platform also experienced significant user drop-offs even before recording began, highlighting usability challenges and a lack of confidence or guidance during onboarding.",
        },
        { type: "image", src: "/images/case-studies/inspectify/business-pains.png", alt: "Business Pains", aspectRatio: "1031 / 538" },
        { type: "divider" },

        { type: "heading", text: "Insights from Users" },
        {
          type: "paragraph",
          body: "Conducted both virtual and in-person user interviews to better understand user expectations, pain points, and real-world inspection challenges.",
        },
        {
          type: "paragraph",
          body: "Through extensive discussions with end users and on-ground sales teams, we uncovered several critical issues impacting the inspection experience. Users frequently struggled to locate essential vehicle details such as the chassis number, while poor network connectivity in remote or low-signal areas often caused delays, interrupted uploads, and incomplete submissions. These challenges significantly affected process completion rates and overall user confidence during self-inspection.",
        },
        { type: "image", src: "/images/case-studies/inspectify/insights.png", alt: "Insights from Users", aspectRatio: "1031 / 538" },
        { type: "divider" },

        { type: "heading", text: "Competitor Analysis" },
        {
          type: "paragraph",
          body: "Conducted an in-depth competitor analysis for the Tata AIG self-inspection platform, benchmarking the experience against leading insurance providers across key parameters such as AI-powered guidance, visual and voice assistance, onboarding flow, walkthrough experience, and overall time efficiency.",
        },
        {
          type: "paragraph",
          body: "The analysis helped identify existing market gaps, usability shortcomings, and industry best practices, providing valuable insights to refine Tata AIG's inspection journey. These findings played a key role in improving the product's usability, reducing friction in the inspection flow, and creating a more intuitive and differentiated user experience.",
        },
        { type: "image", src: "/images/case-studies/inspectify/competitor.png", alt: "Competitor Analysis", aspectRatio: "1030 / 538" },
        { type: "divider" },

        { type: "heading", text: "New Recording Flow" },
        {
          type: "paragraph",
          body: "Designed a custom camera interface with integrated visual and voice guidance to create a seamless inspection experience — even for first-time users.",
        },
        {
          type: "paragraph",
          body: "The interface provided users with real-time visual references alongside step-by-step video assistance, allowing them to follow guided instructions while simultaneously performing the vehicle inspection. This reduced confusion, improved capture accuracy, and minimized dependency on manual support.",
        },
        {
          type: "paragraph",
          body: "By transforming the inspection into a guided, synchronized experience, users were able to complete the entire process in an average of just 94 seconds — aligning almost exactly with the duration of the assistance video and significantly reducing overall completion time.",
        },
        { type: "image", src: "/images/case-studies/inspectify/recording-flow.png", alt: "New Recording Flow", aspectRatio: "2820 / 1528" },
        { type: "divider" },

        { type: "heading", text: "Strategic UI Design" },
        {
          type: "paragraph",
          body: "Crafted a futuristic yet highly functional user experience by blending immersive visual aesthetics with usability-focused interaction design. The interface incorporated holographic-inspired visual elements to communicate guidance and system feedback more intuitively. These luminous highlights, set against a clean and minimal background, enhanced visual clarity, improved focus on critical actions, and created a distinctive contrast that elevated the overall product experience.",
        },
        {
          type: "paragraph",
          body: "The holographic visual language also reinforced one of the platform's core USPs — real-time AI-powered assistance — symbolizing intelligent guidance throughout the inspection journey. This helped users feel supported and confident while navigating the process. To ensure visual consistency and scalability, the design system was carefully curated and refined with the support of AI-assisted design tools, aligning seamlessly with the broader product ecosystem.",
        },
        {
          type: "paragraph",
          body: "A major design objective was also to sustain user engagement across the entire onboarding and inspection flow. Since substantial drop-offs were occurring even before users entered the core experience, the interface was strategically designed to feel more interactive, guided, and approachable from the very first screen, ultimately improving user retention and completion rates.",
        },
        { type: "image", src: "/images/case-studies/inspectify/strategic-ui.png", alt: "Strategic UI Design", aspectRatio: "1030 / 538" },
        { type: "divider" },

        { type: "heading", text: "Inspection History" },
        {
          type: "paragraph",
          body: "Introduced a fallback upload system that allows users to return and upload their inspection recordings later in case of poor network connectivity.",
        },
        {
          type: "paragraph",
          body: "Inspection videos are securely cached for up to 24 hours, enabling users to resume uploads once they reach a stronger network area. The platform also provides real-time network feedback, guiding users toward a more stable connection for successful submission.",
        },
        { type: "image", src: "/images/case-studies/inspectify/inspection-history.png", alt: "Inspection History", aspectRatio: "1030 / 538" },
        { type: "divider" },

        { type: "heading", text: "Conclusion" },
        {
          type: "paragraph",
          size: "lg",
          maxWidth: 1032,
          body: "Tata AIG Inspectify delivers a distinctive and engaging product experience through a thoughtfully crafted UI and intuitive UX that sets it apart from conventional self-inspection platforms. The platform combines a visually immersive interface with a seamless and predictable user journey, making the self-inspection process feel more approachable, intuitive, and effortless to navigate — even for first-time users.",
        },
      ],
    },
  },
  {
    id: "jsw",
    title: "The Inspire Institute of Sport - JSW Group",
    description:
      "Inspired by India’s growing Olympic ambitions, this concept pitch for Inspire Institute of Sport explored how a digital platform could reflect the intensity, precision, and aspiration of a world-class athletic ecosystem. The project focused on translating elite sports performance into a modern digital experience through bold visual storytelling, structured content architecture, and performance-driven design systems.",
    coverImage: "/images/covers/jsw.png",
    logo: null,
    link: "/case-study/jsw",
    caseStudy: {
      title: "The Inspire Institute of Sport - JSW Group",
      logo: "/images/case-studies/jsw/logo.png",
      titleLogoClass: "max-h-[90px] max-w-[340px]",
      hero: {
        bg: "#EDEDED",
        height: 507,
        video: "/videos/case-studies/jsw/banner.mp4",
        poster: "/images/case-studies/jsw/hero.png",
        fit: "cover",
      },
      summary:
        "Inspired by India's growing Olympic ambitions, this concept pitch for Inspire Institute of Sport explored how a digital platform could reflect the intensity, precision, and aspiration of a world-class athletic ecosystem. The project focused on translating elite sports performance into a modern digital experience through bold visual storytelling, structured content architecture, and performance-driven design systems.",
      meta: {
        timeline: "2024",
        role: "User Interface Designer",
        platform: "Website",
        deliverables: "Information Architecture, User Flow, Experience Design, Visual Design",
        tools: "FIGMA, Photoshop",
      },
      blocks: [
        { type: "heading", text: "The Homepage" },
        {
          type: "paragraph",
          body: "IIS doesn't talk to one kind of person. It talks to athletes deciding where to train. To parents weighing a future. To corporate partners writing cheques. To donors looking for impact. To media chasing a story.",
        },
        {
          type: "paragraph",
          body: "Most institutional sites in this space pick one audience and bury the rest. A site that tried to serve all of them risked becoming a homepage that served none.",
        },
        {
          type: "paragraph",
          body: "The challenge was building a single experience that opened the right door for the right person within seconds — without flattening the brand or fragmenting the journey.",
        },
        {
          type: "embed",
          src: "https://embed.figma.com/proto/J5sDNG6kuhpg80TqKVDn36/JSW?node-id=0-527&viewport=574%2C228%2C0.05&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&embed-host=share",
          title: "JSW IIS Figma prototype",
          aspectRatio: "800 / 450",
        },
      ],
    },
  },
  {
    id: "cartier",
    title: "Cartier MyAtlas",
    description:
      "Cartier myAtlas is an internal social media platform built to streamline communication and foster collaboration within the organization. The project focused on optimizing user flows, improving content discoverability, and ensuring a consistent, intuitive interface.",
    coverImage: "/images/covers/cartier.png",
    logo: "/images/logos/cartier.svg",
    link: "/case-study/cartier",
    caseStudy: {
      title: "Cartier MyAtlas",
      hero: {
        bg: "#EDEDED",
        height: 507,
        image: "/images/case-studies/cartier/hero.png",
        fit: "cover",
      },
      summary:
        "Founded in France, Cartier is one of the world's most iconic luxury maisons, renowned for its exceptional craftsmanship in high-end watches, fine jewelry, and timeless fashion accessories. With a legacy of elegance and innovation, Cartier has established itself among the most prestigious design houses globally.",
      meta: {
        timeline: "2023",
        role: "Product Design",
        platform: "iOS",
        deliverables: "UI testing for elements, navigation, CTAs, page designs, and layouts",
        tools: "FIGMA, Photoshop",
      },
      blocks: [
        { type: "heading", text: "Background" },
        {
          type: "paragraph",
          size: "lg",
          body: "myAtlas is an internal social media app designed specifically for employees to communicate and collaborate within an organization. It is similar to external social media platforms like Facebook or Twitter, but with features that are tailored to the needs and goals of the company.",
        },
        { type: "divider" },

        { type: "heading", text: "Global Design System" },
        { type: "image", src: "/images/case-studies/cartier/design-system-1.png", alt: "Global Design System", aspectRatio: "1031 / 538" },
        { type: "image", src: "/images/case-studies/cartier/design-system-2.png", alt: "Global Design System", aspectRatio: "1031 / 538" },

        { type: "heading", text: "Card" },
        { type: "image", src: "/images/case-studies/cartier/card-1.png", alt: "Card design", aspectRatio: "1031 / 538" },
        { type: "image", src: "/images/case-studies/cartier/card-2.png", alt: "Card design", aspectRatio: "1031 / 538" },
        { type: "image", src: "/images/case-studies/cartier/card-3.png", alt: "Card design", aspectRatio: "1031 / 531" },

        { type: "heading", text: "User Flow" },
        { type: "image", src: "/images/case-studies/cartier/user-flow.png", alt: "User Flow", aspectRatio: "1031 / 531" },
      ],
    },
  },
  {
    id: "stockmann",
    title: "Stockmann",
    description:
      "myStockmann a loyalty app concept that evolved into the central idea for the programme\u2019s overall marketing campaign. The app redesign focused on enhancing the onboarding journey and improving the usability of the dashboard experience.",
    coverImage: "/images/covers/stockmann.png",
    logo: "/images/logos/stockmann-text.svg",
    link: "/case-study/stockmann",
    caseStudy: {
      title: "My Stockmann",
      logo: "/images/case-studies/stockmann/logo.png",
      hero: {
        bg: "#EDEDED",
        height: 507,
        image: "/images/case-studies/stockmann/hero.png",
        fit: "cover",
      },
      summary:
        "The loyalty app concept \"Kanssasi aina\" goes beyond illustrations. In fact, it became the tagline for the entire programme's marketing campaign. The app renewal ended up comprising of its visual design and illustrations, a marketing concept that included key messages, a launch film and a brand guide for the visual language of the loyalty programme.",
      meta: {
        timeline: "2023",
        role: "Product Design",
        platform: "iOS, Android",
        deliverables: "UI Design",
        tools: "FIGMA",
      },
      blocks: [
        { type: "heading", text: "Onboarding" },
        { type: "image", src: "/images/case-studies/stockmann/onboarding.png", alt: "Onboarding screens", aspectRatio: "1031 / 538" },
        { type: "divider" },

        { type: "heading", text: "Dashboard" },
        { type: "image", src: "/images/case-studies/stockmann/dashboard.png", alt: "Dashboard screens", aspectRatio: "1031 / 538" },
      ],
    },
  },
];

export default projects;
