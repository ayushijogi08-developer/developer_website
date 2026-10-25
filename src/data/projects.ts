export interface ProjectItem {
  id: string;
  name: string;
  kind: "working-build" | "design-concept";
  tab: "websites" | "apps";
  category: string;
  summary: string;
  whatItDoes: string[];
  liveUrl?: string;
  videoUrl?: string;
  previewImage?: string;
  previewWidth?: number;
  previewHeight?: number;
  previewAlt?: string;
  previewCrop?: "full" | "text";
  screenshots?: string[];
  tech?: string[];
  clientLocation?: string;
  layout?: "menu" | "catalog" | "dashboard" | "hero-image" | "specs" | "academic";
  theme: {
    bg: string;
    title: string;
    body: string;
    muted: string;
    accent: string;
    tagBg: string;
    tagText: string;
    tagBorder: string;
    divider: string;
  };
  badgeText: string;
  previewText: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  // // NEW: Hair City Salon & Academy (replaces Apex Building Supplies)
  {
    id: "p-hair-city",
    name: "Hair City Salon & Academy",
    kind: "working-build",
    tab: "websites",
    category: "Salon & Academy",
    summary: "Editorial salon & academy web experience featuring interactive service lookbooks, syllabus modules, and instant WhatsApp booking.",
    whatItDoes: [
      "Curated service menu (Precision Cutting, Balayage Colour, Scalp & Nanoplasty)",
      "Academy training curriculum module browser with 4 practical styling pillars",
      "Real client haircut lookbook with filterable men's & women's styles",
      "Direct WhatsApp appointment booking & Google Maps navigation"
    ],
    liveUrl: "https://hair-salon-web-ruddy.vercel.app/",
    previewImage: "/portfolio/hair-city-salon.webp",
    previewWidth: 1440,
    previewHeight: 1755,
    previewCrop: "full",
    previewAlt: "Hair City Salon & Academy live website showcase with editorial hair cuts, lookbook, and academy styling curriculum",
    clientLocation: "Akola, Maharashtra",
    layout: "catalog",
    tech: ["React 19", "Vite", "GSAP", "Lenis", "Vanilla CSS"],
    theme: {
      bg: "#FBF9F5",
      title: "#181513",
      body: "#423B36",
      muted: "#6A635B",
      accent: "#A46843",
      tagBg: "rgba(164,104,67,0.12)",
      tagText: "#A46843",
      tagBorder: "#A46843",
      divider: "rgba(24,21,19,0.15)"
    },
    badgeText: "WORKING BUILD • EDITORIAL SALON",
    previewText: "Contemporary Editorial Salon & Barbering Academy"
  },
  // // NEW: Derma Care Skin, Hair & Laser Clinic (replaces Precision Engineering & OEM Parts)
  {
    id: "p-derma-care",
    name: "Derma Care Skin, Hair & Laser Clinic",
    kind: "working-build",
    tab: "websites",
    category: "Healthcare & Dermatology",
    summary: "Boutique medical dermatology and laser clinic platform with an interactive concern selector, clinical protocols, and online booking.",
    whatItDoes: [
      "Interactive Concern Selector mapping acne, pigmentation, hair fall & dullness to treatments",
      "Evidence-guided treatment catalog across Skin, Hair PRP, and Q-Switched Laser",
      "Doctor profile (Dr. Shruti Kale Dabholkar) with philosophy, hours & 5.0★ Google reviews",
      "Interactive consultation booking system with client-side validation & WhatsApp link"
    ],
    liveUrl: "https://derma-web-gules.vercel.app/",
    previewImage: "/portfolio/derma-care-clinic.webp",
    previewWidth: 1440,
    previewHeight: 1755,
    previewCrop: "full",
    previewAlt: "Derma Care Clinic live website preview featuring clinical consultation booking, treatment modalities, and skin protocols",
    clientLocation: "Akola, Maharashtra",
    layout: "specs",
    tech: ["React 19", "Vite", "Lucide React", "Vanilla CSS", "Schema.org"],
    theme: {
      bg: "#FAF7F2",
      title: "#1F3A33",
      body: "#2A2A28",
      muted: "#5E5E58",
      accent: "#B08D57",
      tagBg: "rgba(31,58,51,0.12)",
      tagText: "#1F3A33",
      tagBorder: "#B08D57",
      divider: "rgba(31,58,51,0.15)"
    },
    badgeText: "WORKING BUILD • CLINICAL-LUXE",
    previewText: "Evidence-Led Dermatology & Laser Aesthetic Practice"
  },
  {
    id: "p-bakery-system",
    name: "Bakery Ordering & Admin System",
    kind: "working-build",
    tab: "websites",
    category: "Bakery & Food Ordering",
    summary: "Full online bakery store with customer checkout, admin inventory management, coupon codes, and live tracking.",
    whatItDoes: [
      "Online customer ordering & cart flow",
      "Secure online payments & coupon codes",
      "Live order tracking & customer reviews",
      "Admin panel to manage stock, products & orders"
    ],
    liveUrl: "https://baker-web-app-zeta.vercel.app/",
    previewImage: "/portfolio/bakery-ordering.webp",
    previewWidth: 1440,
    previewHeight: 900,
    previewCrop: "full",
    previewAlt: "The Hidden Bakers live store website preview with artisan sourdough, celebration cakes, and online order tracking",
    clientLocation: "Live Project",
    layout: "menu",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    theme: {
      bg: "#FFF8F0",
      title: "#3D1E16",
      body: "#4A2920",
      muted: "#7A5247",
      accent: "#E05A47",
      tagBg: "rgba(224,90,71,0.12)",
      tagText: "#E05A47",
      tagBorder: "#E05A47",
      divider: "rgba(61,30,22,0.15)"
    },
    badgeText: "WORKING BUILD",
    previewText: "Full-Stack Bakery Store & Admin System"
  },
  {
    id: "p-stone-crusher",
    name: "Kalyan Stone Crushing Industries",
    kind: "working-build",
    tab: "websites",
    category: "Stone Crusher / Quarry",
    summary: "Industrial website concept featuring aggregate product specifications, crushing plant tour, and quote requests.",
    whatItDoes: [
      "Aggregate product catalog & size charts",
      "Instant quotation request form",
      "Crushing plant gallery & equipment fleet",
      "Manufacturing process & safety standards"
    ],
    liveUrl: "https://stone-crusher-web-gamma.vercel.app/",
    previewImage: "/portfolio/stone-crusher.webp",
    previewWidth: 1440,
    previewHeight: 900,
    previewCrop: "full",
    previewAlt: "Kalyan Stone Crushing Industries / JP Silica website preview showing M-Sand specifications, quarry fleet, and quotes",
    clientLocation: "Live Project",
    layout: "dashboard",
    tech: ["React", "Tailwind CSS", "Vite"],
    theme: {
      bg: "#292524",
      title: "#FFFFFF",
      body: "#E7E5E4",
      muted: "#A8A29E",
      accent: "#EAB308",
      tagBg: "rgba(234,179,8,0.15)",
      tagText: "#EAB308",
      tagBorder: "#EAB308",
      divider: "rgba(255,255,255,0.2)"
    },
    badgeText: "WORKING BUILD",
    previewText: "Quarry & Blue Metal Aggregate Website"
  },
  {
    id: "p-heritage-palace",
    name: "Heritage Lawns & Banquets",
    kind: "working-build",
    tab: "websites",
    category: "Hotel & Banquet",
    summary: "Hotel and event venue showcase concept with room galleries, lawn virtual tour, and WhatsApp availability check.",
    whatItDoes: [
      "Royal suite photo galleries & amenities",
      "Wedding lawn seating capacity charts",
      "Direct availability enquiry desk"
    ],
    liveUrl: "https://wedding-venue-web.vercel.app/",
    previewImage: "/portfolio/wedding-venue.webp",
    previewWidth: 1440,
    previewHeight: 900,
    previewCrop: "full",
    previewAlt: "Heritage Lawns & Banquets luxury resort website preview with wedding lawns, archway banquets, and availability booking",
    clientLocation: "Live Project",
    layout: "hero-image",
    tech: ["React", "Tailwind CSS", "Vite"],
    theme: {
      bg: "#064E3B",
      title: "#FFFFFF",
      body: "#ECFDF5",
      muted: "#A7F3D0",
      accent: "#34D399",
      tagBg: "rgba(52,211,153,0.15)",
      tagText: "#34D399",
      tagBorder: "#34D399",
      divider: "rgba(255,255,255,0.2)"
    },
    badgeText: "WORKING BUILD",
    previewText: "Heritage Resort & Wedding Venue Website"
  },
  {
    id: "p-gym-app",
    name: "Gym Management App",
    kind: "working-build",
    tab: "apps",
    category: "Gym & Fitness",
    summary: "Comprehensive fitness management mobile platform for gym owners, trainers, receptionists, and members.",
    whatItDoes: [
      "Role-based access (Admin, Trainer, Member, Receptionist)",
      "Instant QR code attendance scanning",
      "Membership plans & payment tracking",
      "Custom workout, diet plans & progress reports"
    ],
    clientLocation: "Practice Build",
    previewWidth: 390,
    previewHeight: 844,
    previewAlt: "Gym Management App mobile interface mockup",
    tech: ["React Native", "TypeScript", "Node.js"],
    theme: {
      bg: "#111827",
      title: "#F9FAFB",
      body: "#D1D5DB",
      muted: "#9CA3AF",
      accent: "#10B981",
      tagBg: "rgba(16,185,129,0.15)",
      tagText: "#10B981",
      tagBorder: "#10B981",
      divider: "rgba(255,255,255,0.15)"
    },
    badgeText: "WORKING BUILD",
    previewText: "Mobile Gym Management & QR Attendance"
  },
  {
    id: "p-grocery-app",
    name: "Grocery Store & POS App",
    kind: "working-build",
    tab: "apps",
    category: "Grocery & Retail",
    summary: "Retail POS and inventory control system with delivery tracking and customer QR catalog.",
    whatItDoes: [
      "Point-of-Sale (POS) billing & GST invoicing",
      "Stock inventory & supplier management",
      "Online customer orders & delivery dispatch tracking",
      "Digital QR code product catalog"
    ],
    clientLocation: "Practice Build",
    previewWidth: 390,
    previewHeight: 844,
    previewAlt: "Grocery Store POS App mobile interface mockup",
    tech: ["React Native", "TypeScript", "PostgreSQL"],
    theme: {
      bg: "#064E3B",
      title: "#FFFFFF",
      body: "#ECFDF5",
      muted: "#A7F3D0",
      accent: "#34D399",
      tagBg: "rgba(52,211,153,0.15)",
      tagText: "#34D399",
      tagBorder: "#34D399",
      divider: "rgba(255,255,255,0.2)"
    },
    badgeText: "WORKING BUILD",
    previewText: "Retail POS, Billing & Grocery App"
  },
  {
    id: "p-financewise-app",
    name: "FinanceWise Personal Tracker",
    kind: "working-build",
    tab: "apps",
    category: "Personal Finance",
    summary: "My own personal finance mobile application for tracking income, expenses, savings goals, and PDF reports.",
    whatItDoes: [
      "Income & expense categorization",
      "Automated savings goal milestones",
      "Visual analytics & spending breakdowns",
      "One-click downloadable PDF financial reports"
    ],
    clientLocation: "Own Product Build",
    previewWidth: 390,
    previewHeight: 844,
    previewAlt: "FinanceWise Personal Tracker mobile interface mockup",
    tech: ["React Native", "Expo", "SQLite"],
    theme: {
      bg: "#1E1B4B",
      title: "#FFFFFF",
      body: "#E0E7FF",
      muted: "#A5B4FC",
      accent: "#6366F1",
      tagBg: "rgba(99,102,241,0.15)",
      tagText: "#818CF8",
      tagBorder: "#818CF8",
      divider: "rgba(255,255,255,0.2)"
    },
    badgeText: "WORKING BUILD",
    previewText: "Personal Expense & Analytics App"
  }
];

// // CHANGED: Updated categories to reflect working builds
export const PORTFOLIO_CATEGORIES = ["All", "Websites", "Apps & Systems", "Working Builds"];
