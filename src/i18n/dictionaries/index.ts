import type { Locale } from "@/i18n/config";
import type { ReactNode } from "react";

export type PricingFeatureValue = boolean | number | string;

export type PricingTier = {
  name: string;
  slug: string;
  description: string;
  priceMonthly: number;
  href?: string;
  highlights: Array<{ description: ReactNode }>;
  features: Array<{
    section: string;
    name: string;
    value: PricingFeatureValue;
  }>;
  popular?: boolean;
};

export type FaqItem = { question: string; answer: ReactNode };

export type TestimonialItem = {
  name: string;
  title: string;
  quote: string;
  icon:
    | "globe"
    | "scale"
    | "lock"
    | "eye"
    | "adjustments"
    | "check";
};

export type UseCaseItem = {
  img: string;
  name: string;
  title: string;
  quote: string;
};

export type Dictionary = {
  metadata: {
    defaultTitle: string;
    titleTemplate: string;
    description: string;
  };
  localeSwitcher: {
    label: string;
    languages: Record<Locale, string>;
  };
  navbar: {
    brand: string;
    home: string;
    links: Array<{ href: string; label: string }>;
    login: string;
  };
  footer: {
    cta: {
      title: string;
      lead: string;
      helper: string;
      button: string;
    };
    description: string;
    sitemap: {
      product: string;
      pricing: string;
      blog: string;
      company: string;
      mission: string;
      careers: string;
      support: string;
      helpCenter: string;
      faq: string;
      legal: string;
      terms: string;
      privacy: string;
      careersDisabledLabel: string;
    };
  };
  home: {
    hero: {
      title: string;
      highlight: string;
      description: ReactNode;
      bullets: string[];
      badges: string[];
      primaryCta: string;
      secondaryCta: string;
    };
    integrationsHeading: string;
    bentoCards: Array<{
      eyebrow: string;
      title: string | ReactNode;
      description: string;
      badgeSoon?: string;
    }>;
  };
  testimonials: {
    heading: string;
    items: TestimonialItem[];
  };
  useCases: {
    heading: string;
    callout: { text: string; ctaLabel: string; href: string };
    items: UseCaseItem[];
  };
  pricing: {
    metadata: { title: string; description: string };
    header: { title: string; lead: string; ribbon: string };
    popularBadge: string;
    priceSuffix: string;
    tiers: PricingTier[];
    actions: { cta: string; benefitsTitle: string };
    table: {
      caption: string;
      included: string;
      notIncluded: string;
    };
    testimonial: {
      title: string;
      description: string;
      contact: string;
      demo: string;
    };
    faq: { title: string; items: FaqItem[] };
  };
  blog: {
    metadata: { title: string; description: string };
    heroTitle: string;
    heroLead: string;
    featuredTitle: string;
    categories: { all: string };
    rss: string;
    empty: string;
    readMore: string;
    previous: string;
    next: string;
  };
  blogPost: { back: string };
  company: {
    metadata: { title: string; description: string };
    header: {
      title: string;
      lead: string;
      missionTitle: string;
      missionBody: [string, string];
      cta: string;
      quotes: Array<{ quote: string; author: string; role: string }>;
      metrics: Array<{ label: string; suffix?: string; value: number }>;
    };
  };
  legal: {
    terms: {
      trigger: string;
      title: string;
      description: string;
      principlesTitle: string;
      principles: string[];
      assistanceTitle: string;
      assistance: string;
      close: string;
    };
    privacy: {
      trigger: string;
      title: string;
      description: string;
      commitmentsTitle: string;
      commitments: string[];
      contactTitle: string;
      contact: string;
      close: string;
    };
  };
  feedback: {
    trigger: string;
    title: string;
    description: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    categoryLabel: string;
    categoryPlaceholder: string;
    categories: string[];
    questionLabel: string;
    questionPlaceholder: string;
    close: string;
    submit: string;
  };
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import("./fr").then((module) => module.dictionary),
  en: () => import("./en").then((module) => module.dictionary),
  ja: () => import("./ja").then((module) => module.dictionary),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]?.() ?? dictionaries.fr();
}
