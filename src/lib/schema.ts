// ============================================================
// Schema.org JSON-LD builders
// ============================================================

import { company } from '@data/company';

const baseUrl = company.site.url;

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Electrician', 'LocalBusiness'],
    '@id': `${baseUrl}/#organization`,
    name: company.name,
    alternateName: company.shortName,
    description: company.description,
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/images/logo.png`,
      width: 200,
      height: 80,
    },
    image: `${baseUrl}${company.site.ogImage}`,
    telephone: company.phone,
    priceRange: company.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: 'Nilambur',
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: company.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 11.1187,
      longitude: 76.2052,
    },
    areaServed: {
      '@type': 'State',
      name: 'Kerala',
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: company.phone,
      contactType: 'customer service',
      availableLanguage: ['English', 'Malayalam'],
      contactOption: 'TollFree',
    },
    sameAs: [company.social.whatsapp],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Electrical Solutions' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Industrial Power Systems' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ATS & AMF Panel Setup' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automation & Smart Control' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structured Cabling & Networks' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Surveillance & Security Systems' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Repair & Maintenance' } },
      ],
    },
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: company.name,
    description: company.description,
    publisher: { '@id': `${baseUrl}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/services/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: { '@id': `${baseUrl}/#organization` },
    areaServed: { '@type': 'State', name: 'Kerala', addressCountry: 'IN' },
  };
}

export function buildFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
