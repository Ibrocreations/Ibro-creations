/**
 * Ibro Creations — editable content data
 * Update text, image paths, and links here. No layout code needs to change.
 * Replace `image` paths with real files in /assets/img/portfolio/ once ready.
 */

window.SITE_CONTENT = {
  brand: {
    name: "Ibro Creations",
    tagline: "AI-Powered Visual Storytelling for Brands That Sell Experiences",
    email: "hello@ibrocreations.online",
    whatsapp: "https://wa.me/213000000000",
    location: "Algeria — working with clients globally",
    social: {
      instagram: "https://instagram.com/ibrocreations",
      tiktok: "https://tiktok.com/@ibrocreations",
      linkedin: "https://linkedin.com/company/ibrocreations",
      upwork: "https://upwork.com/freelancers/ibrocreations",
    },
  },

  nav: [
    { label: "Work", href: "#work" },
    { label: "Travel & DMC", href: "#work-travel" },
    { label: "Brand & UGC", href: "#work-brand" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    headline: "AI-Powered Visual Storytelling for Brands That Sell Experiences",
    ctaPrimary: { label: "View My Work", href: "#work" },
    ctaSecondary: { label: "Let's Work Together", href: "#contact" },
  },

  intro: {
    eyebrow: "Studio",
    heading: "The AI is the tool. Taste is the product.",
    body: "Ibro Creations is a creative studio specializing in AI-powered visual content — for travel companies, Destination Management Companies, tour operators, and select lifestyle brands. Every image, film still, and page is directed with an editorial eye, so the work reads as considered and human, never generated.",
    skills: [
      "AI Image Generation",
      "AI Video Generation",
      "Content Design",
      "Booklet & Print Design",
    ],
  },

  work: {
    heading: "Selected Work",
    subheading: "A growing collection of visual stories — placeholders below will be swapped for finished projects.",
    tabs: {
      travel: {
        id: "travel",
        label: "Travel & DMC",
        intro: "I create AI-powered visual content that helps Travel Agencies, Destination Management Companies (DMCs), Tour Operators, and luxury hospitality brands sell destinations through compelling storytelling.",
        items: [
          {
            title: "Coastal Escape — Destination Compaign",
            category: "Destination Imagery",
            description: "Golden-hour coastline visuals for a Mediterranean DMC campaign.",
            image: "assets/img/portfolio/travel-011.webp",
            placeholder: false,
          },
          {
            title: "Desert Horizons — Cinematic Stills",
            category: "AI Video Production",
            description: "Frame grabs from a cinematic AI video reel for a luxury desert expedition through Southern Algeria.",
            video: "assets/img/portfolio/travel-0222.webp",
            placeholder: false,
          },
          {
            title: "Editorial Brochure",
            category: "Booklet Spread",
            description: "A sample seven-day itinerary booklet spread for an outgoing travel agency.",
            image: "assets/img/portfolio/travel-0333.webp",
            placeholder: false,
          },
          {
            title: "La Gazelle d'Or Resort — Web Mockup",
            category: "Website Content",
            description: "Homepage visual direction and imagery for a luxury resort website.",
            image: "assets/img/portfolio/travel-044.webp",
            placeholder: false,
          },
          {
            title: "Highland Trails — Landscape Series",
            category: "Destination Imagery",
            description: "Editorial landscape set for a mountain tourism board.",
            image: "assets/img/portfolio/travel-05.webp",
            placeholder: false,
          },
          {
            title: "Old Town Evenings",
            category: "AI Video Stills",
            description: "Warm-light architectural stills for a heritage-city tour brand.",
            video: "assets/img/portfolio/travel-066.webm",
            placeholder: false,
          },
        ],
      },
      brand: {
        id: "brand",
        label: "Brand & UGC",
        intro: "AI-driven UGC-style content for fashion, food, and cosmetic brands looking for authentic, scroll-stopping visuals.",
        items: [
          {
            title: "Linen & Light — Lookbook",
            category: "Fashion",
            description: "UGC-style lookbook set for a linen fashion label's summer drop.",
            image: "assets/img/portfolio/brand-01.svg",
            placeholder: true,
          },
          {
            title: "Table for Two",
            category: "Food",
            description: "Warm, natural-light food styling for a restaurant's social feed.",
            image: "assets/img/portfolio/brand-02.svg",
            placeholder: true,
          },
          {
            title: "Bare Skin — Product Story",
            category: "Cosmetics",
            description: "Editorial product photography for a clean-beauty skincare line.",
            image: "assets/img/portfolio/brand-03.svg",
            placeholder: true,
          },
          {
            title: "Morning Ritual",
            category: "UGC",
            description: "Authentic lifestyle UGC set for a cosmetics brand's launch campaign.",
            image: "assets/img/portfolio/brand-04.svg",
            placeholder: true,
          },
        ],
      },
    },
  },

  services: {
    heading: "Services",
    subheading: "What I offer, in short.",
    items: [
      {
        title: "AI Photography & Visuals",
        description: "Editorial-grade imagery for destinations, hospitality, and lifestyle brands.",
        icon: "image",
      },
      {
        title: "AI Video Production",
        description: "Cinematic short-form video content built for travel and brand storytelling.",
        icon: "video",
      },
      {
        title: "Travel Booklets & Itinerary Design",
        description: "Printed and digital booklets that make itineraries feel like an experience.",
        icon: "book-open",
      },
      {
        title: "Website & Social Content",
        description: "Visual direction and content sets for websites, social, and campaigns.",
        icon: "layout-grid",
      },
      {
        title: "UGC-Style Brand Content",
        description: "Authentic, scroll-stopping visuals for fashion, food, and cosmetic brands.",
        icon: "sparkles",
      },
    ],
  },

  about: {
    heading: "Approach",
    body: [
      "My work sits at the intersection of artificial intelligence and artistic direction. The tools are AI — the eye is mine. Every project starts with a mood, a story, a feeling I want the viewer to leave with, and the visuals are built to serve that.",
      "I keep the work editorial and warm rather than futuristic or synthetic-looking. Clients come back for the taste, not the technology.",
    ],
    location: "Based in Algeria, working with clients globally.",
  },

  contact: {
    heading: "Let's Work Together",
    subheading: "Tell me about your brand and what you're trying to create. I typically reply within a day.",
    projectTypes: ["Travel / DMC", "Brand / UGC", "Something else"],
  },
};
