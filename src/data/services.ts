// ============================================================
// Services data — used on Home, Services listing, and individual pages
// ============================================================

export interface Service {
  id:          string;
  title:       string;
  shortTitle:  string;
  description: string;
  longDesc:    string;
  icon:        string;   // SVG path data
  image:       string;   // Path from /public/images/
  features:    string[];
  industries:  string[];
  slug:        string;
}

export const services: Service[] = [
  {
    id:         'home-electrical',
    slug:       'home-electrical-solutions',
    title:      'Home Electrical Solutions',
    shortTitle: 'Home Wiring',
    description:
      'Safe, modern, and energy-efficient domestic wiring, appliance installation, lighting upgrades, and full-home electrical solutions.',
    longDesc:
      'We design and install complete electrical systems for homes of all sizes — from new construction to full rewiring of existing properties. Our licensed electricians follow Kerala Electricity Board standards ensuring safety, compliance, and energy efficiency.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    image: '/images/services/home-electrical.webp',
    features: [
      'Complete home wiring & rewiring',
      'Distribution board installation',
      'Energy-efficient LED lighting',
      'Appliance connection & installation',
      'Earth leakage protection (ELCB/MCB)',
      'Switchboard upgrades & modernization',
    ],
    industries: ['Residential', 'Apartments', 'Villas', 'Housing Projects'],
  },
  {
    id:         'industrial-power',
    slug:       'industrial-power-systems',
    title:      'Industrial Power Systems',
    shortTitle: 'Industrial Power',
    description:
      'High-load power systems, machine wiring, industrial panel boards, and robust maintenance contracts for factories and industrial units.',
    longDesc:
      'We handle the full spectrum of industrial electrical work — from heavy machinery wiring to complete power distribution systems. Our experienced team understands industrial safety standards and delivers installations that maximize uptime and efficiency.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    image: '/images/services/industrial-power.webp',
    features: [
      'Heavy-duty power distribution',
      'Industrial machine wiring',
      'MCC & PCC panel installation',
      'Power factor correction',
      'Earthing & lightning protection',
      'Annual Maintenance Contracts (AMC)',
    ],
    industries: ['Manufacturing', 'Factories', 'Warehouses', 'Production Units'],
  },
  {
    id:         'ats-amf-panels',
    slug:       'ats-amf-panel-setup',
    title:      'ATS & AMF Panel Setup',
    shortTitle: 'ATS / AMF Panels',
    description:
      'Automatic Transfer Switch and Automatic Mains Failure panels ensuring seamless power backup for homes and businesses during outages.',
    longDesc:
      'Our ATS/AMF solutions provide instantaneous power switchover, protecting your operations from costly downtime. We design, install, and maintain panels to match your specific load requirements and generator capacity.',
    icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
    image: '/images/services/ats-panel.webp',
    features: [
      'Automatic Transfer Switch (ATS) installation',
      'AMF panel design & commissioning',
      'Generator synchronization panels',
      'Load management systems',
      'Remote monitoring integration',
      'Testing & commissioning reports',
    ],
    industries: ['Hospitals', 'Hotels', 'Commercial Buildings', 'Data Centers'],
  },
  {
    id:         'automation-smart-control',
    slug:       'automation-and-smart-control',
    title:      'Automation & Smart Control',
    shortTitle: 'Smart Automation',
    description:
      'Smart home and industrial automation with intelligent sensors, PLCs, and IoT integration for enhanced control and convenience.',
    longDesc:
      'From smart lighting and climate control to full PLC-based industrial automation, we bring intelligent systems to your home or facility. Our automation solutions reduce energy consumption while improving comfort and operational efficiency.',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    image: '/images/services/automation.webp',
    features: [
      'Smart home lighting control',
      'HVAC automation & control',
      'PLC-based industrial automation',
      'IoT sensor integration',
      'Energy monitoring dashboards',
      'Remote access & control systems',
    ],
    industries: ['Smart Homes', 'Hotels', 'Factories', 'Commercial Complexes'],
  },
  {
    id:         'structured-cabling',
    slug:       'structured-cabling-and-networks',
    title:      'Structured Cabling & Networks',
    shortTitle: 'Network Cabling',
    description:
      'Data center setups, structured cabling for enterprises, LAN installations, and reliable IT network infrastructure.',
    longDesc:
      'We provide complete structured cabling solutions following TIA/EIA standards, supporting high-speed data transmission for modern business needs. From server room builds to campus-wide network deployments, our installations are built to last.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    image: '/images/services/network-cabling.webp',
    features: [
      'Cat6/Cat6A structured cabling',
      'Fiber optic installation',
      'Server room & data center builds',
      'LAN/WAN network setup',
      'Patch panel & cable management',
      'Testing & certification (Fluke)',
    ],
    industries: ['Offices', 'IT Companies', 'Schools', 'Hospitals', 'Hotels'],
  },
  {
    id:         'cctv-security',
    slug:       'surveillance-and-security-systems',
    title:      'Surveillance & Security Systems',
    shortTitle: 'CCTV & Security',
    description:
      'Complete CCTV solutions, biometric access control, burglar alarms, and smart surveillance systems for total security.',
    longDesc:
      'We install comprehensive security systems combining IP/HD CCTV cameras, NVR/DVR recording, biometric access control, and integrated alarm systems. Our solutions provide 24/7 monitoring capability with remote access via smartphone.',
    icon: 'M15 10l4.553-2.069A1 1 0 0121 8.845v6.31a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    image: '/images/services/cctv.webp',
    features: [
      'HD/4K IP & Analog CCTV cameras',
      'NVR/DVR recording systems',
      'Remote viewing (mobile app)',
      'Biometric access control',
      'Burglar & fire alarm systems',
      'Video intercom installation',
    ],
    industries: ['Residences', 'Offices', 'Retail', 'Schools', 'Hospitals'],
  },
  {
    id:         'repair-maintenance',
    slug:       'repair-and-maintenance',
    title:      'Repair & Maintenance',
    shortTitle: 'Maintenance',
    description:
      'Emergency repair, fault detection, preventive care, and Annual Maintenance Contracts for uninterrupted electrical performance.',
    longDesc:
      'Electrical faults can cause costly downtime and safety hazards. Our rapid-response team provides emergency call-outs, systematic fault diagnosis, and preventive maintenance programs that keep your electrical systems running safely year-round.',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    image: '/images/services/maintenance.webp',
    features: [
      '24/7 emergency electrical repair',
      'Fault detection & diagnosis',
      'Preventive maintenance schedules',
      'Annual Maintenance Contracts (AMC)',
      'Wiring fault & short circuit repair',
      'Safety audits & compliance reports',
    ],
    industries: ['All Sectors', 'Residential', 'Commercial', 'Industrial'],
  },
];

export const serviceCategories = [
  { id: 'residential',  label: 'Residential' },
  { id: 'commercial',   label: 'Commercial'  },
  { id: 'industrial',   label: 'Industrial'  },
  { id: 'security',     label: 'Security'    },
  { id: 'automation',   label: 'Automation'  },
] as const;

export type ServiceCategory = typeof serviceCategories[number]['id'];
