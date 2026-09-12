// Main website configuration file
// Edit this file to change text, colors, links, menu items, gallery images and contact details.
// This file is designed for easy maintenance by children or future editors.

export const siteConfig = {
  brand: {
    name: 'Mocavo Coffee',
    tagline: 'Bengaluru coffee stop.',
    address: 'Mocavo Coffee, Bengaluru, Karnataka, India',
    phone: 'Check the Google Maps listing for current contact details',
    email: 'See the Google Maps listing for direct contact information',
  },
  theme: {
    primary: '#C9774A',
    secondary: '#F8D7B6',
    accent: '#2E201E',
    background: '#FFF8F2',
    surface: '#FFFFFF',
    text: '#2B1C1A',
    muted: '#6B524C',
    border: '#EADBCB',
  },
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Experience', href: '#experience' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit', href: '#visit' },
  ],
  hero: {
    eyebrow: 'Bengaluru café',
    title: 'Mocavo Coffee',
    description:
      'A welcoming neighborhood café for handcrafted coffee, relaxed conversations, and easy moments in Bengaluru.',
    image: '/unnamed.webp',
    primaryCta: 'View Menu',
    secondaryCta: 'Get Directions',
    stats: [
      { label: 'Location', value: 'Bengaluru' },
      { label: 'Vibe', value: 'Cozy' },
      { label: 'Focus', value: 'Coffee & bites' },
    ],
  },
  about: {
    eyebrow: 'About us',
    title: 'A familiar coffee stop in Bengaluru.',
    description:
      'Mocavo Coffee is a local café in Bengaluru that brings together coffee, comfort, and an easygoing atmosphere. This website has been refreshed to match the business details shown in the provided Google Maps listing.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmWgA0XHIWdE3fHO0bL-nOxin9pozS7Pqp-TtCaUZXYtSp2AnlSyJMMtPHYWoAfehls0VOpwng7wgOIanjc-6zaCe1I1U3ugionWMm9pSGEdHuo1BDshpnPc_68Drqayh7cz84FE-sjreK-=s1360-w1360-h1020-rw',
    details: [
      'Coffee-first café experience',
      'Relaxed neighborhood atmosphere',
      'Updated to match the Google Maps listing',
    ],
  },
  menu: {
    eyebrow: 'Signature menu',
    title: 'Simple favorites made for everyday coffee breaks.',
    items: [
      {
        name: 'Classic Espresso',
        description: 'A rich, balanced espresso shot for a quick and satisfying start.',
        price: '₹150',
        tag: 'Classic',
      },
      {
        name: 'Cappuccino',
        description: 'Smooth espresso topped with creamy milk foam and a gentle finish.',
        price: '₹220',
        tag: 'Popular',
      },
      {
        name: 'Cold Brew',
        description: 'Slow-steeped coffee with a clean, refreshing taste.',
        price: '₹250',
        tag: 'Refreshing',
      },
      {
        name: 'Veg Sandwich',
        description: 'Fresh vegetables and a satisfying filling for a light café meal.',
        price: '₹260',
        tag: 'Fresh',
      },
      {
        name: 'Bun Maska',
        description: 'A soft, buttery bun made for a classic tea-time pairing.',
        price: '₹120',
        tag: 'Comfort',
      },
      {
        name: 'Chocolate Cake',
        description: 'Soft chocolate cake with a rich finish for your sweet craving.',
        price: '₹240',
        tag: 'Sweet',
      },
    ],
  },
  features: [
    {
      title: 'Handcrafted coffee',
      text: 'From espresso to cold brew, every cup is made to feel simple, comforting, and fresh.',
    },
    {
      title: 'Easy café bites',
      text: 'Light snacks and sweet treats that pair well with slow coffee breaks.',
    },
    {
      title: 'Relaxed vibe',
      text: 'A calm and welcoming space for work, catch-ups, or a quiet pause in the city.',
    },
  ],
  gallery: {
    eyebrow: 'Inside Mocavo',
    title: 'A warm, easygoing café experience in Bengaluru.',
    images: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80',
    ],
  },
  testimonials: {
    eyebrow: 'What guests say',
    title: 'A local favorite for coffee and conversation.',
    items: [
      {
        quote:
          'A relaxed café stop in Bengaluru that makes it easy to slow down and enjoy a good cup.',
        name: 'Local regular',
        role: 'Bengaluru guest',
      },
      {
        quote:
          'Simple, comfortable, and consistently welcoming — exactly what you want from a neighborhood café.',
        name: 'Coffee lover',
        role: 'City visitor',
      },
      {
        quote:
          'The kind of place that feels easy to return to again and again.',
        name: 'Weekend guest',
        role: 'Cafe visitor',
      },
    ],
  },
  visit: {
    eyebrow: 'Visit us',
    title: 'Find Mocavo Coffee in Bengaluru.',
    hours: [
      { day: 'Monday - Sunday', time: 'Open daily — check the latest hours on Google Maps' },
    ],
    cta: 'Open in Maps',
    mapLink: 'https://www.google.com/maps/place/Mocavo+Coffee/@12.8419251,77.6478046,16z/data=!4m14!1m7!3m6!1s0x3bae6bffd9934d2d:0x13f1ae95e6b6a879!2sMocavo+Coffee!8m2!3d12.8419251!4d77.6478046!16s%2Fg%2F11y0_lkj3b!3m5!1s0x3bae6bffd9934d2d:0x13f1ae95e6b6a879!8m2!3d12.8419251!4d77.6478046!16s%2Fg%2F11y0_lkj3b?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D',
  },
  socialLinks: [
    { label: 'Google Maps', href: 'https://www.google.com/maps/place/Mocavo+Coffee/@12.8419251,77.6478046,16z/data=!4m14!1m7!3m6!1s0x3bae6bffd9934d2d:0x13f1ae95e6b6a879!2sMocavo+Coffee!8m2!3d12.8419251!4d77.6478046!16s%2Fg%2F11y0_lkj3b!3m5!1s0x3bae6bffd9934d2d:0x13f1ae95e6b6a879!8m2!3d12.8419251!4d77.6478046!16s%2Fg%2F11y0_lkj3b?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D' },
    { label: 'Directions', href: 'https://www.google.com/maps/dir/?api=1&destination=12.8419251,77.6478046' },
    { label: 'Nearby', href: 'https://www.google.com/maps/search/?api=1&query=Mocavo+Coffee' },
  ],
  footer: {
    note: 'Bengaluru coffee stop — updated to match the provided Google Maps listing.',
  },
};
