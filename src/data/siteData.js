export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "Metzim Electrical & Hardware",
    legalName: "Metzim Electrical & Hardware",
    tagline: "Powering Zimbabwe's Projects Since 2009",
    description: "Metzim Electrical & Hardware is Harare's specialist supplier of electrical components and building hardware. From wiring to lighting, switchgear to solar panels, we power Zimbabwe's construction industry.",
    phone: "+263 77 390 0967",
    phoneRaw: "+263773900967",
    whatsappNumber: "263773900967",
    email: "metzimelectricalhardware@gmail.com",
    address: "107 Mbuya Nehanda St, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 3.8,
    ratingRounded: 4,
    reviewCount: 40,
    established: "2009",
    yearsExperience: "16+",
    projectsCompleted: "8000+",
    employees: "25+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "metzim-electrical-hardware-cookie-consent",
    socialLinks: { facebook: "https://www.facebook.com/metzim/", instagram: "#", linkedin: "#" },
  },

  navbar: { logoImage: null, logoLine1: "Metzim", logoLine2: "Electrical & Hardware" },

  hero: {
    badge: "Harare's Electrical & Hardware Specialists",
    titleParts: [
      { text: "WHERE QUALITY " },
      { text: "POWERS", highlight: true },
      { text: " PROGRESS." },
    ],
    subtitle: "16 years of trusted supply. 8,000+ projects powered. Zimbabwe's builders, electricians, and contractors trust Metzim for quality components and expert advice.",
    ctaPrimary: "Get Started",
    ctaSecondary: "View Our Work",
    trustBadge: "10000+ Products in Stock",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85", alt: "Dynamic hero image showcasing the business" },
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=85", alt: "Professional work environment" },
      { url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85", alt: "Quality results and satisfied clients" },
    ],
  },

  stats: [
    { number: "10000+", label: "Products in Stock" },
    { number: "15+", label: "Years Trading" },
    { number: "5000+", label: "Happy Customers" },
    { number: "50+", label: "Brand Partners" },
  ],

  servicesPreview: [
    { title: "Building Materials", desc: "Comprehensive range of cement, bricks, timber, roofing, and structural materials sourced from trusted manufacturers at competitive prices.", icon: "Buildings" },
    { title: "Electrical Supplies", desc: "From wiring and switchgear to lighting fixtures and solar components, everything you need for safe, code-compliant electrical installations.", icon: "Lightbulb" },
    { title: "Plumbing & Fittings", desc: "Quality pipes, fittings, taps, and sanitary ware from leading brands. Complete plumbing solutions for residential and commercial projects.", icon: "Star" },
    { title: "Paint & Finishes", desc: "Premium paints, varnishes, and finishes for interior and exterior applications. Expert colour matching and advice.", icon: "Heart" },
    { title: "Tools & Equipment", desc: "Professional-grade hand tools, power tools, and construction equipment for every trade and skill level.", icon: "Briefcase" },
    { title: "Delivery Service", desc: "Reliable delivery across Harare and surrounding areas. Bulk orders, site delivery, and same-day service for urgent needs.", icon: "Leaf" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Comprehensive solutions delivered with precision and care.",
    items: [
      { title: "Building Materials", slug: "building-materials", desc: "Comprehensive range of cement, bricks, timber, roofing, and structural materials sourced from trusted manufacturers at competitive prices.", features: ["Cement", "Bricks", "Timber", "Roofing Sheets", "Steel", "Sand & Aggregate"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
      { title: "Electrical Supplies", slug: "electrical-supplies", desc: "From wiring and switchgear to lighting fixtures and solar components, everything you need for safe, code-compliant electrical installations.", features: ["Wiring", "Switchgear", "Lighting", "Solar Panels", "Distribution Boards", "Earth Rods"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
      { title: "Plumbing & Fittings", slug: "plumbing-fittings", desc: "Quality pipes, fittings, taps, and sanitary ware from leading brands. Complete plumbing solutions for residential and commercial projects.", features: ["Pipes", "Fittings", "Taps", "Geysers", "Sanitary Ware", "Water Tanks"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
      { title: "Paint & Finishes", slug: "paint-finishes", desc: "Premium paints, varnishes, and finishes for interior and exterior applications. Expert colour matching and advice.", features: ["Interior Paint", "Exterior Paint", "Varnish", "Wood Stain", "Primers", "Colour Matching"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
      { title: "Tools & Equipment", slug: "tools-equipment", desc: "Professional-grade hand tools, power tools, and construction equipment for every trade and skill level.", features: ["Hand Tools", "Power Tools", "Safety Gear", "Measuring", "Cutting", "Welding"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" },
      { title: "Delivery Service", slug: "delivery-service", desc: "Reliable delivery across Harare and surrounding areas. Bulk orders, site delivery, and same-day service for urgent needs.", features: ["Same-Day Delivery", "Bulk Transport", "Site Delivery", "Harare Metro", "Tracking", "Insurance"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" },
    ],
  },

  projects: {
    heroTitle: "Our Portfolio",
    heroSubtitle: "A selection of our finest work across Harare and beyond.",
    items: [
      { title: "The Signature Project", slug: "the-signature-project", category: "Residential", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Building Materials", "Electrical Supplies"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"] },
      { title: "Heritage Collection", slug: "heritage-collection", category: "Commercial", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Building Materials", "Electrical Supplies"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"] },
      { title: "Modern Edge", slug: "modern-edge", category: "Renovation", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Building Materials", "Electrical Supplies"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"] },
      { title: "The Milestone", slug: "the-milestone", category: "Industrial", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Building Materials", "Electrical Supplies"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"] },
      { title: "Precision Series", slug: "precision-series", category: "Residential", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Building Materials", "Electrical Supplies"], image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", images: ["https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"] },
      { title: "The Showcase", slug: "the-showcase", category: "Commercial", location: "Harare, Zimbabwe", desc: "A showcase of our commitment to quality and client satisfaction.", client: "Private Client", services: ["Building Materials", "Electrical Supplies"], image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"] },
    ],
  },

  homeTestimonials: [
    { text: "My go-to supplier for every project. Stock is always available and prices are competitive.", name: "Tendai Marange", role: "Building Contractor", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "The electrical section is the best in Harare. Knowledgeable staff who understand what contractors need.", name: "James Karonga", role: "Electrician", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "Built my entire house with materials from here. Quality products, fair prices, and they delivered on time.", name: "Robert Mugwagwa", role: "Homeowner, Borrowdale", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "As a developer, I need a supplier I can rely on. They have never let me down on stock or delivery.", name: "David Chigumira", role: "Property Developer", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
  ],

  reviews: {
    heroTitle: "Client Voices",
    heroSubtitle: "Hear from the people who trust us with their most important projects.",
    items: [
      { text: "My go-to supplier for every project. Stock is always available and prices are competitive.", name: "Tendai Marange", role: "Building Contractor", rating: 5 },
      { text: "The electrical section is the best in Harare. Knowledgeable staff who understand what contractors need.", name: "James Karonga", role: "Electrician", rating: 5 },
      { text: "Built my entire house with materials from here. Quality products, fair prices, and they delivered on time.", name: "Robert Mugwagwa", role: "Homeowner, Borrowdale", rating: 5 },
      { text: "As a developer, I need a supplier I can rely on. They have never let me down on stock or delivery.", name: "David Chigumira", role: "Property Developer", rating: 5 },
      { text: "Great range of plumbing supplies. The staff helped me find exactly what I needed for a tricky installation.", name: "Farai Mushonga", role: "Plumber", rating: 5 },
      { text: "Even for small DIY projects, they give you the same attention as a big contractor. Excellent service.", name: "Brian Mutema", role: "DIY Enthusiast", rating: 5 },
    ],
  },

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by passion. Trusted by Harare.",
    story: [
      "Metzim Electrical & Hardware was established in 2009 on Mbuya Nehanda Street, right in the heart of Harare's commercial district. We have built our reputation on stocking quality electrical and hardware products.",
      "With 40 Google reviews, an active Facebook community, and partnerships with leading brands, Metzim has become the go-to supplier for professionals who demand reliability.",
    ],
    values: [
      { title: "Quality First", desc: "We never compromise on the quality of our work or materials." },
      { title: "Client Focused", desc: "Every decision starts with what is best for the client." },
      { title: "Professional Excellence", desc: "Our team brings expertise and dedication to every project." },
      { title: "Integrity Always", desc: "Transparent pricing, honest advice, and reliable service." },
    ],
    team: [
      { name: "The Founder", role: "Managing Director", bio: "With over a decade of industry experience, our founder built Metzim Electrical & Hardware on a foundation of quality and trust.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
      { name: "Operations Lead", role: "Head of Operations", bio: "Ensuring every project runs smoothly from start to finish with meticulous planning and execution.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Technical Director", role: "Lead Specialist", bio: "Deep technical expertise combined with creative problem-solving drives innovation across all projects.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "We are always looking for talented people who share our passion for excellence.",
    positions: [
      { title: "Junior Specialist", department: "Operations", location: "Harare", type: "Full-time", desc: "Join our growing team and develop your skills under experienced mentors." },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "Ready to start? We would love to hear from you.",
    branches: [
      { name: "Harare Office", address: "107 Mbuya Nehanda St, Harare, Zimbabwe", phone: "+263 77 390 0967", email: "metzimelectricalhardware@gmail.com" },
    ],
  },

  homeCta: {
    title: "POWER YOUR\nPROJECT",
    subtitle: "Every great project begins with a conversation. Tell us what you need, and let us show you what is possible.",
    ctaPrimary: "Get Started",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Metzim Electrical & Hardware! I would like to discuss a project.",
    backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85",
  },

  footer: {
    description: "Metzim Electrical & Hardware is Harare's specialist supplier of electrical components and building hardware. From wiring...",
    copyright: "Metzim Electrical & Hardware",
  },
};

export default siteData;
