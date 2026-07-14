// ============================================================
// SEO configuration — meta tags, Open Graph, Twitter Cards
// ============================================================

import { company } from './company';

export interface SEOConfig {
  title:       string;
  description: string;
  canonical?:  string;
  ogImage?:    string;
  noIndex?:    boolean;
}

export const defaultSEO: SEOConfig = {
  title:       `${company.shortName} | Kerala's Trusted Electrical Contractor`,
  description: company.description,
  canonical:   company.site.url,
  ogImage:     company.site.ogImage,
  noIndex:     false,
};

export const pageSEO: Record<string, SEOConfig> = {
  home: {
    title:       `${company.shortName} | Electrical Contractor in Kerala`,
    description: 'Expert electrical contractor in Kerala. Domestic wiring, industrial panels, CCTV, smart automation & 24/7 maintenance. Licensed. Free quote — call or WhatsApp now!',
    canonical:   company.site.url,
    ogImage:     company.site.ogImage,
  },
  about: {
    title:       `About Us | ${company.shortName}`,
    description: 'Learn about Bright Electrical and Engineering Works — Kerala\'s trusted electrical engineering partner with years of experience in residential, commercial, and industrial projects.',
    canonical:   `${company.site.url}/about/`,
  },
  services: {
    title:       `Electrical Services in Kerala | ${company.shortName}`,
    description: 'Comprehensive electrical services: home wiring, industrial power, ATS panels, CCTV, automation, structured cabling & maintenance. Serving all of Kerala.',
    canonical:   `${company.site.url}/services/`,
  },
  contact: {
    title:       `Contact Us | ${company.shortName}`,
    description: 'Get in touch with Bright Electrical. Call, WhatsApp, or fill in our contact form for a free quote on any electrical service in Kerala.',
    canonical:   `${company.site.url}/contact/`,
  },
};

export const siteTitle = (pageTitle?: string): string => {
  if (!pageTitle) return defaultSEO.title;
  return `${pageTitle} | ${company.shortName}`;
};
