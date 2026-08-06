const projects = [
  {
    id: "fedex",
    title: "FEDEX",
    description:
      "FedEx MWI (Mobile Work Interface) is a digital solution designed to streamline operational workflows for FedEx drivers and workshop managers. The project focused on optimizing the application to improve task efficiency for delivery, collections, and vehicle service coordination, while enhancing usability and performance across mobile devices.",
    coverImage: "/images/covers/fedex-bg.webp",
    logo: "/images/logos/fedex-express.svg",
    link: "/case-study/fedex",
    caseStudy: {
      title: "FedEx - MWI",
      hero: {
        bg: "#EDEDED",
        height: 507,
        image: "/images/case-studies/fedex/banner.webp",
      },
      summary:
        "FedEx couriers in Italy run their whole day from one handheld app: collections, deliveries, signatures, routes. It ran on Windows hardware built for a stylus. I redesigned it for Android, and it is now on more than 3,000 devices.",
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
          body: "Mobile Worker In-Cab is the app FedEx couriers in Italy use for everything: collections, deliveries, signatures, route operations. It ran on a Windows handheld that drivers had outgrown. Every interaction assumed a stylus and hardware buttons, on a device people now expect to use like a phone.",
        },
        {
          type: "paragraph",
          size: "lg",
          body: "I led the redesign onto Android. It is live across the Italian field operation.",
        },
        { type: "image", src: "/images/case-studies/fedex/overview.webp", alt: "FedEx MWI overview" },

        { type: "heading", text: "The Challenge" },
        {
          type: "paragraph",
          body: "Nobody had written any of it down.\n\nNo architecture diagram, no business logic spec, no documented flows. The app had grown a feature at a time over years, and what it actually did lived in the heads of a handful of stakeholders. Before I could redesign anything I had to work out what the current system did, screen by screen, then check that against the people using it.",
        },
        {
          type: "paragraph",
          body: "The hardware looked similar. The interaction model was not.\n\nDrivers were moving from a Windows handheld to a rugged Android one. Same cab, same job, roughly the same size device. But the old app was built for a stylus: dense forms, small targets, hardware buttons, and navigation buried in dropdowns. Rebuilding it screen for screen would have put a Windows app on Android hardware. I had to decide which of the driver's habits to keep and which to drop.",
        },
        { type: "divider" },

        { type: "heading", text: "My Role" },
        {
          type: "list",
          intro: "I led the design end to end with a small dev team:",
          items: [
            "Reverse-engineering the legacy Windows handheld application to map its workflows and business logic",
            "Running stakeholder interviews to fill gaps in undocumented behavior",
            "Defining the new information architecture for Android",
            "Owning the visual system, interaction patterns, and screen-level design decisions",
            "Driving alignment with product, engineering, and FedEx Italy operations",
          ],
        },
        { type: "image", src: "/images/case-studies/fedex/my-role.webp", alt: "My Role" },
        { type: "divider" },

        { type: "heading", text: "Key Screens" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "In-Cab Login\n\nDrivers wake the device in the cab and need to know where they are straight away. The new entry point orients them on wake instead of asking them to read a form.",
        },
        { type: "image", src: "/images/case-studies/fedex/in-cab-1-login.webp", alt: "In-Cab Login screen" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Device Registration\n\nSetup used to be its own configuration step, done separately from getting started. I folded it into onboarding so a driver sets the device up once, in the flow they are already in.",
        },
        { type: "image", src: "/images/case-studies/fedex/device-registration.webp", alt: "Device Registration screen" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Menu\n\nThe legacy menu buried everything a level or two down. I replaced it with a dashboard, and moved notifications to where drivers actually look rather than where the old structure had room for them.",
        },
        { type: "image", src: "/images/case-studies/fedex/in-cab-2-menu.webp", alt: "Mobile Worker Menu screen" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Job Summary\n\nCollections and deliveries were mixed together, so drivers had to work out what was still outstanding. Tabs separate the two, and each shows what is done and what is left.",
        },
        { type: "image", src: "/images/case-studies/fedex/in-cab-3-job-summary.webp", alt: "Job Summary screen" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Collection Flow\n\nThe actions drivers take most often had the same weight as the ones they rarely touch. I rebuilt the layout so the common action is the obvious one.",
        },
        { type: "image", src: "/images/case-studies/fedex/in-cab-4-collection.webp", alt: "Collection Flow screen" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Delivery Flow\n\nCapturing proof of delivery took more steps than it needed to, with the primary action competing for attention. The restructured flow makes that action obvious and gets there in fewer taps.",
        },
        { type: "image", src: "/images/case-studies/fedex/in-cab-5-delivery.webp", alt: "Delivery Flow screen" },

        { type: "heading", text: "Outcome" },
        {
          type: "paragraph",
          size: "lg",
          body: "The redesign went out to more than 3,000 rugged Android devices used by FedEx drivers across Italy.\n\nThat was the bet the project rested on: that a Windows handheld workflow could be rebuilt for Android without disrupting the operation. Drivers moved onto it in real delivery conditions and kept working.",
        },
        { type: "divider" },

        { type: "heading", text: "Reflection" },
        {
          type: "paragraph",
          size: "lg",
          maxWidth: 1032,
          body: "The hard part was not the visual design. It was working without a map. I was reverse-engineering a system nobody had documented while redesigning it for different hardware, which meant holding two pictures in my head at once: how the old device behaved in a driver's hand, and how the new one should.\n\nWhat I took from it is that when the OS changes under a device that looks the same, the job is not translating screens. It is working out which of the driver's habits still earn their place.",
        },
      ],
    },
  },
  {
    id: "audi",
    title: "AUDI",
    description:
      "Audi Genie is a next-generation infotainment system designed to enhance the in-car digital experience for Audi users. The project focused on optimizing interaction flows to reduce cognitive load and improve driver efficiency across navigation, media, and vehicle controls.",
    coverImage: "/images/covers/audi.webp",
    logo: "/images/logos/audi.svg",
    link: "/case-study/audi",
    caseStudy: {
      title: "AUDI - Drive Genie",
      hero: {
        bg: "#EDEDED",
        height: 507,
        image: "/images/case-studies/audi/hero.webp",
      },
      summary:
        "Most in-car assistants wait to be asked. Audi Genie was briefed the other way round: learn the driver's routes, habits and comfort settings, then handle the small decisions before anyone reaches for a button.",
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
          body: "Most in-car assistants are reactive. You ask, they answer, and every useful thing the car could do stays behind a menu the driver has to remember. The brief here was to build something that understands enough context to act first.",
        },
        {
          type: "paragraph",
          size: "lg",
          body: "The concept is an intelligence layer sitting under the car's existing CID. It watches and learns, and over time it connects the calendar to the usual routes and the comfort settings, then starts making the call itself.",
        },
        { type: "image", src: "/images/case-studies/audi/overview.webp", alt: "Audi Drive Genie overview" },
        { type: "divider" },

        { type: "heading", text: "My Role" },
        {
          type: "list",
          intro: "I led the experience design end to end:",
          items: [
            "Mapping requirement to scenario to flow for each feature, so nothing got designed away from how drivers actually behave",
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
          body: "Learning Daily Routines\n\nA suggestion is only useful if it has seen enough to be right. The system records route, departure time and destination quietly over several days, and waits for a pattern to hold before it surfaces a routine card. Weekends run on their own logic, so a Saturday habit never leaks into a Tuesday morning.",
        },
        { type: "video", src: "/videos/case-studies/audi/learning-routines.mp4", poster: "/images/case-studies/audi/cap-1-routines.webp", aspectRatio: "2228 / 916" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Destination Suggestions\n\nNeither the calendar nor the driver's habits are enough on their own, so Genie uses both. A morning meeting produces a navigation card with an ETA. A Thursday evening produces the grocery stop the driver usually makes. A Saturday gym trip needs both signals, and only appears once the pattern has held over several weekends.",
        },
        { type: "video", src: "/videos/case-studies/audi/destination-suggestions.mp4", poster: "/images/case-studies/audi/cap-2-destinations.webp", aspectRatio: "2228 / 916" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Curated Playlists\n\nMedia habits follow routes. The morning commute, the evening wind-down and weekend errands each have their own listening profile, and finding the right one means digging through the media app while driving. Genie learns the profiles and offers the playlist before the app is opened.",
        },
        { type: "video", src: "/videos/case-studies/audi/curated-playlists.mp4", poster: "/images/case-studies/audi/cap-3-playlists.webp", aspectRatio: "2228 / 916" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "One-Click Comfort Settings\n\nClimate, seat position and massage settings get adjusted at the start of most drives, and the right setting depends on which drive it is. Presets are tied to routine context, so morning differs from evening and the weekend has its own. A comfort button on the home screen covers the times the driver disagrees with the suggestion and does not want to go hunting through settings.",
        },
        { type: "video", src: "/videos/case-studies/audi/comfort-settings.mp4", poster: "/images/case-studies/audi/cap-4-comfort.webp", aspectRatio: "2228 / 916" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Vehicle Data Alerts\n\nA battery warning is worth much less once you have already left. The system checks charge against where the driver is actually going that day, so the low battery alert fires before they leave home, and the charging reminder knows whether the current range covers the next meeting. The weekend version checks the usual Saturday route ahead of time and suggests where to stop.",
        },
        { type: "video", src: "/videos/case-studies/audi/vehicle-data-alerts.mp4", poster: "/images/case-studies/audi/cap-5-vehicle-data.webp", aspectRatio: "2228 / 916" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Voice Assistant\n\nEverything Genie does has to work without the driver looking at anything. Navigation, playlists, comfort and battery checks all run through natural language. The constraint was strict: no screen tap needed, and no visual confirmation that takes the driver's eyes off the road. Each flow resolves through voice, with minimal feedback on the CID.",
        },
        { type: "video", src: "/videos/case-studies/audi/voice.mp4", poster: "/images/case-studies/audi/cap-6-voice.webp", aspectRatio: "2228 / 916" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Adaptive UI\n\nThis was the hardest one. A dashboard that suits an empty motorway is too much on a busy interchange, and the driver has no spare attention to simplify it themselves. As traffic gets harder the interface thins out on its own: fewer widgets, bigger navigation, secondary actions moved to voice. When conditions ease it comes back, without asking.",
        },
        { type: "video", src: "/videos/case-studies/audi/adaptive-ui.mp4", poster: "/images/case-studies/audi/cap-7-adaptive.webp", aspectRatio: "2228 / 916" },
        { type: "divider" },

        { type: "heading", text: "Reflection" },
        {
          type: "paragraph",
          size: "lg",
          maxWidth: 1032,
          body: "The question that came up in every flow review was when silence is the right answer. An assistant that always has something to offer stops being helpful and starts being tiring, so a good part of the design is the logic for staying quiet: nothing if the driver just dismissed a suggestion, no playlist prompt if music is already playing, no comfort preset before the car has moved.\n\nDesigning the restraint took longer than designing the features. The flows I spent most time on were not the complicated ones. They were the ones where the right behaviour was to do nothing.",
        },
      ],
    },
  },
  {
    id: "general-motors",
    title: "General Motors",
    description:
      "Finance360 is General Motors’ internal financial intelligence platform — the operating system for how GM’s finance teams track performance, surface variances, benchmark plants, and sign off on commentary across every region. The project focused on unifying fragmented reporting tools into a single experience that serves both executives reading a summary and analysts drilling into regional variances.",
    coverImage: "/images/covers/general-motors.webp",
    logo: null,
    link: "/case-study/general-motors",
    caseStudy: {
      title: "General Motors - FINANCE360",
      hero: {
        bg: "#EDEDED",
        height: 507,
        image: "/images/case-studies/gm/hero.webp",
        fit: "cover",
      },
      summary:
        "GM's finance teams were spending more time finding numbers than acting on them, spread across static reports, disconnected spreadsheets and manual sign-off. Finance360 pulls that into one platform, for every region and business unit.",
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
          body: "Finance360 is General Motors' internal financial intelligence platform. It is where GM's finance teams track performance, surface variances, benchmark plants and sign off on commentary, across every region the company runs.",
        },
        { type: "image", src: "/images/case-studies/gm/overview.webp", alt: "Finance360 overview" },
        { type: "divider" },

        { type: "heading", text: "The Challenge" },
        {
          type: "paragraph",
          body: "GM's finance teams worked across fragmented tools: static reports, disconnected spreadsheets, manual sign-off. The people meant to be making decisions spent more of their time locating the numbers than using them.",
        },
        {
          type: "paragraph",
          body: "The brief was one platform that works for an executive reading a summary and an analyst digging into regional variances, without either of them getting the other one's product.",
        },
        { type: "divider" },

        { type: "heading", text: "Key Screens" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Homepage\n\nA landing page that is a menu makes every user find their own way to the same few numbers. This one opens as a briefing instead: suggested prompts, the insights worth knowing first, and a KPI dashboard built from the consoles that user already tracks.",
        },
        { type: "video", src: "/videos/case-studies/gm/homepage.mp4", poster: "/images/case-studies/gm/homepage.webp", aspectRatio: "1032 / 514" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Manufacturing Console\n\nThis is where analysts spend the day, so it had to hold a lot without falling apart: filter bar, modular data cards, waterfall chart, heatmap, competitive losses and commentary sign-off, in one view rather than six.",
        },
        { type: "image", src: "/images/case-studies/gm/manufacturing-console.webp", alt: "Manufacturing Console screen" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "L2 Drill-Down\n\nEvery KPI card opens into the same place, so nobody has to learn a new layout per metric. Current forecast against budget and prior year, a full year trend, a regional split across GMNA, GMAP and GMSA, and an AI Insights panel that takes the first pass before the analyst starts reading.",
        },
        { type: "video", src: "/videos/case-studies/gm/l2-drilldown.mp4", poster: "/images/case-studies/gm/l2-drilldown.webp", aspectRatio: "1032 / 514" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Plant Benchmarking\n\nComparing plants means knowing which difference matters. Non-Scheduled Overtime across Arlington, Flint and Fort Wayne is shown against target, with AI Insights naming the outliers rather than leaving them to be spotted. A comment thread underneath lets finance add the dollar context the chart cannot carry.",
        },
        { type: "video", src: "/videos/case-studies/gm/plant-benchmarking.mp4", poster: "/images/case-studies/gm/plant-benchmarking.webp", aspectRatio: "1032 / 514" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Report Hub\n\nA library is only useful if the right report is near the top. Views across the Financial, Commercial, Operational and Risk domains are ordered by what the user opened recently, what they saved, and what the system recommends.",
        },
        { type: "video", src: "/videos/case-studies/gm/report-hub.mp4", poster: "/images/case-studies/gm/report-hub.webp", aspectRatio: "1032 / 514" },
        { type: "divider" },

        { type: "heading", text: "Reflection" },
        {
          type: "paragraph",
          size: "lg",
          maxWidth: 1032,
          body: "The design problem was hierarchy. Every team wanted their metric visible, and a platform that grants all of those requests is a platform where nothing reads first. Deciding which number is the headline, which chart earns full width, and which AI insight surfaces, then holding those decisions steady across dozens of modules, is where most of the work went.",
        },
      ],
    },
  },
  {
    id: "amns",
    title: "AM/NS India",
    description:
      "Redesign pitch for AM/NS India, a joint venture between ArcelorMittal and Nippon Steel, focused on modernizing the company\u2019s digital presence using existing design system elements. The objective was to improve content discoverability, strengthen brand storytelling, and create a more engaging experience.",
    coverImage: "/images/covers/amns.webp",
    logo: "/images/logos/amns.svg",
    link: "/case-study/amns",
    caseStudy: {
      title: "AM/NS India",
      hero: {
        bg: "#EDEDED",
        height: 507,
        video: "/videos/case-studies/amns/banner.mp4",
        poster: "/images/case-studies/amns/hero.webp",
        fit: "cover",
      },
      summary:
        "AM/NS India is a joint venture between ArcelorMittal and Nippon Steel, and its homepage had to serve a government official, a vendor and a student at once. This was a redesign pitch: one page that gets each of them to what they came for without burying the others.",
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
          body: "A homepage serving that many audiences usually solves it with more links, and ends up serving none of them. I restructured it around four things a visitor is actually there for: vision, discovery, impact and credibility. Navigation is built around who the visitor is rather than how the company is organised, and Smart Discovery folds what would have been several separate entry points into one guided flow.",
        },
        { type: "divider" },

        { type: "heading", text: "Key Sections" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Hero Section\n\nThe homepage opens on \"Smarter Steels, Brighter Futures\" with \"Powering India's growth\" underneath, over a muted full-bleed video loop.\n\nThree highlight cards sit on the hero: Thought Leadership, Innovation and Sustainability. They hold their content until hover, which lets the hero offer three routes onward without three blocks of copy competing with the headline.",
        },
        { type: "video", src: "/videos/case-studies/amns/hero-section.mp4", poster: "/images/case-studies/amns/hero-section.webp", aspectRatio: "1032 / 514" },
        { type: "divider" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Who We Are\n\nThis fold carries the history and the values: Relentless Safety, Endlessly Creative, Consistently Excellent, Always Collaborative, Forever Dynamic.\n\nA values list is the easiest thing on a corporate site to scroll past, so the text highlights progressively as the visitor moves down it, with team photography breaking up the run.",
        },
        { type: "image", src: "/images/case-studies/amns/who-we-are.webp", alt: "Who We Are section mock", aspectRatio: "1032 / 530" },
        { type: "divider" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Product Discovery\n\nA steel catalogue is unusable if you do not already know what you need. Start Product Discovery asks three questions instead: who you are, what industry, what the material has to do.\n\nEach answer reveals the next question, so a government official picks Infrastructure and then Structural Strength without seeing the options that were never relevant. See Results returns matching products with specs and visuals, and the visitor can run it again.",
        },
        { type: "image", src: "/images/case-studies/amns/product-discovery.webp", alt: "Product Discovery flow", aspectRatio: "1032 / 538" },
        { type: "divider" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "The Impact Trio\n\nInnovation, Sustainability and Safety each get a headline metric and the story behind it.\n\nThe numbers count up as they come into view, paired with imagery, and each one ends with a route to its own page for anyone who wants the detail.",
        },
        { type: "image", src: "/images/case-studies/amns/impact-trio.webp", alt: "The Impact Trio" },
        { type: "divider" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Flagship Products Gallery\n\nTen flagship products in a masonry grid, with renders and short titles. Pre-painted products switch colour in place, so nobody has to open a separate page to see a finish.\n\nOn mobile the grid becomes a swipeable carousel rather than a very long column.",
        },
        { type: "image", src: "/images/case-studies/amns/flagship.webp", alt: "Flagship Products Gallery" },
        { type: "divider" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "CSR Stories & Community Impact\n\nCSR sections tend to read as policy. This one runs on portraits and pull-quotes from the people involved.\n\nEach portrait sits over a blurred background so the person stays the subject, and See Our Initiatives leads to the full CSR section.",
        },
        { type: "image", src: "/images/case-studies/amns/csr.webp", alt: "CSR Stories", aspectRatio: "1032 / 538", bg: "#181818" },
        { type: "divider" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "News & Insights Carousel\n\nA horizontal slider carries the latest blogs, press releases and insights, each with a thumbnail, headline and short excerpt.\n\nArrows or pagination move through it. Showing excerpts rather than full posts keeps a section that grows every week from taking over the page.",
        },
        { type: "image", src: "/images/case-studies/amns/news.webp", alt: "News & Insights Carousel", aspectRatio: "4128 / 2155", bg: "#181818" },
        { type: "divider" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Culture & Careers\n\nEmployee testimonials with portraits, and the #SheMakesSteelSmarter initiative.\n\nAnyone reading this section is usually one step from applying, so See Open Roles goes straight to the careers section rather than to an about page.",
        },
        { type: "image", src: "/images/case-studies/amns/culture.webp", alt: "Culture & Careers", aspectRatio: "4128 / 2155", bg: "#181818" },
        { type: "divider" },

        { type: "heading", text: "Conclusion" },
        {
          type: "paragraph",
          size: "lg",
          maxWidth: 1032,
          body: "The result is a homepage that takes a very broad audience and gets each part of it somewhere useful, without turning into a directory. The work that mattered was deciding what a first-time visitor needs to understand before anything else, and holding the rest back until they ask for it.",
        },
      ],
    },
  },
  {
    id: "tata-bolt",
    title: "TATA AIG - BOLT",
    description:
      "TATA AIG\u2019s agent portal was redesigned to create a unified digital experience that balances modern design aesthetics with ease of use for its promoters. The project focused on simplifying complex workflows, improving accessibility, and enhancing overall usability across the platform.",
    coverImage: "/images/covers/tata-bolt.webp",
    logo: "/images/logos/tata-aig.png",
    logoClass: "max-w-[100px] max-h-[36px] sm:max-w-[180px] sm:max-h-[68px] lg:max-w-[280px] lg:max-h-[100px]",
    link: "/case-study/tata-bolt",
    caseStudy: {
      title: "TATA AIG Bolt",
      hero: {
        bg: "#EDEDED",
        height: 507,
        image: "/images/case-studies/tata-bolt/hero.webp",
        fit: "cover",
      },
      summary:
        "TATA AIG agents issue policies with a customer sitting in front of them, waiting. The old process spread that across slow, disconnected screens. This platform puts policy generation, renewals and record management into one workflow.",
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
          body: "TATA AIG agents handle a lot. New policies, renewals, record-keeping, all while sitting across from a customer who just wants a straight answer.\n\nThe existing process was slow and scattered, which the customer watches happen. The platform puts policy generation, renewals and record management into one workflow that keeps up with the conversation.",
        },
        { type: "divider" },

        { type: "heading", text: "The Challenge" },
        {
          type: "paragraph",
          body: "Agents fell into high, medium and low-yielding groups, and they did not want the same thing. They differed in what they needed from the tool and in how comfortable they were with software, so \"easy\" meant something different to each of them.",
        },
        {
          type: "paragraph",
          body: "The design had to serve all three without being flattened to the middle. That meant less form-filling, fewer screens, and no paths that end without telling the agent what to do next.",
        },
        {
          type: "carousel",
          aspectRatio: "1542 / 863",
          bg: "#EDEDED",
          images: [
            { src: "/images/case-studies/tata-bolt/challenge-1.webp", alt: "Legacy flow — screen 1" },
            { src: "/images/case-studies/tata-bolt/challenge-2.webp", alt: "Legacy flow — screen 2" },
            { src: "/images/case-studies/tata-bolt/challenge-3.webp", alt: "Legacy flow — screen 3" },
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
          body: "Simplified Form Flow\n\nThe policy generation form was the worst of it: long, dense, and unforgiving if you got something wrong late. We restructured the journey to cut input steps and show only what is needed at each stage.",
        },
        { type: "video", src: "/videos/case-studies/tata-bolt/simplified-form.mp4", poster: "/images/case-studies/tata-bolt/decision-1-form.webp", aspectRatio: "1030 / 538" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Stepper to Dropdown\n\nOn mobile the stepper ate the screen and still lost agents mid-flow. A dropdown keeps the current step visible, makes going back one tap, and gives the space to the content instead of the progress indicator.",
        },
        { type: "image", src: "/images/case-studies/tata-bolt/decision-2-stepper.webp", alt: "Stepper to Dropdown", aspectRatio: "1031 / 538" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Service Discovery on Landing\n\nTATA AIG's products were buried, so agents spent time searching for the right policy type in front of the customer. A toggle on the landing banner switches between categories and shows what is available up front.",
        },
        { type: "image", src: "/images/case-studies/tata-bolt/decision-3-discovery.webp", alt: "Service Discovery on Landing" },
        {
          type: "paragraph",
          weight: "semibold",
          size: "lg",
          body: "Design System\n\nProducts get added to a platform like this constantly, and without a system each addition is a rebuild. Consistent components and a clear visual language mean the next product drops into what already exists.",
        },
        { type: "image", src: "/images/case-studies/tata-bolt/decision-4-design-system.webp", alt: "Design System" },
        { type: "divider" },

        { type: "heading", text: "Outcome" },
        {
          type: "paragraph",
          size: "lg",
          maxWidth: 1032,
          body: "Time given back to the conversation.\n\nAgents spend less of the appointment on process and more of it talking to the customer. The team can keep adding products without going back to the foundations each time.",
        },
      ],
    },
  },
  {
    id: "tata-inspectify",
    title: "TATA AIG - INSPECTIFY",
    description:
      "Inspectify is a self-inspection platform developed for TATA AIG to simplify motor insurance renewals for vehicles with expired policies. The platform enables users to seamlessly record and submit vehicle condition videos through a guided digital experience.",
    coverImage: "/images/covers/tata-inspectify.webp",
    logo: null,
    link: "/case-study/tata-inspectify",
    caseStudy: {
      title: "TATA AIG INSPECTIFY",
      logo: "/images/case-studies/inspectify/logo-badge.webp",
      hero: {
        bg: "#CFDEF2",
        height: 507,
        image: "/images/case-studies/inspectify/hero.webp",
        fit: "cover",
      },
      summary:
        "To renew a lapsed motor policy, Tata AIG needed proof the car had not been damaged while it was uninsured. That meant an inspection, and the old one took about 8 minutes with 40% of submissions failing. Inspectify is the guided self-inspection that replaced it. Average completion is now 94 seconds.",
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
          body: "When a motor policy lapses, the insurer has to check the car was not damaged during the gap before renewing it. Inspectify lets the customer do that check themselves, from their own phone, for private, commercial and goods-carrying vehicles.\n\nVisual and voice guidance walks them through it, which keeps submissions consistent enough for the insurer to actually use. Renewals move faster and fewer of them need a person to intervene.",
        },
        { type: "divider" },

        { type: "heading", text: "What we had to fix" },
        {
          type: "paragraph",
          body: "Build a foundation that holds up as the inspection types and business requirements change.",
        },
        {
          type: "paragraph",
          body: "The target was to get the error rate under 40% and cut the number of steps it takes to finish. Getting there meant telling people they had made a mistake while they could still fix it, and showing them where a part is rather than naming it, since the hard ones are the parts an owner has never had to find before.",
        },
        { type: "image", src: "/images/case-studies/inspectify/objective.webp", alt: "Objective & Goal", aspectRatio: "1031 / 538" },
        { type: "divider" },

        { type: "heading", text: "What was going wrong" },
        {
          type: "paragraph",
          body: "The inspection took about 8 minutes, which is a long time to hold a phone at arm's length around a car.",
        },
        {
          type: "paragraph",
          body: "Nearly 40% of submissions were put on hold, either because the video missed part of the vehicle or because it was too unclear to validate. Both meant the customer had to do the whole thing again. A large number of people also left before recording started at all, which said the problem began before the camera did.",
        },
        { type: "image", src: "/images/case-studies/inspectify/business-pains.webp", alt: "Business Pains", aspectRatio: "1031 / 538" },
        { type: "divider" },

        { type: "heading", text: "What users told us" },
        {
          type: "paragraph",
          body: "I ran interviews both remotely and in person, and spoke to the sales teams who deal with the fallout when an inspection fails.",
        },
        {
          type: "paragraph",
          body: "Two things came up repeatedly. People could not find the details they were asked for, the chassis number most of all, because most owners have never needed to locate it. And in low-signal areas uploads stalled or died part-way, so an inspection someone had completed correctly still failed.",
        },
        { type: "image", src: "/images/case-studies/inspectify/insights.webp", alt: "Insights from Users", aspectRatio: "1031 / 538" },
        { type: "divider" },

        { type: "heading", text: "Competitor Analysis" },
        {
          type: "paragraph",
          body: "I benchmarked the experience against other insurers on the things that decide whether someone finishes: how much guidance they give, whether there is voice as well as visual help, what onboarding asks for, and how long the whole thing takes.",
        },
        {
          type: "paragraph",
          body: "That showed where the category was weak and where it had already settled on something that works, which is what the flow below was built from.",
        },
        { type: "image", src: "/images/case-studies/inspectify/competitor.webp", alt: "Competitor Analysis", aspectRatio: "1030 / 538" },
        { type: "divider" },

        { type: "heading", text: "Guiding people while they record" },
        {
          type: "paragraph",
          body: "The camera is custom, with the visual and voice guidance built into it rather than sitting in a help screen beforehand.",
        },
        {
          type: "paragraph",
          body: "Instructions given up front get forgotten by the time someone is halfway round the car. Here the visual reference and the assistance video run while they record, so they are following along rather than remembering.",
        },
        {
          type: "paragraph",
          body: "Average completion came down to 94 seconds, which is almost exactly the length of the assistance video. People finish when the guide finishes, down from roughly 8 minutes.",
        },
        { type: "image", src: "/images/case-studies/inspectify/recording-flow.webp", alt: "New Recording Flow", aspectRatio: "2820 / 1528" },
        { type: "divider" },

        { type: "heading", text: "Making guidance readable at arm\u2019s length" },
        {
          type: "paragraph",
          body: "Guidance has to read instantly on a phone held at arm's length, often outdoors. The interface uses holographic-style highlights against a plain background so the thing being pointed at is unmistakable, and so system feedback does not compete with the camera view behind it.",
        },
        {
          type: "paragraph",
          body: "It also makes the AI assistance visible, which matters when the whole product asks someone to trust that they are doing it right. The design system was built out with AI-assisted tooling to keep it consistent as the product grew.",
        },
        {
          type: "paragraph",
          body: "The drop-off before recording was the other thing this had to fix. If the first screen looks like a form, people leave, so onboarding was designed to feel guided from the start rather than like paperwork standing between them and the task.",
        },
        { type: "image", src: "/images/case-studies/inspectify/strategic-ui.webp", alt: "Strategic UI Design", aspectRatio: "1030 / 538" },
        { type: "divider" },

        { type: "heading", text: "When the network drops" },
        {
          type: "paragraph",
          body: "Losing a finished inspection to a bad signal is the worst possible failure, because the customer did everything right.",
        },
        {
          type: "paragraph",
          body: "Recordings are cached securely for 24 hours, so someone can drive somewhere with signal and finish the upload instead of starting again. The app also shows connection quality while they work, so a weak signal is visible before it costs them the recording.",
        },
        { type: "image", src: "/images/case-studies/inspectify/inspection-history.webp", alt: "Inspection History", aspectRatio: "1030 / 538" },
        { type: "divider" },

        { type: "heading", text: "Conclusion" },
        {
          type: "paragraph",
          size: "lg",
          maxWidth: 1032,
          body: "The inspection went from roughly 8 minutes to 94 seconds, with the failure modes behind the 40% hold rate designed out rather than explained away. Most of that came from one decision: guiding people while they record instead of briefing them first.",
        },
      ],
    },
  },
  {
    id: "jsw",
    title: "The Inspire Institute of Sport - JSW Group",
    description:
      "Inspired by India’s growing Olympic ambitions, this concept pitch for Inspire Institute of Sport explored how a digital platform could reflect the intensity, precision, and aspiration of a world-class athletic ecosystem. The project focused on translating elite sports performance into a modern digital experience through bold visual storytelling, structured content architecture, and performance-driven design systems.",
    coverImage: "/images/covers/jsw.webp",
    logo: null,
    link: "/case-study/jsw",
    caseStudy: {
      title: "The Inspire Institute of Sport - JSW Group",
      logo: "/images/case-studies/jsw/logo.webp",
      titleLogoClass: "max-h-[90px] max-w-[340px]",
      hero: {
        bg: "#EDEDED",
        height: 507,
        video: "/videos/case-studies/jsw/banner.mp4",
        poster: "/images/case-studies/jsw/hero.webp",
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
    coverImage: "/images/covers/cartier.webp",
    logo: "/images/logos/cartier.svg",
    link: "/case-study/cartier",
    caseStudy: {
      title: "Cartier MyAtlas",
      hero: {
        bg: "#EDEDED",
        height: 507,
        image: "/images/case-studies/cartier/hero.webp",
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
        { type: "image", src: "/images/case-studies/cartier/design-system-1.webp", alt: "Global Design System", aspectRatio: "1031 / 538" },
        { type: "image", src: "/images/case-studies/cartier/design-system-2.webp", alt: "Global Design System", aspectRatio: "1031 / 538" },

        { type: "heading", text: "Card" },
        { type: "image", src: "/images/case-studies/cartier/card-1.webp", alt: "Card design", aspectRatio: "1031 / 538" },
        { type: "image", src: "/images/case-studies/cartier/card-2.webp", alt: "Card design", aspectRatio: "1031 / 538" },
        { type: "image", src: "/images/case-studies/cartier/card-3.webp", alt: "Card design", aspectRatio: "1031 / 531" },

        { type: "heading", text: "User Flow" },
        { type: "image", src: "/images/case-studies/cartier/user-flow.webp", alt: "User Flow", aspectRatio: "1031 / 531" },
      ],
    },
  },
  {
    id: "stockmann",
    title: "Stockmann",
    description:
      "myStockmann a loyalty app concept that evolved into the central idea for the programme\u2019s overall marketing campaign. The app redesign focused on enhancing the onboarding journey and improving the usability of the dashboard experience.",
    coverImage: "/images/covers/stockmann.webp",
    logo: "/images/logos/stockmann-text.svg",
    link: "/case-study/stockmann",
    caseStudy: {
      title: "My Stockmann",
      logo: "/images/case-studies/stockmann/logo.webp",
      hero: {
        bg: "#EDEDED",
        height: 507,
        image: "/images/case-studies/stockmann/hero.webp",
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
        { type: "image", src: "/images/case-studies/stockmann/onboarding.webp", alt: "Onboarding screens", aspectRatio: "1031 / 538" },
        { type: "divider" },

        { type: "heading", text: "Dashboard" },
        { type: "image", src: "/images/case-studies/stockmann/dashboard.webp", alt: "Dashboard screens", aspectRatio: "1031 / 538" },
      ],
    },
  },
];

export default projects;
