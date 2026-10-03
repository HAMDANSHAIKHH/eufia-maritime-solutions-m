import { SERVICES } from "./services";

/**
 * Global site configuration for EUFIA.
 *
 * Anything marked `pending` must be supplied by the company before launch.
 * No email addresses, phone numbers, street addresses, social profiles,
 * office locations, statistics or certifications have been invented.
 */

export const SITE = {
  name: "EUFIA SHIPPING FZCO",
  companyName: "EUFIA SHIPPING FZCO",
  url: "https://www.eufiashipping.com",
  positioning: "Connecting Global Trade Through Intelligent Maritime Solutions.",
  description:
    "EUFIA SHIPPING FZCO is a maritime shipping, vessel chartering and global logistics company. We provide vessel chartering, dry bulk and tanker shipping, freight forwarding, project cargo, maritime consultancy, cargo inspection, end-to-end logistics, maritime AI and digital solutions, and vessel spare parts supply.",
  tagline: "Moving Global Trade Forward.",
  heroCopy:
    "Comprehensive maritime, chartering and logistics solutions designed to connect businesses and cargo across international markets.",
} as const;

export const PRIMARY_NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Global Network", href: "/global-network" },
  { label: "Contact", href: "/contact" },
] as const;

export const CONTACT = {
  companyName: "EUFIA SHIPPING FZCO",
  email: "ops@eufiashipping.com",
  phone: "+971566110312",
  phoneFormatted: "+971 56 611 0312",
  address:
    "DSO - IFZA - 88094 - 001, Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates",
  addressLines: [
    "DSO - IFZA - 88094 - 001",
    "Building A1, Dubai Digital Park",
    "Dubai Silicon Oasis, Dubai",
    "United Arab Emirates",
  ],
  socials: [] as { label: string; href: string }[],
  note: null as string | null,
} as const;

export const FOOTER_SERVICES = SERVICES.map((service) => ({
  label: service.navLabel,
  href: `/services/${service.slug}`,
}));

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Sitemap", href: "/sitemap" },
];

/** Every canonical, indexable page — kept in sync with the router. */
export const SITEMAP_ROUTES: { href: string; priority: string }[] = [
  { href: "/", priority: "1.0" },
  { href: "/about", priority: "0.8" },
  { href: "/services", priority: "0.9" },
  ...SERVICES.map((s) => ({ href: `/services/${s.slug}`, priority: "0.8" })),
  { href: "/global-network", priority: "0.8" },
  { href: "/contact", priority: "0.8" },
  { href: "/privacy-policy", priority: "0.4" },
  { href: "/terms-and-conditions", priority: "0.4" },
  { href: "/sitemap", priority: "0.3" },
];
