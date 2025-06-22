"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart,
  Check,
  ChevronRight,
  CircleCheckBigIcon,
  CreditCardIcon,
  FileText,
  HeartIcon,
  InfoIcon,
  Layers,
  Menu,
  MessageSquare,
  Moon,
  Shield,
  ShieldCheckIcon,
  SparklesIcon,
  Star,
  Sun,
  Users,
  WandSparklesIcon,
  X,
  Zap,
  ZapIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { InteractiveDashboard } from "@/components/interactive-dashboard";
import { Flag } from "@/components/flag";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: "Interrogez vos documents",
      description:
        "Uploadez vos fichiers internes et conversez naturellement avec vos documents grâce à notre IA avancée.",
      icon: <FileText className="size-5" />,
    },
    {
      title: "IA performante et sécurisée",
      description:
        "Propulsé par Mistral AI ou OpenAI via Azure France avec contrat de confidentialité renforcée pour un mix optimal de performance et sécurité.",
      icon: <ZapIcon className="size-5" />,
    },
    {
      title: "Hébergement 100% français",
      description: (
        <>
          Vos données restent en France avec nos partenaires cloud certifiés{" "}
          <Link
            href="https://cyber.gouv.fr/secnumcloud-pour-les-fournisseurs-de-services-cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            SecNumCloud
          </Link>{" "}
          pour une sécurité totale.
        </>
      ),
      icon: <Shield className="size-5" />,
    },
    {
      title: "Recherche sémantique avancée",
      description:
        "Notre technologie propriétaire trouve instantanément les informations pertinentes dans vos documents avec une précision inégalée.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Collaboration d'équipe",
      description:
        "Partagez les réponses utiles avec votre équipe pour traiter les sujets plus rapidement et faire avancer vos projets.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Infrastructure dédiée disponible",
      description:
        "Déploiement privé de Mistral sur GPU, sans dépendance à l'API pour les environnements ultra-sensibles.",
      icon: <Layers className="size-5" />,
    },
  ];

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 py-10 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
              <Image
                priority
                src="/logo.png"
                alt="ArchiBot"
                width={18}
                height={18}
              />
            </div>
            <span>ArchiBot</span>
          </div>

          <div className="hidden md:flex gap-4 items-center">
            <nav className="hidden md:flex gap-8">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Fonctionnalités
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Témoignages
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Tarifs
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                FAQ
              </Link>
            </nav>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {mounted && theme === "dark" ? (
                <Sun className="size-[18px]" />
              ) : (
                <Moon className="size-[18px]" />
              )}
              <span className="sr-only">Basculer le thème</span>
            </Button>
            <Button className="rounded-full">
              Essayez maintenant
              <ChevronRight className="size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {mounted && theme === "dark" ? (
                <Sun className="size-[18px]" />
              ) : (
                <Moon className="size-[18px]" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
              <span className="sr-only">Basculer le menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="#features"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fonctionnalités
              </Link>
              <Link
                href="#testimonials"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Témoignages
              </Link>
              <Link
                href="#pricing"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tarifs
              </Link>
              <Link
                href="#faq"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full overflow-hidden">
          <div className="container px-4 relative py-20 md:py-22">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <Badge
                className="mb-4 rounded-full w-fit mx-auto flex items-center px-4 gap-1.5 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                <ShieldCheckIcon className="size-4" />
                <span>Conforme RGPD</span>
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Ne cherchez plus,
                <span className="text-blue-600 block">
                  interrogez vos documents
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Le chatbot IA ultra-performant pour tous vos documents internes.
                Sécurité avancée, hébergement 100% en{" "}
                <Image
                  className="inline mr-1.5 mb-1"
                  priority
                  src="/rooster.png"
                  alt="Emoji de coq"
                  width={27}
                  height={27}
                />
                France.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base">
                  Essayez l'outil
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base"
                >
                  Demandez une démo
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Aucune carte de crédit</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Essai de 14 jours</span>
                </div>
                <div className="hidden sm:flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Annulez à tout moment</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <InteractiveDashboard />
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        {/* Logos Section */}
        {/* <section className="w-full py-12 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Utilisé par des entreprises innovantes à travers le monde
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src={`/placeholder-logo.svg`}
                    alt={`Company logo ${i}`}
                    width={120}
                    height={60}
                    className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-24 scroll-mt-20">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full w-fit flex items-center px-4 gap-1.5 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                <SparklesIcon className="size-4" />
                Fonctionnalités
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Tout ce dont vous avez besoin pour réussir
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Notre plateforme complète fournit tous les outils dont vous avez
                besoin pour rationaliser votre flux de travail, augmenter la
                productivité et atteindre vos objectifs.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Comparison Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-20"
            >
              <div className="text-center mb-12">
                <Badge
                  className="mx-auto rounded-full w-fit flex items-center px-4 gap-1.5 py-1.5 text-sm font-medium mb-4"
                  variant="secondary"
                >
                  <Shield className="size-4" />
                  Comparaison
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  Pourquoi choisir ArchiBot plutôt que ChatGPT ?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Une solution pensée pour les entreprises qui ont besoin de
                  sécurité et de précision.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* ChatGPT Column */}
                  <Card className="border-orange-200 dark:border-orange-800 bg-gradient-to-b from-orange-50/50 to-background dark:from-orange-950/20">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="size-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                          <MessageSquare className="size-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        <h4 className="text-xl font-bold">ChatGPT</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <X className="size-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            Traite un seul document à la fois
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <X className="size-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            Pas de mémoire entre les conversations
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <X className="size-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            Recherche limitée dans le contexte
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <X className="size-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            Hébergement hors Europe
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <X className="size-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            Aucune source vérifiable
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* ArchiBot Column */}
                  <Card className="border-green-200 dark:border-green-800 bg-gradient-to-b from-green-50/50 to-background dark:from-green-950/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                      100% sécurisé
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <Shield className="size-5 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="text-xl font-bold">ArchiBot</h4>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Check className="size-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            Vos données restent privées et sécurisées
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Check className="size-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            Base vectorielle de tous vos documents
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Check className="size-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            Recherche simultanée dans toute votre base
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Check className="size-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm inline-flex items-center gap-1">
                            Hébergement en France{" "}
                            <Flag country="france" width={19} height={14} />
                          </span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Check className="size-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">
                            Croisement d'informations entre documents
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-20 md:py-24 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge
                className="rounded-full w-fit flex items-center px-4 gap-1.5 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                <WandSparklesIcon className="size-4" />
                Comment ça marche
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Processus simple, résultats puissants
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Commencez en quelques minutes et voyez la différence que notre
                plateforme peut apporter.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              {[
                {
                  step: "01",
                  title: "Ajoutez vos documents",
                  description:
                    "Téléchargez vos documents et laissez notre IA les analyser pour créer une base de connaissances.",
                  timeColor: "bg-blue-100 text-blue-800",
                  time: "5-10 minutes",
                  icon: FileText,
                  gradientColor: "from-blue-500 to-blue-600",
                  dotColor: "bg-blue-400",
                  features: [
                    "Reconnaissance haute performance",
                    "Traitement en France",
                  ],
                },
                {
                  step: "02",
                  title: "Entraînement IA",
                  description:
                    "Notre intelligence artificielle traite et indexe vos documents pour une recherche optimale.",
                  timeColor: "bg-green-100 text-green-800",
                  time: "3-5 minutes",
                  icon: Zap,
                  gradientColor: "from-green-500 to-green-600",
                  dotColor: "bg-green-400",
                  features: ["Indexation intelligente", "Analyse sémantique"],
                },
                {
                  step: "03",
                  title: "Discutez avec votre assistant",
                  description:
                    "Posez vos questions et obtenez des réponses précises avec les sources de vos documents.",
                  timeColor: "bg-purple-100 text-purple-800",
                  time: "Instantané",
                  icon: MessageSquare,
                  gradientColor: "from-purple-500 to-purple-500",
                  dotColor: "bg-purple-400",
                  features: ["Réponses avec sources", "Interface intuitive"],
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${step.gradientColor} text-white text-xl font-bold shadow-lg`}
                  >
                    <step.icon className="size-7" />
                  </div>
                  <div
                    className={`${step.timeColor} text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4`}
                  >
                    {step.time}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  <div className="text-sm text-gray-500">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span
                        className={`w-2 h-2 ${step.dotColor} rounded-full`}
                      ></span>
                      <span>{step.features[0]}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span
                        className={`w-2 h-2 ${step.dotColor} rounded-full`}
                      ></span>
                      <span>{step.features[1]}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="w-full py-20 md:py-24 scroll-mt-20"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full w-fit flex items-center px-4 gap-1.5 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                <HeartIcon className="size-4" />
                Témoignages
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Ils nous font confiance
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Découvrez comment ArchiBot transforme le quotidien des
                entreprises qui l'utilisent.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "ArchiBot a transformé la façon dont nous gérons nos projets. Les fonctionnalités d'automatisation nous ont fait économiser d'innombrables heures de travail manuel.",
                  author: "Sarah Johnson",
                  role: "Chef de projet, TechCorp",
                  rating: 5,
                },
                {
                  quote:
                    "Le tableau de bord d'analyse fournit des informations auxquelles nous n'avions jamais eu accès auparavant. Cela nous a aidés à prendre des décisions basées sur les données qui ont amélioré notre ROI.",
                  author: "Michael Chen",
                  role: "Directeur marketing, GrowthLabs",
                  rating: 5,
                },
                {
                  quote:
                    "Le support client est exceptionnel. Chaque fois que nous avons eu un problème, l'équipe a été rapide à répondre et à le résoudre. On ne pourrait pas demander un meilleur service.",
                  author: "Emily Rodriguez",
                  role: "Responsable des opérations, StartupX",
                  rating: 5,
                },
                {
                  quote:
                    "Nous avons essayé plusieurs solutions similaires, mais aucune ne se compare à la facilité d'utilisation et aux fonctionnalités complètes d'ArchiBot. Cela a changé la donne.",
                  author: "David Kim",
                  role: "PDG, InnovateNow",
                  rating: 5,
                },
                {
                  quote:
                    "Les outils de collaboration ont rendu le travail à distance beaucoup plus facile pour notre équipe. Nous sommes plus productifs que jamais malgré le fait d'être répartis sur différents fuseaux horaires.",
                  author: "Lisa Patel",
                  role: "Directrice RH, RemoteFirst",
                  rating: 5,
                },
                {
                  quote:
                    "La mise en œuvre a été transparente, et le ROI a été presque immédiat. Nous avons réduit nos coûts opérationnels de 30% depuis le passage à ArchiBot.",
                  author: "James Wilson",
                  role: "COO, ScaleUp Inc",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star
                              key={j}
                              className="size-4 text-yellow-500 fill-yellow-500"
                            />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="w-full py-20 md:py-24 bg-muted/30 relative overflow-hidden scroll-mt-20"
        >
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full w-fit flex items-center px-4 gap-1.5 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                <CreditCardIcon className="size-4" />
                Tarifs
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Tarification simple et transparente
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Choisissez le plan qui convient à votre entreprise. Essai
                gratuit de 14 jours.
              </p>
            </motion.div>

            <div className="mx-auto max-w-6xl">
              <Tabs defaultValue="monthly" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="rounded-full p-1">
                    <TabsTrigger value="monthly" className="rounded-full px-6">
                      Mensuel
                    </TabsTrigger>
                    <TabsTrigger value="annually" className="rounded-full px-6">
                      Annuel (Économisez 20%)
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="monthly">
                  <div className="grid gap-6 lg:grid-cols-3">
                    {[
                      {
                        name: "ArchiBot",
                        price: "149€",
                        description:
                          "Idéal pour les entrepreneurs qui veulent intégrer l'IA dans leurs documents internes.",
                        features: [
                          "10 documents actifs",
                          "1000 messages mensuels",
                          <>
                            <span className="inline-flex items-center gap-1">
                              <Flag country="us" width={16} height={12} />
                              OpenAI (Azure France) ou{" "}
                              <Flag country="france" width={16} height={12} />
                              Mistral
                            </span>
                          </>,
                          "Hébergement 100% en France",
                          "Aucune donnée réutilisée",
                        ],
                        cta: "Commencer l'essai gratuit",
                      },
                      {
                        name: "ArchiBot Pro",
                        price: "249€",
                        description:
                          "Conçu pour les entreprises qui recherchent performance et sécurité sans compromis.",
                        features: [
                          "Documents illimités*",
                          "Messages illimités*",
                          <>
                            <span className="inline-flex items-center gap-1">
                              <Flag country="us" width={16} height={12} />
                              OpenAI (Azure France) ou{" "}
                              <Flag country="france" width={16} height={12} />
                              Mistral
                            </span>
                          </>,
                          "Hébergement 100% en France",
                          "Aucune donnée réutilisée",
                        ],
                        cta: "Commencer l'essai gratuit",
                        popular: true,
                      },
                      {
                        name: "ArchiBot Business",
                        price: "349€",
                        description:
                          "Spécialement conçu pour les secteurs sensibles avec une infrastructure dédiée.",
                        features: [
                          "Documents illimités*",
                          "Messages illimités*",
                          <>
                            <span className="inline-flex items-center gap-1">
                              Déploiement privé de{" "}
                              <Flag country="france" width={16} height={12} />
                              Mistral
                            </span>
                          </>,
                          "Hébergement 100% en France",
                          "Aucune donnée réutilisée",
                          "Aucun appel API externe",
                        ],
                        cta: "Contactez-nous",
                      },
                    ].map((plan, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card
                          className={`relative overflow-hidden h-full ${
                            plan.popular
                              ? "border-primary shadow-lg"
                              : "border-border/40 shadow-md"
                          } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                        >
                          {plan.popular && (
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                              Le plus populaire
                            </div>
                          )}
                          <CardContent className="p-6 flex flex-col h-full">
                            <h3 className="text-2xl font-bold mb-2">
                              {plan.name}
                            </h3>
                            <div className="flex items-baseline mt-4">
                              <span className="text-3xl font-bold text-primary">
                                {plan.price}
                              </span>
                              <span className="text-muted-foreground ml-1">
                                /mois
                              </span>
                            </div>
                            <p className="text-muted-foreground text-sm mt-2">
                              {plan.description}
                            </p>
                            <ul className="space-y-3 my-6 flex-grow text-gray-700">
                              {plan.features.map((feature, j) => (
                                <li key={j} className="flex items-center">
                                  <CircleCheckBigIcon className="mr-2 size-4 text-primary" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            {(plan.name === "Archibot Pro" ||
                              plan.name === "Archibot Business") && (
                              <p className="text-xs text-muted-foreground mb-4">
                                *Soumis à une utilisation raisonnable
                              </p>
                            )}
                            <Button
                              className={`w-full mt-auto rounded-full ${
                                plan.popular
                                  ? "bg-primary hover:bg-primary/90"
                                  : "bg-muted hover:bg-muted/80"
                              }`}
                              variant={plan.popular ? "default" : "outline"}
                            >
                              {plan.cta}
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="annually">
                  <div className="grid gap-6 lg:grid-cols-3">
                    {[
                      {
                        name: "ArchiBot",
                        price: "120€",
                        description:
                          "Idéal pour les entrepreneurs qui veulent intégrer l'IA dans leurs documents internes.",
                        features: [
                          "10 documents actifs",
                          "1000 messages mensuels",
                          <>
                            <span className="inline-flex items-center gap-1">
                              <Flag country="us" width={16} height={12} />
                              OpenAI (Azure France) ou{" "}
                              <Flag country="france" width={16} height={12} />
                              Mistral
                            </span>
                          </>,
                          "Hébergement 100% en France",
                          "Aucune donnée réutilisée",
                        ],
                        cta: "Commencer l'essai gratuit",
                      },
                      {
                        name: "ArchiBot Pro",
                        price: "200€",
                        description:
                          "Conçu pour les entreprises qui recherchent performance et sécurité sans compromis.",
                        features: [
                          "Documents illimités*",
                          "Messages illimités*",
                          <>
                            <span className="inline-flex items-center gap-1">
                              <Flag country="us" width={16} height={12} />
                              OpenAI (Azure France) ou{" "}
                              <Flag country="france" width={16} height={12} />
                              Mistral
                            </span>
                          </>,
                          "Hébergement 100% en France",
                          "Aucune donnée réutilisée",
                        ],
                        cta: "Commencer l'essai gratuit",
                        popular: true,
                      },
                      {
                        name: "ArchiBot Business",
                        price: "280€",
                        description:
                          "Spécialement conçu pour les secteurs sensibles avec une infrastructure dédiée.",
                        features: [
                          "Documents illimités*",
                          "Messages illimités*",
                          <>
                            <span className="inline-flex items-center gap-1">
                              Déploiement privé de{" "}
                              <Flag country="france" width={16} height={12} />
                              Mistral
                            </span>
                          </>,
                          "Hébergement 100% en France",
                          "Aucune donnée réutilisée",
                          "Aucun appel API externe",
                        ],
                        cta: "Contactez-nous",
                      },
                    ].map((plan, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                      >
                        <Card
                          className={`relative overflow-hidden h-full ${
                            plan.popular
                              ? "border-primary shadow-lg"
                              : "border-border/40 shadow-md"
                          } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                        >
                          {plan.popular && (
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                              Le plus populaire
                            </div>
                          )}
                          <CardContent className="p-6 flex flex-col h-full">
                            <h3 className="text-2xl font-bold mb-2">
                              {plan.name}
                            </h3>
                            <div className="flex items-baseline mt-4">
                              <span className="text-3xl font-bold text-primary">
                                {plan.price}
                              </span>
                              <span className="text-muted-foreground ml-1">
                                /mois
                              </span>
                            </div>
                            <p className="text-muted-foreground text-sm mt-2">
                              {plan.description}
                            </p>
                            <ul className="space-y-3 my-6 flex-grow text-gray-700">
                              {plan.features.map((feature, j) => (
                                <li key={j} className="flex items-center">
                                  <CircleCheckBigIcon className="mr-2 size-4 text-primary" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>
                            {(plan.name === "Archibot Pro" ||
                              plan.name === "Archibot Business") && (
                              <p className="text-xs text-muted-foreground mb-4">
                                *Soumis à une utilisation raisonnable
                              </p>
                            )}
                            <Button
                              className={`w-full mt-auto rounded-full ${
                                plan.popular
                                  ? "bg-primary hover:bg-primary/90"
                                  : "bg-muted hover:bg-muted/80"
                              }`}
                              variant={plan.popular ? "default" : "outline"}
                            >
                              {plan.cta}
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-24 scroll-mt-20">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full w-fit flex items-center px-4 gap-1.5 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                <InfoIcon className="size-4" />
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Questions fréquentes
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Trouvez des réponses aux questions courantes sur notre
                plateforme.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "Où sont hébergées mes données ?",
                    answer:
                      "Toutes vos données, fichiers PDF, contenus extraits, base vectorielle, base de données, cache, sont hébergées exclusivement en France, dans des centres de données localisés à Paris.\n\nL'infrastructure est conforme au RGPD, et aucune donnée ne transite en dehors de l'Union Européenne.\n\nL'ensemble du traitement est effectué sur des serveurs privés, sécurisés, et 100% français.",
                  },
                  {
                    question:
                      "Mes données sont-elles utilisées pour entraîner une intelligence artificielle ?",
                    answer:
                      "Non. Vos données ne sont jamais utilisées pour entraîner ou améliorer un modèle d'IA, que ce soit en interne ou par un fournisseur tiers.\n\nLes modèles utilisés dans notre solution (Mistral ou OpenAI) sont configurés pour ne conserver aucune trace des échanges et ne pas exploiter les données transmises.",
                  },
                  {
                    question:
                      "Le modèle d'intelligence artificielle peut-il voir l'intégralité de mes documents ?",
                    answer:
                      "Non. Lorsqu'un utilisateur pose une question, seule une sélection ciblée de passages pertinents est transmise au modèle pour générer une réponse.\n\nCela limite fortement l'exposition de vos documents, tout en garantissant la pertinence des réponses.",
                  },
                  {
                    question: "Qui a accès à mes documents ?",
                    answer:
                      "Seuls les utilisateurs de votre entreprise autorisés via une authentification sécurisée ont accès à l'interface et aux documents.\n\nAucun tiers, aucun prestataire technique, ni même notre équipe, n'accède aux contenus sans votre accord explicite.",
                  },
                  {
                    question:
                      "Peut-on supprimer toutes les données si on arrête ?",
                    answer:
                      "Oui. Vous pouvez supprimer l'ensemble de vos données à tout moment : documents, textes extraits, index vectoriels, historiques de recherche, etc.\n\nUne procédure complète d'effacement est disponible sur demande, avec confirmation écrite.",
                  },
                  {
                    question: "Existe-t-il une solution sans appel API ?",
                    answer:
                      'Oui.\n\nEn plus de notre offre standard, nous proposons une offre "Secure" qui exécute un modèle IA (Mistral) sur un serveur GPU dédié en France, sans aucun appel à une API externe.\n\nCette option est idéale pour les entreprises des secteurs sensibles ou fortement régulés, et garantit un niveau de confidentialité maximal.',
                  },
                  {
                    question:
                      "Quels modèles sont utilisés pour répondre aux questions ?",
                    answer:
                      'Deux options sont disponibles selon vos besoins :\n\n- OpenAI via Azure France : les données ne sont pas utilisées pour entraîner les modèles, et restent sur le territoire européen.\n\n- Mistral, un modèle français performant, exécuté soit via API (France), soit en local sur GPU (option "Secure").',
                  },
                  {
                    question: "La solution est-elle conforme au RGPD ?",
                    answer:
                      "Oui. La solution est conçue pour être 100% conforme au RGPD :\n\n- Hébergement en France\n- Aucune utilisation des données à des fins commerciales ou d'entraînement\n- Droit à l'effacement\n- Pas de profilage utilisateur\n- Journalisation et supervision sur demande",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem
                      value={`item-${i}`}
                      className="border-b border-border/40 py-2"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground whitespace-pre-line">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Prêt à transformer votre flux de travail ?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Rejoignez des milliers de clients satisfaits qui ont rationalisé
                leurs processus et augmenté leur productivité avec notre
                plateforme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full h-12 px-8 text-base"
                >
                  Commencer l'essai gratuit
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-white text-white hover:bg-white/10 hover:text-white"
                >
                  Planifier une démo
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-4">
                Aucune carte de crédit requise. Essai gratuit de 14 jours.
                Annulez à tout moment.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                  <Image
                    priority
                    src="/logo.png"
                    alt="ArchiBot"
                    width={18}
                    height={18}
                  />
                </div>
                <span>ArchiBot</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Rationalisez votre flux de travail avec notre plateforme SaaS
                tout-en-un. Augmentez la productivité et développez votre
                entreprise.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Produit</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#features"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Fonctionnalités
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Intégrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Ressources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Entreprise</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Carrières
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Conditions d'utilisation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} ArchiBot. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Conditions d'utilisation
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Politique des cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
