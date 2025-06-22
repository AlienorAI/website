"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  CheckCircle,
  CircleArrowUp,
  Code,
  Database,
  FileText,
  Globe,
  HelpCircle,
  MessageSquare,
  Search,
  Settings,
  Shield,
  SparklesIcon,
  UserIcon,
} from "lucide-react";

interface DashboardMessage {
  question: string;
  answer: string;
  author: string;
  meta: string;
  source: string;
}

export function InteractiveDashboard() {
  // Hardcoded French translations from the provided JSON
  const dashboardTitle = "Chat ArchiBot";
  const dashboardUsefulAnswer = "Réponse utile";
  const dashboardTabs = {
    onboarding: "Onboarding",
    deliveries: "Livraisons",
  };
  const dashboardInputPlaceholder = "Posez votre question sur vos documents...";

  const dashboardMessages: DashboardMessage[] = [
    {
      question:
        "Bonjour ! Je viens d'être embauché comme développeur senior et j'aimerais connaître en détail notre politique de télétravail. Combien de jours par semaine puis-je travailler à distance ? Y a-t-il des restrictions selon les projets ? Et comment dois-je faire ma demande auprès de mon manager ?",
      answer:
        "Félicitations pour votre nouveau poste !\n\nLes employés peuvent télétravailler jusqu'à 3 jours par semaine avec l'approbation du manager.\nPour les développeurs seniors, cette flexibilité est généralement accordée sans restriction particulière, sauf pour les projets critiques nécessitant une collaboration intensive en présentiel.\n\nPour faire votre demande :\n- Remplissez le formulaire de demande de télétravail disponible sur l'intranet.\n- Planifiez un entretien avec votre manager pour discuter de votre planning.\n- Une fois approuvé, vous recevrez un accord écrit.\n- Assurez-vous de respecter les créneaux de disponibilité définis avec votre équipe.\n\nN'hésitez pas à contacter les RH si vous avez des questions sur l'organisation de votre télétravail.",
      author: "Sarah - Développement",
      meta: "Il y a 2 min",
      source: "Manuel RH Section 4.2 - Politique de télétravail",
    },
    {
      question:
        "Urgent ! Un client important nous demande des informations sur nos délais de livraison pour la gamme Premium en Europe. Il a besoin de savoir les coûts de livraison express, les options d'assurance, et s'il y a des restrictions douanières pour certains pays. Pouvez-vous m'aider rapidement ?",
      answer:
        "Voici les informations complètes pour votre client sur la gamme Premium :\n\nNos délais de livraison sont de 24-48h pour la France métropolitaine et de 3-5 jours ouvrés pour l'Union Européenne. La livraison express est disponible sous 24h en France (+15€) et sous 48h en Europe (+25€). L'assurance est incluse jusqu'à 500€, avec une extension possible jusqu'à 5000€ (+2% de la valeur).\n\nPour traiter la commande de votre client :\n- Vérifiez la destination exacte et le mode de livraison souhaité\n- Consultez les options d'assurance selon la valeur totale du colis\n- Pour la Suisse et pays hors UE, anticipez les formalités douanières\n- Confirmez la disponibilité des produits Premium en stock avant validation\n\nN'hésitez pas à proposer notre service de suivi premium inclus pour les commandes importantes.",
      author: "Marc - Commercial",
      meta: "Il y a 5 min",
      source: "Guide Commercial 2024 - Section Livraisons Internationales",
    },
  ];

  // Function to generate tab title and icon based on conversation content
  function getTabInfo(message: DashboardMessage, index: number) {
    // Specific titles for known conversations
    if (index === 0) {
      return {
        icon: UserIcon,
        title: dashboardTabs.onboarding,
      };
    }

    if (index === 1) {
      return {
        icon: Globe,
        title: dashboardTabs.deliveries,
      };
    }

    // Fallback for additional conversations
    const question = message.question.toLowerCase();
    const answer = message.answer.toLowerCase();
    const content = `${question} ${answer}`;

    // Keywords to icon/title mapping
    const patterns = [
      {
        keywords: ["document", "fichier", "pdf", "file"],
        icon: FileText,
        title: "Documents",
      },
      {
        keywords: ["recherche", "search", "trouver", "find"],
        icon: Search,
        title: "Recherche",
      },
      {
        keywords: ["code", "programmation", "développement", "api"],
        icon: Code,
        title: "Code",
      },
      {
        keywords: ["configuration", "config", "paramètre", "setting"],
        icon: Settings,
        title: "Config",
      },
      {
        keywords: ["base de données", "database", "sql", "données"],
        icon: Database,
        title: "Base de données",
      },
      {
        keywords: ["sécurité", "security", "authentification", "auth"],
        icon: Shield,
        title: "Sécurité",
      },
      {
        keywords: ["web", "site", "url", "http", "internet"],
        icon: Globe,
        title: "Web",
      },
      {
        keywords: ["aide", "help", "support", "assistance"],
        icon: HelpCircle,
        title: "Aide",
      },
      {
        keywords: ["guide", "tutorial", "documentation", "manuel"],
        icon: BookOpen,
        title: "Guide",
      },
    ];

    // Find matching pattern
    for (const pattern of patterns) {
      if (pattern.keywords.some((keyword) => content.includes(keyword))) {
        return { icon: pattern.icon, title: pattern.title };
      }
    }

    // Default fallback
    return {
      icon: MessageSquare,
      title: `Discussion ${index + 1}`,
    };
  }

  // Utility to render answer with lists and paragraphs
  function renderAnswer(answer: string) {
    const lines = answer.split(/\r?\n/);
    const blocks: React.ReactNode[] = [];
    let listItems: string[] = [];
    let paragraph: string[] = [];

    function flushParagraph() {
      if (paragraph.length > 0) {
        blocks.push(
          <p className="mb-2" key={blocks.length}>
            {paragraph.join(" ")}
          </p>
        );
        paragraph = [];
      }
    }
    function flushList() {
      if (listItems.length > 0) {
        blocks.push(
          <ul className="list-disc list-inside ml-4 mb-2" key={blocks.length}>
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
      }
    }

    for (const line of lines) {
      if (line.trim().startsWith("- ")) {
        flushParagraph();
        listItems.push(line.trim().slice(2));
      } else if (line.trim() === "") {
        flushParagraph();
        flushList();
      } else {
        flushList();
        paragraph.push(line.trim());
      }
    }
    flushParagraph();
    flushList();
    return blocks;
  }

  const renderConversation = (messageIndex: number) => (
    <div className="space-y-3 sm:space-y-4">
      <div className="rounded-xl bg-background/80 p-3 sm:p-4 border border-border/75">
        <div className="flex items-start space-x-2 sm:space-x-3">
          <div className="bg-primary/10 p-1.5 sm:p-2 rounded-full">
            <UserIcon className="size-3 sm:size-4 text-primary dark:text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm text-foreground break-words">
              {dashboardMessages[messageIndex].question}
            </p>
            <span className="text-xs text-muted-foreground mt-1 block">
              {dashboardMessages[messageIndex].author} •{" "}
              {dashboardMessages[messageIndex].meta}
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-primary/15 bg-blue-50 dark:bg-blue-950 p-3 sm:p-4">
        <div className="flex items-start space-x-2 sm:space-x-3">
          <div className="bg-primary p-1.5 sm:p-2 rounded-full">
            <SparklesIcon className="h-3 w-3 sm:h-4 sm:w-4 text-primary-foreground dark:text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs sm:text-sm text-foreground mb-2 sm:mb-3 break-words">
              {renderAnswer(dashboardMessages[messageIndex].answer)}
            </div>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-xs font-medium break-words text-muted-foreground">
                Source: {dashboardMessages[messageIndex].source}
              </span>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                <span className="text-xs text-muted-foreground">
                  {dashboardUsefulAnswer}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Get tab info for both conversations
  const tab1Info = getTabInfo(dashboardMessages[0], 0);
  const tab2Info = getTabInfo(dashboardMessages[1], 1);

  return (
    <div className="relative max-w-4xl mx-auto px-2 sm:px-0">
      <div className="bg-background/95 backdrop-blur-sm rounded-xl shadow-2xl border border-border/75 p-3 sm:p-6 bg-gradient-to-b from-background to-muted/20">
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-sm text-muted-foreground">
            {dashboardTitle}
          </span>
        </div>

        <Tabs defaultValue="conversation1" className="w-full px-3 sm:px-8">
          <TabsList className="w-full bg-muted/50 rounded-full">
            <TabsTrigger className="w-full rounded-full" value="conversation1">
              <div className="flex items-center gap-1.5">
                <tab1Info.icon className="h-4 w-4" />
                <span className="text-xs sm:text-sm">{tab1Info.title}</span>
              </div>
            </TabsTrigger>
            <TabsTrigger className="w-full rounded-full" value="conversation2">
              <div className="flex items-center gap-1.5">
                <tab2Info.icon className="h-4 w-4" />
                <span className="text-xs sm:text-sm">{tab2Info.title}</span>
              </div>
            </TabsTrigger>
          </TabsList>

          <div className="bg-muted/30 rounded-lg p-3 sm:p-8 text-left space-y-4 sm:space-y-6 mt-4">
            <TabsContent value="conversation1" className="mt-0">
              {renderConversation(0)}
            </TabsContent>

            <TabsContent value="conversation2" className="mt-0">
              {renderConversation(1)}
            </TabsContent>

            {/* Input area */}
            <div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-border/75">
              <div className="flex-1 rounded-lg bg-background border border-border/75 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-muted-foreground shadow-sm">
                {dashboardInputPlaceholder}
              </div>
              <div className="w-10 sm:w-12 flex items-center justify-center bg-primary p-2.5 sm:p-3 rounded-full shadow-sm hover:bg-primary/90 transition-colors">
                <CircleArrowUp className="size-3 sm:size-4 text-primary-foreground dark:text-white" />
              </div>
            </div>
          </div>
        </Tabs>
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-border/20 pointer-events-none"></div>
      </div>
    </div>
  );
}
