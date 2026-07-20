// ============================================================
// Company constants — single source of truth for all business data
// ============================================================

export const company = {
  name: 'Bright Electrical and Engineering Works',
  shortName: 'Bright Electrical',
  tagline: "Kerala's Most Trusted Electrical Engineering Partner",
  description:
    'Expert electrical contractor serving residential, commercial, and industrial clients across Kerala. Licensed electricians delivering quality workmanship with complete safety compliance since our founding.',

  phone: '+918304910099',
  phoneDisplay: '83049 10099',
  whatsapp: 'https://wa.me/918304910099?text=Hi%20Bright%20Electrical%2C%20I%20need%20electrical%20services.%20Please%20contact%20me.',
  email: '',   // Add when available

  address: {
    street: 'Chungathara, Nilambur',
    city: 'Malappuram District',
    state: 'Kerala',
    zip: '679334',
    country: 'India',
    countryCode: 'IN',
    full: 'Chungathara, Nilambur, Malappuram, Kerala 679334',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15657.56388573657!2d76.19900717!3d11.1186537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64e3a8e2ca5c9%3A0x12345!2sChungathara%2C%20Nilambur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1699999999',
  },

  serviceArea: 'Kerala',
  priceRange: '₹₹',

  social: {
    whatsapp: 'https://wa.me/918304910099',
  },

  hours: {
    weekdays: 'Monday – Saturday: 8:00 AM – 7:00 PM',
    sunday: 'Sunday: 9:00 AM – 5:00 PM',
    emergency: '24/7 Emergency Services Available',
  },

  site: {
    domain: 'brightwork.in',
    url: 'https://brightwork.in',
    ogImage: '/images/og-preview.webp',
  },

  poweredBy: {
    name: 'Webzio™',
    url: 'https://webzio-info.vercel.app/',
  },

  stats: [
    { value: '500+', label: 'Projects Completed' },
    { value: '30+', label: 'Years of Experience' },
    { value: '200+', label: 'Happy Clients' },
    { value: '24/7', label: 'Emergency Support' },
  ],
} as const;

export type Company = typeof company;
