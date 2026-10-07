export const hero = {
  eyebrow: "Nexus",
  title: "Not every problem has a generic answer.",
  subtitle:
    "Nexus helps businesses improve their online presence. We start with a survey to diagnose the problem, then build a custom solution around it.",
  primaryCta: { label: "Start a Project", href: "/start-a-project" },
  secondaryCta: { label: "Our Process", href: "#process" },
} as const;

export const pillars = {
  eyebrow: "The Process",
  title: "Survey → Diagnose → Build → Grow",
  steps: [
    { title: "Survey", description: "We start by understanding your goals, your audience, and where your online presence stands today." },
    { title: "Diagnose", description: "We identify exactly what is holding your business back online." },
    { title: "Build", description: "We design a custom solution around the diagnosis — never a template." },
    { title: "Tooling", description: "We put the right systems and software in place to run it day to day." },
    { title: "Content", description: "We craft the message and assets that make the solution visible." },
    { title: "Amplify", description: "We put the work in front of the people it matters to." },
    { title: "Grow", description: "We refine, measure, and keep pushing the business forward." },
  ],
} as const;

export const whoWeHelp = {
  eyebrow: "Who We Help",
  title: "Built for businesses that know something is off.",
  intro:
    "If your online presence does not reflect the quality of your work, you are exactly who Nexus is for.",
  items: [
    {
      title: "Businesses without a clear online presence",
      description: "You have a real business, but almost no one finds or understands it online.",
    },
    {
      title: "Founders without a technical playbook",
      description: "You know what you want to achieve, but not which tools or builds get you there.",
    },
    {
      title: "Teams outgrowing generic tools",
      description: "Off-the-shelf templates and platforms no longer fit how you actually work.",
    },
  ],
} as const;

export const studio = {
  eyebrow: "Photography Studio",
  title: "Visuals with a point of view.",
  intro:
    "Our studio produces the photography and brand imagery that anchor the rest of the work.",
  images: [
    { src: "/images/studio-1.jpg", alt: "Studio placeholder 1", width: 1200, height: 900 },
    { src: "/images/studio-2.jpg", alt: "Studio placeholder 2", width: 1200, height: 900 },
    { src: "/images/studio-3.jpg", alt: "Studio placeholder 3", width: 1200, height: 900 },
    { src: "/images/studio-4.jpg", alt: "Studio placeholder 4", width: 1200, height: 900 },
  ],
} as const;

export const creators = {
  eyebrow: "Creator Network",
  title: "A network that amplifies.",
  intro:
    "We collaborate with creators who help push your message further than we could alone.",
  items: [
    { role: "Content Creators", description: "Voices that produce and carry your story." },
    { role: "Editors", description: "Craft that turns raw footage into finished work." },
    { role: "Photographers", description: "Images that give your brand its look." },
  ],
} as const;

export const finalCta = {
  title: "Not every problem has a generic answer.",
  subtitle: "Tell us where your business stands online, and we will diagnose the rest.",
  primaryCta: { label: "Start a Project", href: "/start-a-project" },
  secondaryCta: { label: "Explore Services", href: "/services" },
} as const;
