/**
 * Nexus — single source of truth for all site content.
 *
 * Edit this file to change any text, link, phone number, or portfolio item on
 * the site. Components must not contain hard-coded content.
 */

export interface Brand {
  name: string;
  tagline: string;
  logo: string;
  siteUrl: string;
}

export const brand: Brand = {
  name: "Nexus",
  tagline: "Digital growth agency, Nairobi",
  logo: "/nexus-logo.png",
  siteUrl: "https://nexus.co.ke",
};

export interface ContactDetail {
  whatsappNumber: string;
  whatsappLink: string;
  email: string;
  location: string;
  social: Array<{ label: string; href: string }>;
}

export const contact: ContactDetail = {
  whatsappNumber: "0768688854",
  whatsappLink: "https://wa.me/254768688854",
  email: "hello@nexus.com",
  location: "Nairobi, Kenya",
  social: [
    { label: "Instagram", href: "https://instagram.com/nexuske" },
    { label: "LinkedIn", href: "https://linkedin.com/company/nexus-ke" },
    { label: "X", href: "https://x.com/nexuske" },
  ],
};

export interface NavItem {
  label: string;
  href: string;
}

export const nav: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const navCta = { label: "Free Business Audit", href: "#contact" };

export interface HeroPart {
  text: string;
  highlight?: boolean;
}

export interface Hero {
  eyebrow: string;
  headline: HeroPart[];
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  trustItems: string[];
}

export const hero: Hero = {
  eyebrow: "Digital growth agency, Nairobi",
  headline: [
    { text: "Digital growth," },
    { text: " engineered to scale.", highlight: true },
  ],
  subheadline:
    "Nexus is a digital growth and creative agency. We survey your business, find what is holding you back, and build custom solutions — SEO, web development, social media, video, and creator partnerships — that actually move the needle.",
  primaryCta: { label: "Book Your Free Audit", href: "#contact" },
  secondaryCta: { label: "Chat on WhatsApp", href: contact.whatsappLink },
  trustItems: [
    "SEO",
    "Web Development",
    "Social Media",
    "Video Production",
    "Creator Partnerships",
  ],
};

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: "🔍",
    title: "SEO",
    description:
      "Higher rankings and more organic traffic through technical audits, on-page optimisation, and content built to convert.",
  },
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Fast, responsive websites and web apps built to perform — clean code, no bloated templates.",
  },
  {
    icon: "📱",
    title: "Social Media",
    description:
      "Consistent, scroll-stopping content and community management across your social channels.",
  },
  {
    icon: "🎬",
    title: "Video Production",
    description:
      "Professional filming and editing that tells your brand's story and holds attention.",
  },
  {
    icon: "🤝",
    title: "Creator Partnerships",
    description:
      "We connect your brand with creators whose audiences already care about what you sell.",
  },
];

export const servicesSection = {
  eyebrow: "Services",
  heading: "What we do",
  intro:
    "Every engagement starts with an audit — your business, your goals, and the gaps between them.",
};

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Survey",
    description:
      "We survey your business, presence, and goals to find exactly what needs to change — no guesswork.",
  },
  {
    step: "02",
    title: "Diagnose",
    description:
      "We map a custom growth plan around your diagnosis — never a one-size-fits-all template.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We design, build, film, and launch the assets and systems your strategy calls for.",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "We measure, optimise, and keep pushing so your results compound over time.",
  },
];

export const processSection = {
  eyebrow: "How we work",
  heading: "Our process",
};

export interface About {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  valuePoints: string[];
}

export const about: About = {
  eyebrow: "About us",
  heading: "About Nexus",
  paragraphs: [
    "Nexus is a digital growth and creative agency built for businesses that know they should be doing more online.",
    "We start every engagement with an audit — not a template. From there we design a strategy around your goals, execute the build, and keep optimising so the results compound.",
    "Whether you need a website that ranks, a social presence that converts, or a brand film that lands, we are the team behind the growth.",
  ],
  valuePoints: [
    "Audit-first approach — we diagnose before we prescribe",
    "Custom solutions, never templates — built for your specific goals",
    "Nairobi-based team with local market expertise",
  ],
};

export interface PortfolioItem {
  title: string;
  client: string;
  category: string;
  description: string;
  result: string;
  image: string;
  link?: string;
}

export interface PortfolioSection {
  eyebrow: string;
  heading: string;
  filterTabs: string[];
  items: PortfolioItem[];
}

export const portfolio: PortfolioSection = {
  eyebrow: "Selected work",
  heading: "Portfolio",
  filterTabs: ["All", "Websites", "Social Media", "Video", "SEO"],
  items: [
    {
      title: "Luma Café — Brand Website",
      client: "Luma Café",
      category: "Websites",
      description:
        "A fast, responsive website that brings the café's brand online, with online booking and menu integration.",
      result: "40% more online bookings within two months of launch.",
      image: "/portfolio/project-1.jpg",
    },
    {
      title: "Summer Campaign — Social Media",
      client: "Velvet Social",
      category: "Social Media",
      description:
        "A three-month social strategy with reels, static content, and community management across channels.",
      result: "Engagement up 3× and 2,400 new followers.",
      image: "/portfolio/project-2.jpg",
    },
    {
      title: "Launch Film — Product Video",
      client: "Nova Labs",
      category: "Video",
      description:
        "A 60-second brand film, filmed and edited for a product launch across paid and owned channels.",
      result: "15,000 views in the first week and 3× ROAS on paid media.",
      image: "/portfolio/project-3.jpg",
      link: "https://nexus.co.ke",
    },
  ],
};

export interface ContactFormLabels {
  nameLabel: string;
  emailLabel: string;
  serviceLabel: string;
  servicePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
}

export interface ContactSection {
  eyebrow: string;
  heading: string;
  subheadline: string;
  form: ContactFormLabels;
  whatsapp: { label: string; hint: string };
  details: {
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    followLabel: string;
  };
}

export const contactSection: ContactSection = {
  eyebrow: "Get in touch",
  heading: "Contact us",
  subheadline:
    "Have a project in mind? Send us your details and we will get back to you within one business day.",
  form: {
    nameLabel: "Full name",
    emailLabel: "Email address",
    serviceLabel: "Service interested in",
    servicePlaceholder: "Choose a service",
    messageLabel: "Your message",
    messagePlaceholder: "Tell us about your project, timeline, and budget.",
    submitLabel: "Send message",
  },
  whatsapp: { label: "Prefer to chat?", hint: "Message us directly on WhatsApp." },
  details: {
    phoneLabel: "Phone",
    emailLabel: "Email",
    locationLabel: "Location",
    followLabel: "Follow us",
  },
};

export interface FooterContent {
  text: string;
  quickLinks: NavItem[];
}

export const footer: FooterContent = {
  text: "Nexus — Digital growth and creative agency for ambitious brands.",
  quickLinks: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
};
