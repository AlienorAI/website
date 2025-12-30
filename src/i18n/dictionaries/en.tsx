import type { Dictionary } from "./index";

export const dictionary: Dictionary = {
  metadata: {
    defaultTitle: "Aliénor AI - The AI that knows your company",
    titleTemplate: "%s - Aliénor AI",
    description:
      "The AI assistant built into the heart of your company. It understands your documents, tools, and teams to answer every question securely.",
  },
  localeSwitcher: {
    label: "Language",
    languages: {
      fr: "Français",
      en: "English",
      ja: "日本語",
    },
  },
  navbar: {
    brand: "Aliénor AI",
    home: "Home",
    links: [
      { href: "/company", label: "Our mission" },
      { href: "/pricing", label: "Pricing" },
      { href: "/blog", label: "Blog" },
    ],
    login: "Log in",
  },
  footer: {
    cta: {
      title: "Boost your team's productivity",
      lead: "A virtual in-house expert, available 24/7 to instantly answer support, HR, sales, or product questions without mobilizing your teams.",
      helper:
        "Request demo access and test with your own sources. Your data stays confidential and is deleted at the end of the trial.",
      button: "Book a demo",
    },
    description:
      "The AI assistant embedded at the heart of your company. It understands your documents, tools, and teams to answer every question securely.",
    sitemap: {
      product: "Product",
      pricing: "Pricing",
      blog: "Blog",
      company: "Company",
      mission: "Mission",
      careers: "Careers",
      support: "Support",
      helpCenter: "Help center",
      faq: "FAQ",
      legal: "Legal",
      terms: "Terms of use",
      privacy: "Privacy policy",
      careersDisabledLabel: "Careers",
    },
  },
  home: {
    hero: {
      title: "All your internal knowledge",
      highlight: "in seconds",
      description: (
        <>
          Centralize and access all your internal data
          <br className={"xs:block hidden"} /> with{" "}
          <span className="xs:font-medium">
            sovereign, secure AI
            <br className={"xs:hidden block"} />
            <span className={"max-xs:font-medium"}>built for business.</span>
          </span>
        </>
      ),
      bullets: [
        "Advanced security",
        "100% France-based hosting",
        "SecNumCloud qualification",
      ],
      badges: ["Ready to use", "Live in 24h", "Immediate ROI"],
      primaryCta: "See it in action",
      secondaryCta: "View pricing",
    },
    integrationsHeading: "Built to plug into your workplace",
    bentoCards: [
      {
        eyebrow: "Networking",
        title: "A chatbot that truly knows your company",
        description:
          "Quickly find the information you need, whether it’s in a file, meeting notes, or a line-of-business tool.",
      },
      {
        eyebrow: "Integrations",
        title: "Connected to your tools",
        description:
          "Easily connects to your everyday stack: email, drives, CRM, project management, and more.",
      },
      {
        eyebrow: "Meetings",
        title: "Our custom engine",
        description:
          "AI built to process and understand internal data with accuracy and context.",
      },
      {
        eyebrow: "Engagement",
        title: "Pre-built AI Agents",
        badgeSoon: "Coming soon",
        description:
          "Ready-to-use AI assistants to automate HR, internal requests, file updates, notifications—working in the background without complex setup.",
      },
    ],
  },
  testimonials: {
    heading: "Security and sovereignty in every answer",
    items: [
      {
        icon: "globe",
        name: "Sovereignty",
        title: "100% French hosting",
        quote:
          "Aliénor runs on servers located in Paris. Your data never leaves French territory.",
      },
      {
        icon: "scale",
        name: "Compliance",
        title: "Strict European standards",
        quote:
          "Aliénor follows the strictest security norms (ISO, SOC, SecNumCloud) and applies GDPR beyond legal requirements.",
      },
      {
        icon: "lock",
        name: "Confidentiality",
        title: "Reinforced protection",
        quote:
          "Your data is protected end-to-end, in transit and at rest, using industry-best security practices.",
      },
      {
        icon: "eye",
        name: "Transparency",
        title: "No hidden usage",
        quote:
          "We never use your data to train external models or for any commercial purposes.",
      },
      {
        icon: "adjustments",
        name: "Control",
        title: "You stay in charge",
        quote:
          "You decide what gets shared and which integrations are allowed—everything stays under your control.",
      },
      {
        icon: "check",
        name: "Reliability",
        title: "Always available",
        quote:
          "Our infrastructure is designed to stay available and resilient, even during major incidents.",
      },
    ],
  },
  useCases: {
    heading: "See how Aliénor helps every day",
    callout: {
      text: "Free up time and boost your company’s productivity with Aliénor.",
      ctaLabel: "Our mission",
      href: "/company",
    },
    items: [
      {
        img: "/testimonials/commercial.webp",
        name: "Prepare a customer meeting",
        title: "Sales use case",
        quote:
          "Ask the AI for the key points from a spec sheet or CRM and arrive prepared in seconds.",
      },
      {
        img: "/testimonials/rh.webp",
        name: "Access internal policies",
        title: "HR use case",
        quote:
          "Instantly find the right HR policy and answer employee questions without wasting time.",
      },
      {
        img: "/testimonials/amy-chase.jpg",
        name: "Avoid duplicates and errors",
        title: "Finance / Leadership",
        quote:
          "Open the latest version of a financial document: answers are verified and sourced to prevent mistakes.",
      },
      {
        img: "/testimonials/support.webp",
        name: "Speed up ticket resolution",
        title: "Support use case",
        quote:
          "Save time: the AI finds the right answer in the knowledge base and helps you solve tickets faster.",
      },
      {
        img: "/testimonials/it.webp",
        name: "Save time on technical info",
        title: "Technical / IT",
        quote:
          "Access IT guidelines and internal procedures in one click, without digging through docs for hours.",
      },
    ],
  },
  pricing: {
    metadata: {
      title: "Pricing",
      description:
        "Companies of all sizes use Aliénor to access internal information faster. Pick the plan that fits and get started today.",
    },
    header: {
      title: "Pricing that adapts to you.",
      lead: "Three plans built for security and performance. Start your free trial today.",
      ribbon: "Ready to use • Live in 24h • Immediate ROI",
    },
    popularBadge: "Most popular",
    priceSuffix: "/month",
    tiers: [
      {
        name: "Aliénor",
        slug: "alienor",
        description:
          "Ideal for founders who want to add AI to their daily workflows.",
        priceMonthly: 149,
        href: "/pricing#book",
        highlights: [
          { description: "Up to 3 team members" },
          { description: "Up to 10 active documents" },
          { description: "1,000 messages per month" },
          { description: "100% France-based hosting" },
          { description: "No data re-use" },
        ],
        features: [
          { section: "Features", name: "Team members", value: 3 },
          { section: "Features", name: "Active documents", value: 10 },
          { section: "Features", name: "Messages per month", value: 1000 },
          { section: "Features", name: "Autonomous AI agents", value: false },
          { section: "Security", name: "100% France-based hosting", value: true },
          { section: "Security", name: "No data re-use", value: true },
          {
            section: "Security",
            name: "AI deployed on dedicated server",
            value: false,
          },
          { section: "Support", name: "Email support", value: true },
          { section: "Support", name: "Phone support", value: false },
          {
            section: "Support",
            name: "Dedicated account manager",
            value: false,
          },
        ],
      },
      {
        name: "Aliénor Pro",
        slug: "pro",
        popular: true,
        description:
          "Built for teams that need performance and security without compromise.",
        priceMonthly: 249,
        href: "/pricing#book",
        highlights: [
          { description: "Unlimited members" },
          { description: "Unlimited documents*" },
          { description: "Unlimited messages*" },
          { description: "Autonomous AI agents" },
          { description: "100% France-based hosting" },
          { description: "No data re-use" },
        ],
        features: [
          { section: "Features", name: "Team members", value: "Unlimited" },
          { section: "Features", name: "Active documents", value: "Unlimited*" },
          { section: "Features", name: "Messages per month", value: "Unlimited*" },
          { section: "Security", name: "100% France-based hosting", value: true },
          { section: "Features", name: "Autonomous AI agents", value: true },
          { section: "Security", name: "No data re-use", value: true },
          {
            section: "Security",
            name: "AI deployed on dedicated server",
            value: false,
          },
          { section: "Support", name: "Email support", value: true },
          { section: "Support", name: "Phone support", value: true },
          {
            section: "Support",
            name: "Dedicated account manager",
            value: false,
          },
        ],
      },
      {
        name: "Aliénor Business",
        slug: "business",
        description:
          "Built for sensitive industries with dedicated infrastructure.",
        priceMonthly: 349,
        href: "/pricing#book",
        highlights: [
          { description: "Unlimited members" },
          { description: "Unlimited documents*" },
          { description: "Unlimited messages*" },
          { description: "Autonomous AI agents" },
          { description: "100% France-based hosting" },
          { description: "No data re-use" },
          { description: "Dedicated infrastructure" },
        ],
        features: [
          { section: "Features", name: "Team members", value: "Unlimited" },
          { section: "Features", name: "Active documents", value: "Unlimited*" },
          { section: "Features", name: "Messages per month", value: "Unlimited*" },
          { section: "Features", name: "Autonomous AI agents", value: true },
          { section: "Security", name: "100% France-based hosting", value: true },
          { section: "Security", name: "No data re-use", value: true },
          {
            section: "Security",
            name: "AI deployed on dedicated server",
            value: true,
          },
          { section: "Support", name: "Email support", value: true },
          { section: "Support", name: "Phone support", value: true },
          {
            section: "Support",
            name: "Dedicated account manager",
            value: true,
          },
        ],
      },
    ],
    actions: { cta: "Try the product", benefitsTitle: "You get:" },
    table: {
      caption: "Plan comparison",
      included: "Included in",
      notIncluded: "Not included in",
    },
    testimonial: {
      title: "Questions? We’re here.",
      description:
        "Our team can help with plan selection, pricing details, and how we operate.",
      contact: "Contact us",
      demo: "Schedule a demo",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Where is my data hosted?",
          answer: (
            <>
              All of your data—PDFs, extracted content, vector DB, database, and
              cache—is hosted exclusively in France, in SecNumCloud-certified
              data centers located in Paris.
              <br />
              <br />
              The infrastructure is GDPR-compliant, and no data leaves the
              European Union.
              <br />
              <br />
              Processing runs on private, secure, 100% French servers.
            </>
          ),
        },
        {
          question:
            "Is my data used to train any artificial intelligence model?",
          answer:
            "No.\n\nYour data is never used to train or improve an AI model, internally or by any third party.\n\nModels used in our solution (Mistral AI or OpenAI) are configured not to store exchanges or reuse the data you send.",
        },
        {
          question: "Can the AI model see all of my documents?",
          answer:
            "No.\n\nWhen someone asks a question, only a targeted selection of relevant snippets is sent to the model to generate an answer.\n\nThis greatly limits exposure while keeping answers accurate.",
        },
        {
          question: "Who can access my documents?",
          answer:
            "Only your company’s authorized users, authenticated securely, can access the interface and documents.\n\nNo third parties, service providers, or even our team access the content without your explicit consent.",
        },
        {
          question: "Can we delete all data if we stop?",
          answer:
            "Yes.\n\nYou can delete all of your data at any time: documents, extracted text, vector indexes, search history, and more.\n\nA full deletion procedure is available on request, with written confirmation.",
        },
        {
          question:
            "Is there an option with zero communication to external services?",
          answer:
            "Yes.\n\nWith our Business plan, all data is processed on a dedicated private server in France without using external APIs from OpenAI or Mistral.\n\nThis ensures high confidentiality for sensitive and regulated industries.",
        },
        {
          question: "Which models are used to answer questions?",
          answer:
            "OpenAI with our Zero Footprint policy: your data is never stored or used to train models. It’s deleted immediately after processing and hosted exclusively in France.\n\nMistral AI, a performant French model, runs either via API or locally on GPU (Business plan).",
        },
        {
          question: "Is the solution GDPR compliant?",
          answer:
            "Yes, the solution is designed to be fully GDPR compliant:\n• Hosting in France\n• No data usage for commercial or training purposes\n• Right to erasure\n• No user profiling\n• Logging and oversight available on request",
        },
      ],
    },
  },
  blog: {
    metadata: {
      title: "Blog",
      description:
        "Stay informed about product updates, company news, and tips to improve your day-to-day performance.",
    },
    heroTitle: "News and updates from Aliénor.",
    heroLead:
      "Stay up to date on product evolution, company news, and tips to work more efficiently every day.",
    featuredTitle: "Featured",
    categories: { all: "All categories" },
    rss: "RSS feed",
    empty: "Articles coming soon.",
    readMore: "Read more",
    previous: "Previous",
    next: "Next",
  },
  blogPost: { back: "Back to blog" },
  company: {
    metadata: {
      title: "Company",
      description:
        "Our mission is to transform knowledge management with secure AI hosted in France.",
    },
    header: {
      title: "Knowledge that fuels growth.",
      lead: "We’re on a mission to boost organizational performance by unlocking internal knowledge while prioritizing security and sovereignty.",
      missionTitle: "Our mission",
      missionBody: [
        "At Aliénor, our mission is to deliver a high-performance French solution with a single goal: provide fast, intelligent access to all of a company’s internal information. Documents, meeting notes, databases, conversations—Aliénor finds, understands, and contextualizes each useful element to save teams time and speed decisions.",
        "Built and hosted in France, Aliénor guarantees full privacy and data sovereignty. We combine technical performance with strict confidentiality to give companies a reliable internal search tool that meets the highest standards. Our ambition: turn knowledge into a competitive advantage without ever compromising trust.",
      ],
      cta: "View pricing",
      quotes: [
        {
          quote: "“We instantly find key information without wasting time.”",
          author: "Claire Dupont",
          role: "Chief Operating Officer",
        },
        {
          quote:
            "“Data sovereignty and security were essential for us. Aliénor gives us that guarantee.”",
          author: "Marc Lefèvre",
          role: "Head of IT",
        },
      ],
      metrics: [
        { label: "Average search time", value: 3, suffix: "s" },
        { label: "Indexed documents", value: 1, suffix: "M+" },
        { label: "Data hosted in France", value: 100, suffix: "%" },
        { label: "Average time saved", value: 60, suffix: "%" },
      ],
    },
  },
  legal: {
    terms: {
      trigger: "Terms of use",
      title: "Terms of use",
      description:
        "Transparent service usage, shared responsibilities, and good practices.",
      principlesTitle: "Key principles",
      principles: [
        "Fair, non-abusive use in line with regulations.",
        "Respect for intellectual property and third-party rights.",
        "No illegal, malicious, discriminatory, or obscene content.",
        "Best-effort availability: we do our utmost to ensure service quality.",
        "Termination possible in case of repeated policy breaches.",
      ],
      assistanceTitle: "Support",
      assistance:
        "For any question or dispute, contact our support team. We respond quickly and focus on pragmatic solutions.",
      close: "Close",
    },
    privacy: {
      trigger: "Privacy policy",
      title: "Privacy policy",
      description:
        "We put confidentiality, security, and control of your data first.",
      commitmentsTitle: "Key commitments",
      commitments: [
        "Data minimization: we only collect what’s necessary.",
        "Encryption in transit and at rest when applicable.",
        "Control and transparency: access, rectification, and deletion on request.",
        "No sale of data; sharing limited to essential vendors under contract.",
        "Limited retention: deletion or anonymization with clear timelines.",
      ],
      contactTitle: "Privacy contact",
      contact:
        "To exercise your rights or ask a question, contact our team. We respond as quickly as possible.",
      close: "Close",
    },
  },
  feedback: {
    trigger: "Help center",
    title: "Help center",
    description:
      "Have a question about the product? Pick a category, add a subject, and describe your request. Our team will reply quickly.",
    subjectLabel: "Subject",
    subjectPlaceholder: "Title of your question",
    categoryLabel: "Category",
    categoryPlaceholder: "Select a category",
    categories: [
      "Pricing",
      "Product",
      "Features",
      "Billing",
      "Account & security",
      "Integrations",
      "Data & privacy",
      "Other",
    ],
    questionLabel: "Your question",
    questionPlaceholder:
      "Describe your question in detail (context, steps, screenshots, suggestions, etc.)",
    close: "Close",
    submit: "Send request",
  },
};
