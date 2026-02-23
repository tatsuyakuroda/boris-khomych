/** Optional media for a project: images, self-hosted video, or YouTube embed */
export type ProjectMedia =
  | { type: "image"; src: string; alt?: string }
  | { type: "video"; src: string }
  | { type: "youtube"; id: string };

/** Optional long-form overview and key features for a project case study */
export type ProjectFeature = { title: string; items: readonly string[] };

export const PROJECTS = [
  {
    slug: "claims-ai-platform",
    title: "Claims AI Platform (Healthcare)",
    impact:
      "Automated medical document extraction & chart audits with explainable AI workflows.",
    overview:
      "Claims AI Platform is an end‑to‑end system that automates the extraction, validation, and auditing of medical documentation for healthcare organizations. It transforms unstructured clinical data into structured results, flags discrepancies, and explains decisions using transparent reasoning. The platform reduces manual review workload by 70–85%, enabling faster claims processing and higher accuracy.",
    stack: ["Next.js", "Node", "AWS", "Docker", "TypeScript", "OCR", "Open AI integration", "React"],
    image: "/projects/images/claim-ai.png",
    medias: [
      { type: "video", src: "/projects/claims-ai-platform/videos/claimai-portfolio.mp4" },
      { type: "video", src: "/projects/claims-ai-platform/videos/claimai-portfolio-2.mp4" },
    ],
    features: [
      {
        title: "Document Intake & OCR Pipeline",
        items: [
          "Upload PDFs, images, faxes, or EMR exports",
          "Multi‑stage OCR with noise reduction",
          "Automatic page classification (H&P, Progress Note, Discharge Summary, etc.)",
          "Structured JSON output for downstream AI modules",
        ],
      },
      {
        title: "AI‑Driven Claims Audit",
        items: [
          "LLM agents evaluate documentation against payer rules",
          "Detect missing documentation, coding errors, expired signatures, mismatches",
          "Explainable reasoning: each AI finding includes human‑readable justification",
        ],
      },
      {
        title: "Chart Consistency Scoring",
        items: [
          "Cross‑check diagnosis, orders, labs, vitals, physician notes",
          "Detect contradictions or incomplete evidence",
          "Assign quality score to each chart packet",
        ],
      },
      {
        title: "Coding Suggestion Engine",
        items: [
          "Extract ICD‑10 / CPT / HCPCS candidates",
          "Provide coded justifications",
          "Highlight missing elements needed to support a code",
        ],
      },
      {
        title: "Human‑in‑the‑loop Review",
        items: [
          "Reviewer dashboard",
          "Accept/reject AI findings",
          "Auto‑generate report summaries",
        ],
      },
      {
        title: "Secure Infrastructure",
        items: [
          "Role‑based access control",
          "Encrypted document storage (AWS S3, KMS)",
          "Audit logs for every AI action",
        ],
      },
    ] as const,
  },
  {
    slug: "novmuser-ai",
    title: "Novmuser AI (AI Novel Writing Platform)",
    impact:
      "AI-powered writing companion for planning, generating, and managing long-form fiction with collaborative agent workflows.",
    overview:
      "Novmuser AI is an end‑to‑end AI writing platform focused on novel authors, helping them design story structure, generate chapters, and manage large manuscripts as modular content chunks. It combines AI agents, topic management, and real‑time content streaming to turn high‑level ideas into organized, editable prose while keeping full control in the writer's hands. The system supports iterative refinement, manual edits, and feedback loops so authors can move quickly from outline to complete draft while maintaining consistency across chapters and arcs.",
    stack: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "React",
      "Python",
      "OpenAI integration",
      "PostgreSQL",
      "AWS",
      "Docker",
      "WebSockets",
    ],
    image: "/projects/novmuser-ai/images/novmuserai-preview.png",
    medias: [
      { type: "video", src: "/projects/novmuser-ai/videos/novmuserai-promovideo.mp4" },
    ],
    features: [
      {
        title: "AI Agent & Virtual Writing Team",
        items: [
          "Simulated virtual writing team that collaboratively prepares and refines novel frameworks based on user input.",
          "Multiple AI agents coordinate to fine‑tune plot structure, pacing, and character threads.",
          "Real‑time adjustments to the novel design as the author changes direction or requirements.",
          "Supports manual feedback and inline edits so writers can override or guide AI output at any point.",
        ],
      },
      {
        title: "Chapter Topic & Topic Point Management",
        items: [
          "Tools to design and manage chapter‑level topics and finer‑grained topic points for each scene or beat.",
          "Live adjustment of topic structures to reshape chapters, reorder beats, or refine focus.",
          "Progress tracking for each topic point to see what content has been generated or is pending.",
          "Linking between topics and content chunks to maintain narrative consistency across the manuscript.",
        ],
      },
      {
        title: "AI Content Chunk Generation & Tracking",
        items: [
          "Automated generation of content chunks that align with specific topic points and chapter goals.",
          "Real‑time streaming of chapter text so authors can watch the story being written as it emerges.",
          "Status and quality tracking for each chunk, with support for regeneration when results are not satisfactory.",
          "Full lifecycle support: initial AI generation, re‑generation, manual editing, and feedback‑driven refinement.",
        ],
      },
      {
        title: "Pricing & Credit System (Productization)",
        items: [
          "Subscription‑based Standard plan at $11.9/month with 6,000 credits (~300 AI generations) for active writers.",
          "Feature set focused on AI‑powered novel preparation, AI‑based topic management, and content chunk handling with unlimited novel projects under one account.",
          "Additional one‑time credit packs (5,000 / 10,000 / 30,000 credits) that never expire, usable on top of an active plan when intensive writing periods require more generations.",
          "Roadmap support for higher‑tier Professional and Ultimate plans to scale with more demanding or professional users.",
        ],
      },
    ] as const,
  },
  {
    slug: "rentana",
    title: "Rentana (AI Revenue Intelligence for Multifamily)",
    impact:
      "AI-powered revenue intelligence platform that optimizes multifamily rent pricing, asset performance, and reporting with explainable, data-driven recommendations.",
    overview:
      "Rentana is an end‑to‑end revenue intelligence platform for multifamily operators that automates rent optimization, renewals pricing, amenity premiums, and reporting using portfolio-specific AI models. It ingests operational and market data, generates pricing and strategy recommendations, and surfaces clear, human-readable explanations so teams understand the \"why\" behind each decision. The platform is designed to boost revenue, occupancy, and efficiency while maintaining complete data privacy and minimizing implementation friction.",
    stack: [
      "Next.js",
      "Node.js",
      "React",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "AWS (Lambda, RDS, S3, CloudFront)",
      "Docker",
      "REST APIs",
      "Analytics & BI tooling",
    ],
    image: "/projects/rentana/images/renta-preview.png",
    medias: [
      { type: "video", src: "/projects/rentana/videos/rentana.mp4" },
      { type: "image", src: "/projects/rentana/images/renta-media-1.png" },
      { type: "image", src: "/projects/rentana/images/renta-media-2.png" },
    ],
    features: [
      {
        title: "AI-Driven Rent & Renewal Optimization",
        items: [
          "Portfolio-specific pricing recommendations for new leases and renewals at scale, tailored to each client's data and goals.",
          "Dynamic adjustments based on emerging trends, demand signals, and property-level performance.",
          "Transparent explanations with each recommendation so managers can quickly validate and act on pricing guidance.",
        ],
      },
      {
        title: "Amenity & Specials Optimization",
        items: [
          "Optimization of unit amenity pricing and concession/specials strategy using advanced analytics.",
          "Insights into which amenities and specials are driving value versus eroding revenue.",
          "Controls to align amenity premiums and specials with expiration, occupancy, and revenue targets.",
        ],
      },
      {
        title: "Expiration & Occupancy Strategy",
        items: [
          "Tools to help teams reach expiration and occupancy targets using simple, efficient controls backed by intelligent models.",
          "Automated monitoring of portfolio trends so strategy can be proactively adjusted as conditions change.",
        ],
      },
      {
        title: "Reporting & Data Access",
        items: [
          "Creation and scheduling of recurring custom reports across properties and portfolios.",
          "On-demand access to underlying data for deeper analysis and stakeholder reporting.",
          "Modern, user-friendly interface that surfaces key insights without the complexity of legacy revenue management tools.",
        ],
      },
      {
        title: "Onboarding, Performance & Support",
        items: [
          "Rapid onboarding where new properties can launch and receive recommendations the same or next day.",
          "Always-on delivery of new features and enhancements without disruptive upgrade cycles.",
          "High-touch training and support, with a team that incorporates customer feedback quickly and helps operators execute their pricing strategy effectively.",
        ],
      },
    ] as const,
  },
  {
    slug: "superyach",
    title: "SuperYach (SuperYacht UNIWERSE)",
    impact:
      "Immersive 3D web platform that showcases superyachts in a unique digital space, combining innovative web technologies with high-end visual content.",
    overview:
      "SuperYacht UNIWERSE is an immersive digital experience platform—a unique web space where users explore luxury superyachts in a full three-dimensional environment. The platform integrates cutting-edge web technologies with rich, high-end visual content to deliver an engaging showcase for prestigious vessels. Visitors can navigate detailed 3D models, switch between exterior and interior views, access technical specifications and builder information, and control the experience with intuitive drag, zoom, and full-screen modes. Designed for marketing and discovery, it elevates superyacht presentation beyond static imagery into an interactive, memorable journey.",
    stack: ["Next.js", "React", "TypeScript", "Three.js"],
    image: "/projects/superyach/images/superyach-preview.png",
    medias: [
      { type: "video", src: "/projects/superyach/videos/SUPERYACH-3D.mp4" },
      { type: "video", src: "/projects/superyach/videos/SUPERYACH-3D-1.mp4" },
    ],
    features: [
      {
        title: "Immersive 3D Environment",
        items: [
          "Unique three-dimensional web space built with modern 3D and web technologies for a distinctive digital experience.",
          "High-fidelity rendering of superyachts on water with realistic lighting, reflections, and detail.",
          "Combines innovative web tech and creative high-end visual content in a single, cohesive experience.",
        ],
      },
      {
        title: "Interactive Exploration",
        items: [
          "Multiple viewing modes: Tech Space for specifications, Interior for walkthroughs, and free Move and Full Screen exploration.",
          "Yacht Controls, Drag Controls, and Scroll Zoom for intuitive camera and model interaction.",
          "Thumbnail galleries and view presets to jump between angles and featured yachts quickly.",
        ],
      },
      {
        title: "Rich Yacht Showcase",
        items: [
          "Detailed yacht profiles with builder credits, dimensions, and narrative descriptions (e.g. Nord by Lürssen).",
          "Read More links and expandable content for deeper engagement and storytelling.",
          "Multiple asset angles and media (images, video) to present each vessel comprehensively.",
        ],
      },
      {
        title: "Multimedia & Engagement",
        items: [
          "Integrated video playback for promotional and showcase content within the experience.",
          "Clean, branded UI with clear navigation and controls that keep focus on the vessels.",
          "Designed to appeal to a luxury audience while remaining accessible and easy to explore.",
        ],
      },
    ] as const,
  },
  {
    slug: "game-gallery-overview",
    title: "Game Gallery",
    impact:
      "A gallery of game projects and demos showcasing gameplay, mechanics, and visual style across multiple titles.",
    overview:"",
    stack: [
      "C#",
      "Unity",
      "Firebase",
      "PlayFab",
      "Unreal Engine",
      "Roblox",
      "Lua",
      "JavaScript",
      "TypeScript",
    ],
    image: "/projects/game-gallery-overview/images/image.jpg",
    mediaLayout: "grid",
    medias: [
      { type: "video", src: "/projects/game-gallery-overview/videos/1.mp4" },
      { type: "video", src: "/projects/game-gallery-overview/videos/2.mp4" },
      { type: "video", src: "/projects/game-gallery-overview/videos/3.mp4" },
      { type: "video", src: "/projects/game-gallery-overview/videos/4.mp4" },
      { type: "video", src: "/projects/game-gallery-overview/videos/5.mp4" },
      { type: "video", src: "/projects/game-gallery-overview/videos/6.mp4" },
      { type: "video", src: "/projects/game-gallery-overview/videos/7.mp4" },
      { type: "video", src: "/projects/game-gallery-overview/videos/8.mp4" },
      { type: "video", src: "/projects/game-gallery-overview/videos/9.mp4" },
    ],
    features: [] as const,
  },
  {
    slug: "justap",
    title: "JusTap",
    impact:
      "Mobile app for secure, easy exchange of contact information and social links using QR codes, replacing traditional business cards.",
    overview:
      "JusTap is a simple and secure app designed for those who want to easily exchange contact information and social links with others. Say goodbye to cluttered business cards and hello to the convenience of sharing all your important details through the use of QR codes.",
    stack: ["Kotlin", "Jetpack Compose", "Firebase"],
    image: "/projects/justap/images/JST-previe.png",
    storeUrl: "https://play.google.com/store/apps/details?id=com.binay.shaw.justap",
    medias: [
      { type: "image", src: "/projects/justap/images/jstap-one.png", alt: "JusTap screenshot 1" },
      { type: "image", src: "/projects/justap/images/JStap-two.png", alt: "JusTap screenshot 2" },
      { type: "image", src: "/projects/justap/images/JSTap-three.png", alt: "JusTap screenshot 3" },
      { type: "image", src: "/projects/justap/images/JSTap-four.png", alt: "JusTap screenshot 4" },
      { type: "image", src: "/projects/justap/images/JST-five.png", alt: "JusTap screenshot 5" },
    ],
    features: [
      {
        title: "Contact & Social Exchange",
        items: [
          "Exchange contact information and social links via QR codes.",
          "Replace traditional business cards with a digital, instant solution.",
          "Secure and simple flow for meeting new people and sharing details.",
        ],
      },
    ] as const,
  },
  {
    slug: "readbud",
    title: "ReadBud",
    impact:
      "Mobile app for reading and sharing stories, articles, and blogs—and for extracting jargon with meanings from scanned text or books.",
    overview:
      "ReadBud is an Android app used to extract jargon with its meaning from scanned images of a book or any form of text. It comes in handy when you're a beginner or want to save time by skipping the process of word meaning search on the Internet or any Dictionary. Extract jargon from pages and display their meanings without Internet access. Use camera access to capture picture(s) and get instant definitions.",
    stack: ["Kotlin", "Jetpack Compose", "ML Kit"],
    image: "/projects/readbud/images/readbud-preview.png",
    storeUrl: "https://play.google.com/store/apps/details?id=com.binayshaw7777.readbud",
    medias: [
      { type: "image", src: "/projects/readbud/images/readbud-one.png", alt: "ReadBud screenshot 1" },
      { type: "image", src: "/projects/readbud/images/readbud-two.png", alt: "ReadBud screenshot 2" },
    ],
    features: [
      {
        title: "Jargon Extraction",
        items: [
          "Extract jargon from scanned pages or any text using the device camera.",
          "Display meanings offline—no Internet required after initial setup.",
          "Streamlined flow: capture, extract, and view definitions in one place.",
        ],
      },
      {
        title: "Platform for Writers & Readers",
        items: [
          "Platform for writers to share stories and for readers to discover new content.",
          "Supports stories, articles, and blogs in a single app.",
        ],
      },
    ] as const,
  },
  {
    slug: "note-app",
    title: "Note App",
    impact:
      "Android task manager with create/edit/delete tasks, reminders with alarms, and a Pomodoro-style focus timer for productivity.",
    overview:
      "The Note App is a feature-rich Android application built using Kotlin and Android Studio. It allows users to create, modify, and delete tasks, set reminders with alarms, and use a built-in focus timer to enhance productivity. Built with ConstraintLayout, RecyclerView, and CardView, it uses SharedPreferences for state and AlarmManager for notifications.",
    stack: ["Kotlin", "ConstraintLayout", "RecyclerView", "CardView", "SharedPreferences", "AlarmManager"],
    image: "/projects/note-app/images/note-prev.png",
    medias: [
      { type: "image", src: "/projects/note-app/images/note-one.png", alt: "Note App screenshot 1" },
      { type: "image", src: "/projects/note-app/images/note-two.png", alt: "Note App screenshot 2" },
      { type: "image", src: "/projects/note-app/images/note-three.png", alt: "Note App screenshot 3" },
      { type: "image", src: "/projects/note-app/images/note-four.png", alt: "Note App screenshot 4" },
    ],
    features: [
      {
        title: "Task Management",
        items: [
          "Create new tasks with title and description.",
          "Edit existing tasks (right swipe for edit).",
          "Delete tasks easily (left swipe for delete).",
        ],
      },
      {
        title: "Reminders & Alarms",
        items: [
          "Set specific time and date for tasks.",
          "Receive sound alerts when the task time arrives (AlarmManager, NotificationManager).",
        ],
      },
      {
        title: "Focus Timer",
        items: [
          "Pomodoro-style timer to stay focused (e.g. 30 minutes with circular progress).",
          "Stop anytime; customizable session durations for productivity.",
          "Implemented with CountDownTimer.",
        ],
      },
    ] as const,
  },
  {
    slug: "the-flying-fish",
    title: "The Flying Fish",
    impact:
      "Android game in Kotlin where players control a fish to avoid obstacles and collect points, with high score saving and replay.",
    overview:
      "The Flying Fish is an Android game developed with Kotlin where players control a fish to avoid obstacles and collect points. The game features animated touch controls, background music, collectible points with sound effects, and a high score system. With intuitive gameplay and a game over screen displaying scores and replay options, it offers an engaging and fun mobile gaming experience.",
    stack: ["Kotlin", "Android"],
    image: "/projects/the-flying-fish/images/flyingfish-prev.png",
    medias: [
      { type: "image", src: "/projects/the-flying-fish/images/flyingfish-one.png", alt: "The Flying Fish screenshot 1" },
      { type: "image", src: "/projects/the-flying-fish/images/flyingfish-two.png", alt: "The Flying Fish screenshot 2" },
      { type: "image", src: "/projects/the-flying-fish/images/flyingfish-three.png", alt: "The Flying Fish screenshot 3" },
    ],
    features: [
      {
        title: "Gameplay",
        items: [
          "Animated fish with touch controls.",
          "Collectible points with sound effects.",
          "Obstacles to avoid.",
          "Background music.",
        ],
      },
      {
        title: "Progression & UX",
        items: [
          "High score saving.",
          "Game over screen with option to play again.",
        ],
      },
    ] as const,
  },
  {
    slug: "car-rental-app",
    title: "Car Rental App",
    impact:
      "Flutter-based app for renting premium cars, with Firebase Firestore, BLoC architecture, and cross-platform support (Android, iOS, Web).",
    overview:
      "A Flutter-based mobile application for renting premium cars, integrated with Firebase Firestore for real-time data management. The app features a luxurious and responsive UI, structured with BLoC architecture, and supports cross-platform deployment on Android, iOS, and Web.",
    stack: ["Flutter", "Dart", "Firebase", "Swift", "CMake", "C++"],
    image: "/projects/car-rental-app/images/carent-prev.jpg",
    medias: [
      { type: "image", src: "/projects/car-rental-app/images/carent-one.jpg", alt: "Car Rental App screenshot 1" },
      { type: "image", src: "/projects/car-rental-app/images/carent-two.jpg", alt: "Car Rental App screenshot 2" },
      { type: "image", src: "/projects/car-rental-app/images/carent-three.jpg", alt: "Car Rental App screenshot 3" },
    ],
    features: [
      {
        title: "Screens & UX",
        items: [
          "Onboarding: premium welcome screen with rich UI, gold-accented title, and Get Started CTA.",
          "Car list: browse premium cars (e.g. BMW X5, 3 Series) with Firestore data and search by model.",
          "Car details: model, distance, fuel, price/hour, user avatar, map preview linking to location.",
        ],
      },
      {
        title: "Architecture & Data",
        items: [
          "Firestore integration for car data (cars collection) with safe parsing and real-time updates.",
          "BLoC state management: CarsLoading, CarsLoaded, CarError.",
          "Responsive UI with consistent theming, soft shadows, and smooth animations.",
        ],
      },
    ] as const,
  },
  {
    slug: "wn-restaurant-mobile-app",
    title: "WN Restaurant Mobile App",
    impact:
      "React Native (Expo) app for browsing food, cart, payments, and profile—connected to Node.js/Express and MongoDB, Android-focused.",
    overview:
      "React Native application built with Expo Go, serving as the user-facing counterpart to the restaurant web app. Users can browse food items, manage their cart, make payments, and update profiles, all connected to a Node.js/Express backend with MongoDB. Designed for Android, with admin features exclusive to the web version.",
    stack: ["React Native", "Expo", "Node.js", "Express", "MongoDB", "JavaScript"],
    image: "/projects/wn-restaurant-mobile-app/images/wn-restaurant-prev.png",
    medias: [
      { type: "image", src: "/projects/wn-restaurant-mobile-app/images/wn-restaurant-prev.png", alt: "WN Restaurant Mobile App" },
    ],
    features: [
      {
        title: "User Functionality",
        items: [
          "Splash, Home (food items from backend), Login, Register.",
          "Cart (add to cart / buy now), Shopping Cart, PayNow, Payment confirmation.",
          "Profile and Edit Profile.",
        ],
      },
      {
        title: "Backend & Data",
        items: [
          "Node.js backend shared with the restaurant management web app.",
          "MongoDB for user and food data.",
          "Cross-platform data access: same profiles, cart, and payments on mobile and web.",
        ],
      },
    ] as const,
  },
  {
    slug: "ni-kshay-setu-v2",
    title: "Ni-Kshay SETU (Frontend V2)",
    impact:
      "Redesigned frontend of a healthcare platform for TB care and decision support in India—web, Android, and iOS via React, React Native, and NX monorepo.",
    overview:
      "Ni-Kshay SETU V2 is the redesigned frontend of an impactful healthcare platform aimed at strengthening tuberculosis care and decision support for healthcare providers across India. Built as a monorepo using React, React Native, Redux, and TypeScript, the system delivers seamless experiences on the web, Android, and iOS, with interactive modules, real-time updates, and an intuitive UI for guideline-based learning, case simulations, and knowledge resources.",
    stack: [
      "React",
      "React Native",
      "TypeScript",
      "Redux",
      "Redux Saga",
      "Node.js",
      "Express",
      "MongoDB",
      "NextAuth.js",
      "Jest",
      "React Testing Library",
      "NX Monorepo",
    ],
    image: "/projects/ni-kshay-setu-v2/images/kshay-prev.png",
    medias: [
      { type: "image", src: "/projects/ni-kshay-setu-v2/images/kshay-one.png", alt: "Ni-Kshay SETU screenshot 1" },
      { type: "image", src: "/projects/ni-kshay-setu-v2/images/kshay-two.png", alt: "Ni-Kshay SETU screenshot 2" },
      { type: "image", src: "/projects/ni-kshay-setu-v2/images/kshay-three.png", alt: "Ni-Kshay SETU screenshot 3" },
      { type: "image", src: "/projects/ni-kshay-setu-v2/images/kshay-four.png", alt: "Ni-Kshay SETU screenshot 4" },
    ],
    features: [
      {
        title: "Learning & Support",
        items: [
          "Interactive learning modules for healthcare workers.",
          "Multi-language UI support and automated multilingual settings.",
          "Subscriber monitoring dashboards and assessment creation/tracking.",
          "Resource and document library; leaderboard and progress monitoring.",
        ],
      },
      {
        title: "Platform & Admin",
        items: [
          "Notification system and centralized news feed.",
          "Master data management (states, districts, facilities).",
          "Role-based permissions and admin controls.",
        ],
      },
    ] as const,
  },
  {
    slug: "canstar-smart-led-control",
    title: "Canstar Smart LED Control",
    impact:
      "Smart IoT lighting platform to connect, manage, and control multiple LED devices from anywhere—color control, presets, sync, and scheduling.",
    overview:
      "Canstar is a smart IoT lighting platform that enables users to connect, manage, and control multiple LED devices from anywhere. Built with a mobile app and ESP32-based hardware controllers, the system allows real-time color control, LED segment management, device synchronization, and automated scheduling. Users can group devices, apply lighting presets, set on/off timers, and manage dynamic lighting scenes through an intuitive interface.",
    stack: ["React Native", "Node.js", "Firebase", "REST APIs", "ESP32", "Arduino", "MQTT", "WebSocket"],
    image: "/projects/canstar-smart-led-control/images/canstar-led-prev.png",
    medias: [
      { type: "image", src: "/projects/canstar-smart-led-control/images/canstar-led-one.png", alt: "Canstar Smart LED screenshot 1" },
      { type: "image", src: "/projects/canstar-smart-led-control/images/canstar-led-two.png", alt: "Canstar Smart LED screenshot 2" },
      { type: "image", src: "/projects/canstar-smart-led-control/images/canstar-led-three.png", alt: "Canstar Smart LED screenshot 3" },
      { type: "image", src: "/projects/canstar-smart-led-control/images/canstar-led-four.png", alt: "Canstar Smart LED screenshot 4" },
      { type: "image", src: "/projects/canstar-smart-led-control/images/canstar-led-five.png", alt: "Canstar Smart LED screenshot 5" },
    ],
    features: [
      {
        title: "Device Control",
        items: [
          "Add and manage multiple LED devices.",
          "Real-time color and brightness control; segment-wise LED control.",
          "Create and save lighting presets; sync multiple devices for unified effects.",
          "Remote control from anywhere via internet.",
        ],
      },
      {
        title: "Automation & Hardware",
        items: [
          "Schedule automatic on/off timers.",
          "ESP32 firmware for LED communication; stable real-time device connection (MQTT/WebSocket).",
        ],
      },
    ] as const,
  },
  {
    slug: "fresh-cart",
    title: "Fresh Cart",
    impact:
      "College capstone: digitized local grocery—browse stores, place orders, track status, UPI payments; store owners manage inventory and orders.",
    overview:
      "Fresh Cart is a college capstone project designed to digitize local grocery shopping. Users can browse nearby registered stores, place grocery orders, track order status, and complete payments using UPI. Store owners can register their shops, add inventory items, receive and manage orders, and mark deliveries as completed. The system was built as a native Android application using Java, focusing on practical end-to-end workflow implementation.",
    stack: ["Java", "Android", "Firebase Realtime Database", "Firebase Authentication", "Firebase Cloud Storage", "REST APIs", "UPI"],
    image: "/projects/fresh-cart/images/fresh-cart-prev.png",
    medias: [
      { type: "image", src: "/projects/fresh-cart/images/fresh-cart-one.png", alt: "Fresh Cart screenshot 1" },
      { type: "image", src: "/projects/fresh-cart/images/fresh-cart-two.png", alt: "Fresh Cart screenshot 2" },
      { type: "image", src: "/projects/fresh-cart/images/fresh-cart-three.png", alt: "Fresh Cart screenshot 3" },
      { type: "image", src: "/projects/fresh-cart/images/fresh-cart-four.png", alt: "Fresh Cart screenshot 4" },
      { type: "image", src: "/projects/fresh-cart/images/fresh-cart-five.png", alt: "Fresh Cart screenshot 5" },
      { type: "image", src: "/projects/fresh-cart/images/fresh-cart-six.png", alt: "Fresh Cart screenshot 6" },
      { type: "image", src: "/projects/fresh-cart/images/fresh-cart-seven.png", alt: "Fresh Cart screenshot 7" },
      { type: "image", src: "/projects/fresh-cart/images/fresh-cart-eight.png", alt: "Fresh Cart screenshot 8" },
    ],
    features: [
      {
        title: "Highlights",
        items: [
          "User + Store Owner dual application flow.",
          "Real-time order tracking.",
          "UPI payment integration.",
          "Local store discovery.",
        ],
      },
      {
        title: "User Side",
        items: [
          "User registration and login (Firebase Authentication).",
          "Nearby store listing and discovery; product browsing and cart.",
          "Order placement and real-time status tracking (Firebase Realtime Database).",
          "UPI-based payment flow.",
        ],
      },
      {
        title: "Store Owner Side",
        items: [
          "Store owner registration and inventory management.",
          "Order management and completion system.",
          "Firebase-based backend and storage.",
        ],
      },
    ] as const,
  },
  {
    slug: "innova-led-control",
    title: "Innova LED Control",
    impact:
      "Initial IoT smart lighting app for remote LED control and real-time color/brightness—foundation for Canstar’s multi-device features.",
    overview:
      "Innova LED was the initial version of an IoT-based smart lighting platform, built to explore real-time device communication and remote LED control. The system allowed users to connect LED controllers, adjust colors and brightness, and manage lighting behavior through a mobile application. This project laid the foundation for advanced multi-device sync and scheduling features later implemented in Canstar.",
    stack: ["React Native", "Node.js", "Firebase", "ESP32", "Arduino", "REST APIs"],
    image: "/projects/innova-led-control/images/innova-led-prev.png",
    medias: [
      { type: "image", src: "/projects/innova-led-control/images/innova-led-one.png", alt: "Innova LED Control screenshot 1" },
      { type: "image", src: "/projects/innova-led-control/images/innova-led-two.png", alt: "Innova LED Control screenshot 2" },
      { type: "image", src: "/projects/innova-led-control/images/innova-led-three.png", alt: "Innova LED Control screenshot 3" },
      { type: "image", src: "/projects/innova-led-control/images/innova-led-four.png", alt: "Innova LED Control screenshot 4" },
    ],
    features: [
      {
        title: "Highlights",
        items: [
          "First iteration of IoT lighting platform.",
          "Remote LED color and brightness control.",
          "ESP32 hardware integration.",
          "Foundation for next-gen Canstar system.",
        ],
      },
      {
        title: "Control & Hardware",
        items: [
          "Connect LED controller via mobile app.",
          "Real-time color adjustment and brightness control.",
          "Remote on/off switching; ESP32-based LED communication.",
          "Basic device connection management; cloud-based remote access.",
        ],
      },
    ] as const,
  },
] as const;

export type Project = (typeof PROJECTS)[number] & {
  medias?: readonly ProjectMedia[];
  overview?: string;
  features?: readonly ProjectFeature[];
  /** When "grid", project detail shows medias in a 3x3 grid instead of carousel */
  mediaLayout?: "carousel" | "grid";
  /** Optional Play Store or App Store URL for mobile apps */
  storeUrl?: string;
};

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
