import type { Dictionary } from "./index";

export const dictionary: Dictionary = {
  metadata: {
    defaultTitle: "Aliénor AI - L’IA qui connaît votre entreprise",
    titleTemplate: "%s - Aliénor AI",
    description:
      "L'assistant IA intégré au cœur de votre entreprise, qui comprend vos documents, vos outils et vos équipes, pour répondre à chaque question, en toute sécurité.",
  },
  localeSwitcher: {
    label: "Langue",
    languages: {
      fr: "Français",
      en: "English",
      ja: "日本語",
    },
  },
  navbar: {
    brand: "Aliénor AI",
    home: "Accueil",
    links: [
      { href: "/company", label: "Notre mission" },
      { href: "/pricing", label: "Tarifs" },
      { href: "/blog", label: "Blog" },
    ],
    login: "Se connecter",
  },
  footer: {
    cta: {
      title: "Boostez la productivité de vos équipes",
      lead: "Un expert interne virtuel, disponible 24/7, pour répondre instantanément aux questions support, RH, sales ou produit, sans mobiliser vos équipes.",
      helper:
        "Accès de démonstration sur demande, testez avec vos propres sources. Vos données restent confidentielles et sont supprimées à la fin de l’essai.",
      button: "Planifier une démo",
    },
    description:
      "L'assistant IA intégré au cœur de votre entreprise, qui comprend vos documents, vos outils et vos équipes, pour répondre à chaque question, en toute sécurité.",
    sitemap: {
      product: "Produit",
      pricing: "Tarifs",
      blog: "Blog",
      company: "Entreprise",
      mission: "Mission",
      careers: "Carrières",
      support: "Support",
      helpCenter: "Centre d’aide",
      faq: "FAQ",
      legal: "Mentions légales",
      terms: "Conditions d’utilisation",
      privacy: "Politique de confidentialité",
      careersDisabledLabel: "Carrières",
    },
  },
  home: {
    hero: {
      title: "Toute l’information interne",
      highlight: "en quelques secondes",
      description: (
        <>
          Centralisez et accédez à toutes vos données internes
          <br className={"xs:block hidden"} /> avec{" "}
          <span className="xs:font-medium">
            une IA <br className={"xs:hidden block"} />
            <span className={"max-xs:font-medium"}>
              souveraine et sécurisée
            </span>
            .
          </span>
        </>
      ),
      bullets: [
        "Sécurité avancée",
        "Hébergement 100% France",
        "Qualification SecNumCloud",
      ],
      badges: ["Prêt à l'emploi", "Mise en place en 24h", "ROI immédiat"],
      primaryCta: "Voir en action",
      secondaryCta: "Voir les tarifs",
    },
    integrationsHeading: "Conçue pour s'intégrer à votre environnement professionnel",
    bentoCards: [
      {
        eyebrow: "Networking",
        title: "Un Chatbot qui connait parfaitement votre entreprise",
        description:
          "Permet de retrouver rapidement les informations dont vous avez besoin, qu’elles soient dans un fichier, un compte rendu ou un outil métier.",
      },
      {
        eyebrow: "Integrations",
        title: "Connectée à vos outils",
        description:
          "Se connecte facilement à vos outils du quotidien : messagerie, drive, CRM, gestion de projets, etc.",
      },
      {
        eyebrow: "Meetings",
        title: "Notre moteur sur-mesure",
        description:
          "Intelligence artificielle spécialement développée pour traiter et comprendre les données internes.",
      },
      {
        eyebrow: "Engagement",
        title: "Des Agents IA prêts à l'emploi",
        badgeSoon: "Bientôt disponible",
        description:
          "Des assistants IA prêts à automatiser vos tâches, RH, demandes internes, mise à jour de fichiers, notifications, en travaillant en arrière-plan, sans configuration complexe.",
      },
    ],
  },
  testimonials: {
    heading: "Sécurité et souveraineté au cœur de chaque réponse",
    items: [
      {
        icon: "globe",
        name: "Souveraineté",
        title: "Hébergement 100% français",
        quote:
          "Aliénor est déployé sur des serveurs situés à Paris. Vos données ne quittent jamais le territoire français.",
      },
      {
        icon: "scale",
        name: "Conformité",
        title: "Cadre européen exigeant",
        quote:
          "Aliénor s’appuie sur les normes de sécurité les plus strictes (ISO, SOC, SecNumCloud) et applique le RGPD au-delà des obligations légales.",
      },
      {
        icon: "lock",
        name: "Confidentialité",
        title: "Protection renforcée",
        quote:
          "Vos données sont protégées à chaque étape, qu’elles circulent ou qu’elles soient stockées, grâce aux meilleures pratiques de sécurité.",
      },
      {
        icon: "eye",
        name: "Transparence",
        title: "Aucune exploitation cachée",
        quote:
          "Nous n’utilisons jamais vos données pour entraîner des modèles externes ni à des fins commerciales.",
      },
      {
        icon: "adjustments",
        name: "Contrôle",
        title: "Maîtrise par votre entreprise",
        quote:
          "Vous décidez quelles données sont partagées et quelles intégrations sont autorisées, tout reste sous votre contrôle.",
      },
      {
        icon: "check",
        name: "Fiabilité",
        title: "Disponibilité continue",
        quote:
          "Notre infrastructure est conçue pour rester disponible et résiliente, même en cas d’incident majeur.",
      },
    ],
  },
  useCases: {
    heading: "Découvrez comment Aliénor vous aide au quotidien",
    callout: {
      text: "Libérez du temps et augmentez la productivité de votre entreprise grâce à Aliénor.",
      ctaLabel: "Notre mission",
      href: "/company",
    },
    items: [
      {
        img: "/testimonials/commercial.webp",
        name: "Préparer un rendez-vous client",
        title: "Application Commerciale",
        quote:
          "Demandez à l’IA les points clés d’une fiche technique ou d’un CRM, et arrivez préparé en quelques secondes. ",
      },
      {
        img: "/testimonials/rh.webp",
        name: "Accéder aux politiques internes",
        title: "Application RH",
        quote:
          "Retrouvez instantanément la bonne politique RH et répondez aux questions des collaborateurs sans perdre de temps.",
      },
      {
        img: "/testimonials/amy-chase.jpg",
        name: "Éviter les doublons et erreurs",
        title: "Application Finance / Direction",
        quote:
          "Accédez à la dernière version d’un document financier : les réponses sont vérifiées et sourcées pour éviter les erreurs.",
      },
      {
        img: "/testimonials/support.webp",
        name: "Accélérer la résolution des tickets",
        title: "Application Support",
        quote:
          "Gagnez du temps : l’IA retrouve la bonne réponse dans la base de connaissances et vous aide à résoudre les tickets plus vite.",
      },
      {
        img: "/testimonials/it.webp",
        name: "Gagner du temps sur les infos techniques",
        title: "Application Technique / IT",
        quote:
          "Accédez en un clic aux directives IT et procédures internes, sans passer des heures dans la documentation.",
      },
    ],
  },
  pricing: {
    metadata: {
      title: "Tarifs",
      description:
        "Des entreprises de toutes tailles utilisent Aliénor pour accéder plus rapidement à leurs informations internes. Choisissez l’offre qui vous convient et commencez dès aujourd’hui.",
    },
    header: {
      title: "Une tarification qui s’adapte à vos besoins.",
      lead: "Trois formules conçues pour répondre à vos besoins de sécurité et de performance. Commencez votre essai gratuit dès aujourd'hui.",
      ribbon: "Prêt à l'emploi • Mise en place en 24h • ROI immédiat",
    },
    popularBadge: "Le plus populaire",
    priceSuffix: "/mois",
    tiers: [
      {
        name: "Aliénor",
        slug: "alienor",
        description:
          "Idéal pour les entrepreneurs qui souhaitent intégrer l'IA à leur quotidien professionnel.",
        priceMonthly: 149,
        href: "/pricing#book",
        highlights: [
          { description: "Jusqu’à 3 membres dans l’équipe" },
          { description: "Jusqu’à 10 documents actifs" },
          { description: "1000 messages par mois" },
          { description: "Hébergement 100 % en France" },
          { description: "Aucune réutilisation des données" },
        ],
        features: [
          { section: "Features", name: "Membres dans l’équipe", value: 3 },
          { section: "Features", name: "Documents actifs", value: 10 },
          { section: "Features", name: "Messages par mois", value: 1000 },
          { section: "Features", name: "Agents IA autonomes", value: false },
          { section: "Sécurité", name: "Hébergement 100 % en France", value: true },
          {
            section: "Sécurité",
            name: "Aucune réutilisation des données",
            value: true,
          },
          {
            section: "Sécurité",
            name: "IA déployée sur serveur dédié",
            value: false,
          },
          { section: "Support", name: "Support par email", value: true },
          { section: "Support", name: "Support téléphonique ", value: false },
          {
            section: "Support",
            name: "Gestionnaire de compte dédié",
            value: false,
          },
        ],
      },
      {
        name: "Aliénor Pro",
        slug: "pro",
        popular: true,
        description:
          "Conçu pour les entreprises qui recherchent performance et sécurité sans compromis.",
        priceMonthly: 249,
        href: "/pricing#book",
        highlights: [
          { description: "Membres illimités" },
          { description: "Documents illimités*" },
          { description: "Messages illimités*" },
          { description: "Agents IA autonomes" },
          { description: "Hébergement 100 % en France" },
          { description: "Aucune réutilisation des données" },
        ],
        features: [
          {
            section: "Features",
            name: "Membres dans l’équipe",
            value: "Illimités",
          },
          { section: "Features", name: "Documents actifs", value: "Illimités*" },
          { section: "Features", name: "Messages par mois", value: "Illimités*" },
          { section: "Sécurité", name: "Hébergement 100 % en France", value: true },
          { section: "Features", name: "Agents IA autonomes", value: true },
          {
            section: "Sécurité",
            name: "Aucune réutilisation des données",
            value: true,
          },
          {
            section: "Sécurité",
            name: "IA déployée sur serveur dédié",
            value: false,
          },
          { section: "Support", name: "Support par email", value: true },
          { section: "Support", name: "Support téléphonique ", value: true },
          {
            section: "Support",
            name: "Gestionnaire de compte dédié",
            value: false,
          },
        ],
      },
      {
        name: "Aliénor Business",
        slug: "business",
        description:
          "Spécialement développé pour les secteurs sensibles avec une infrastructure dédiée.",
        priceMonthly: 349,
        href: "/pricing#book",
        highlights: [
          { description: "Membres illimités" },
          { description: "Documents illimités*" },
          { description: "Messages illimités*" },
          { description: "Agents IA autonomes" },
          { description: "Hébergement 100 % en France" },
          { description: "Aucune réutilisation des données" },
          { description: "Infrastructure dédiée" },
        ],
        features: [
          {
            section: "Features",
            name: "Membres dans l’équipe",
            value: "Illimités",
          },
          { section: "Features", name: "Documents actifs", value: "Illimités*" },
          { section: "Features", name: "Messages par mois", value: "Illimités*" },
          { section: "Features", name: "Agents IA autonomes", value: true },
          { section: "Sécurité", name: "Hébergement 100 % en France", value: true },
          {
            section: "Sécurité",
            name: "Aucune réutilisation des données",
            value: true,
          },
          {
            section: "Sécurité",
            name: "IA déployée sur serveur dédié",
            value: true,
          },
          { section: "Support", name: "Support par email", value: true },
          { section: "Support", name: "Support téléphonique ", value: true },
          { section: "Support", name: "Gestionnaire de compte dédié", value: true },
        ],
      },
    ],
    actions: { cta: "Essayer la solution", benefitsTitle: "Vous bénéficiez de :" },
    table: {
      caption: "Comparatif des offres",
      included: "Inclus dans",
      notIncluded: "Non inclus dans",
    },
    testimonial: {
      title: "Un doute ? Une question ?",
      description:
        "Notre équipe est disponible pour répondre à toutes vos interrogations sur nos offres, nos tarifs et notre fonctionnement.",
      contact: "Contactez-nous",
      demo: "Planifiez une démo",
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        {
          question: "Où sont hébergées mes données ?",
          answer: (
            <>
              Toutes vos données, fichiers PDF, contenus extraits, base
              vectorielle, base de données, cache, sont hébergées exclusivement
              en France, dans des centres de données certifiés SecNumCloud et
              localisés à Paris.
              <br />
              <br />
              L'infrastructure est conforme au RGPD, et aucune donnée ne
              transite en dehors de l'Union Européenne.
              <br />
              <br />
              L'ensemble du traitement est effectué sur des serveurs privés,
              sécurisés, et 100% français.
            </>
          ),
        },
        {
          question:
            "Mes données sont-elles utilisées pour entraîner une intelligence artificielle ?",
          answer:
            "Non.\n\nVos données ne sont jamais utilisées pour entraîner ou améliorer un modèle d'IA, que ce soit en interne ou par un fournisseur tiers.\n\nLes modèles utilisés dans notre solution (Mistral AI ou OpenAI) sont configurés pour ne conserver aucune trace des échanges et ne pas exploiter les données transmises.",
        },
        {
          question:
            "Le modèle d'intelligence artificielle peut-il voir l'intégralité de mes documents ?",
          answer:
            "Non.\n\nLorsqu'un utilisateur pose une question, seule une sélection ciblée de passages pertinents est transmise au modèle pour générer une réponse.\n\nCela limite fortement l'exposition de vos documents, tout en garantissant la pertinence des réponses.",
        },
        {
          question: "Qui a accès à mes documents ?",
          answer:
            "Seuls les utilisateurs de votre entreprise autorisés via une authentification sécurisée ont accès à l'interface et aux documents.\n\nAucun tiers, aucun prestataire technique, ni même notre équipe, n'accède aux contenus sans votre accord explicite.",
        },
        {
          question: "Peut-on supprimer toutes les données si l'on arrête ?",
          answer:
            "Oui.\n\nVous pouvez supprimer l'ensemble de vos données à tout moment : documents, textes extraits, index vectoriels, historiques de recherche, etc.\n\nUne procédure complète d'effacement est disponible sur demande, avec confirmation écrite.",
        },
        {
          question:
            "Existe-t-il une solution sans communication avec des services externes ?",
          answer:
            "Oui.\n\nAvec notre offre Business, toutes les données sont traitées sur un serveur privé dédié en France, sans faire appel aux API externes d'OpenAI ou Mistral.\n\nCela garantit un haut niveau de confidentialité, conforme aux exigences des secteurs sensibles et réglementés.",
        },
        {
          question: "Quels modèles sont utilisés pour répondre aux questions ?",
          answer:
            "OpenAI avec notre politique Empreinte Zéro : vos données ne sont jamais stockées ni utilisées pour entraîner les modèles. Suppression immédiate après traitement et hébergement exclusivement en France.\n\nMistral AI, modèle français performant, exécuté soit via API, soit en local sur GPU (offre Business).",
        },
        {
          question: "La solution est-elle conforme au RGPD ?",
          answer:
            "Oui, la solution est conçue pour être 100% conforme au RGPD :\n• Hébergement en France\n• Aucune utilisation des données à des fins commerciales ou d'entraînement\n• Droit à l'effacement\n• Pas de profilage utilisateur\n• Journalisation et supervision sur demande",
        },
      ],
    },
  },
  blog: {
    metadata: {
      title: "Blog",
      description:
        "Restez informé des nouveautés produit, des actualités de l’entreprise et de conseils pour améliorer vos performances au quotidien.",
    },
    heroTitle: "L’actualité et les nouveautés d’Aliénor.",
    heroLead:
      "Restez informé des évolutions du produit, des actualités de l’entreprise et des conseils pour gagner en efficacité au quotidien.",
    featuredTitle: "À la une",
    categories: { all: "Toutes les catégories" },
    rss: "Flux RSS",
    empty: "Articles en cours de création.",
    readMore: "Lire l’article",
    previous: "Précédent",
    next: "Suivant",
  },
  blogPost: { back: "Revenir au blog" },
  company: {
    metadata: {
      title: "Entreprise",
      description:
        "Nous avons pour mission de transformer la gestion des connaissances en entreprise grâce à une IA sécurisée et hébergée en France.",
    },
    header: {
      title: "La connaissance au service de la croissance.",
      lead: "Nous avons pour mission de transformer la performance des organisations en valorisant leur savoir interne tout en priorisant la sécurité et la souveraineté.",
      missionTitle: "Notre mission",
      missionBody: [
        "Chez Aliénor, notre mission est de proposer une solution française ultra-performante, conçue pour un objectif unique : offrir un accès rapide et intelligent à toute l’information interne d’une entreprise. Documents, comptes rendus, bases de données, échanges… Aliénor retrouve, comprend et met en contexte chaque élément utile pour faire gagner un temps précieux aux équipes et accélérer les décisions.",
        "Pensée et hébergée en France, Aliénor garantit le respect total de la vie privée et la souveraineté des données. Nous allions performance technologique et exigences de confidentialité pour offrir aux entreprises un outil de recherche interne fiable, sécurisé et conforme aux plus hauts standards. Notre ambition : faire de la connaissance un atout compétitif, sans jamais compromettre la confiance.",
      ],
      cta: "Voir les tarifs",
      quotes: [
        {
          quote: "“Nous retrouvons instantanément les informations clé sans perdre de temps.”",
          author: "Claire Dupont",
          role: "Directrice des Opérations",
        },
        {
          quote:
            "“La souveraineté et la sécurité des données étaient essentielles pour nous. Aliénor nous apporte cette garantie.”",
          author: "Marc Lefèvre",
          role: "Responsable IT",
        },
      ],
      metrics: [
        { label: "Temps de recherche moyen", value: 3, suffix: "s" },
        { label: "Documents indexés", value: 1, suffix: "M+" },
        { label: "Données hébergées en France", value: 100, suffix: "%" },
        { label: "Temps moyen économisé", value: 60, suffix: "%" },
      ],
    },
  },
  legal: {
    terms: {
      trigger: "Conditions d’utilisation",
      title: "Conditions d’utilisation",
      description:
        "Utilisation du service en toute transparence, responsabilités mutuelles et bonnes pratiques.",
      principlesTitle: "Principes clés",
      principles: [
        "Utilisation équitable, non abusive et conforme à la réglementation.",
        "Respect de la propriété intellectuelle et des droits des tiers.",
        "Interdiction des contenus illégaux, malveillants, discriminatoires ou obscènes.",
        "Disponibilité “best effort” : nous mettons tout en œuvre pour garantir la qualité du service.",
        "Résiliation possible en cas de non‑respect répété des règles d’utilisation.",
      ],
      assistanceTitle: "Assistance",
      assistance:
        "Pour toute question ou litige, contactez notre équipe support. Nous répondons rapidement et cherchons des solutions pragmatiques.",
      close: "Fermer",
    },
    privacy: {
      trigger: "Politique de confidentialité",
      title: "Politique de confidentialité",
      description:
        "Nous accordons la plus haute importance à la confidentialité, à la sécurité et au contrôle de vos données.",
      commitmentsTitle: "Engagements clés",
      commitments: [
        "Minimisation des données : nous collectons uniquement ce qui est nécessaire.",
        "Chiffrement des données en transit et au repos lorsque applicable.",
        "Contrôle et transparence : accès, rectification et suppression à votre demande.",
        "Aucune vente de données ; partage limité aux sous‑traitants essentiels, contractuellement encadrés.",
        "Rétention limitée : suppression ou anonymisation selon des durées clairement définies.",
      ],
      contactTitle: "Contact confidentialité",
      contact:
        "Pour exercer vos droits ou poser une question, contactez notre équipe. Nous répondons dans les meilleurs délais.",
      close: "Fermer",
    },
  },
  feedback: {
    trigger: "Centre d’aide",
    title: "Centre d’aide",
    description:
      "Vous avez une question sur le produit ? Choisissez une catégorie, indiquez un sujet et décrivez votre demande. Notre équipe vous répondra rapidement.",
    subjectLabel: "Sujet de votre question",
    subjectPlaceholder: "Titre de votre question",
    categoryLabel: "Catégorie",
    categoryPlaceholder: "Sélectionnez une catégorie",
    categories: [
      "Tarification",
      "Produit",
      "Fonctionnalités",
      "Facturation",
      "Compte et sécurité",
      "Intégrations",
      "Données et confidentialité",
      "Autre",
    ],
    questionLabel: "Votre question",
    questionPlaceholder:
      "Décrivez votre question en détail (contexte, étapes, captures, suggestions, etc.)",
    close: "Fermer",
    submit: "Envoyer la demande",
  },
};
