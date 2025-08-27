import { BentoCard } from "@/components/bento-card";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { LinkedAvatars } from "@/components/linked-avatars";
import { LogoCloud } from "@/components/logo-cloud";
import { LogoTimeline } from "@/components/logo-timeline";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { Heading } from "@/components/text";
import { Badge } from "@/components/badge";
import {
  BoltIcon,
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
} from "@heroicons/react/16/solid";
import type { Metadata } from "next";
import { UseCases } from "@/components/use-cases";

export const metadata: Metadata = {
  description:
    "Aliénor vous aide à accéder rapidement à l’information interne de votre entreprise, en toute sécurité.",
};

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_200%)] bg-size-[4rem_4rem] dark:bg-black dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)]" />
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="from-foreground to-foreground/70 dark:from-foreground mb-5 bg-linear-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl dark:bg-linear-to-r dark:to-white">
          Toute l’information interne
          <span className="text-primary block">en quelques secondes</span>
        </h1>
        <p className="text-muted-foreground dark:text-muted-foreground mx-auto max-w-2xl text-lg font-light md:text-2xl">
          Centralisez et accédez à toutes vos données internes
          <br className={"xs:block hidden"} /> avec{" "}
          <span className="xs:font-medium">
            une IA <br className={"xs:hidden block"} />
            <span className={"max-xs:font-medium"}>
              souveraine et sécurisée
            </span>
            .
          </span>
        </p>
      </div>
      <div className="text-muted-foreground mx-auto mt-5 flex max-w-2xl flex-col flex-wrap items-center justify-center gap-2 text-sm sm:flex-row sm:gap-4">
        <div className="flex items-center gap-1">
          <CheckIcon className="text-primary size-4" />
          <span>Sécurité avancée</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckIcon className="text-primary size-4" />
          <span>Hébergement 100% France</span>
        </div>
        <div className="hidden items-center gap-1 sm:flex">
          <CheckIcon className="text-primary size-4" />
          <span>Qualification SecNumCloud</span>
        </div>
        <div className="xs:flex hidden items-center justify-center gap-2 sm:gap-4">
          <Badge color="blue">Prêt à l'emploi</Badge>
          <Badge color="green">Mise en place en 24h</Badge>
          <Badge color="sky">ROI immédiat</Badge>
        </div>
      </div>

      <div className="mt-12 flex flex-col justify-center gap-x-6 gap-y-4 sm:flex-row">
        <Button href={"https://calendly.com/alienor-ai/demo"}>
          <BoltIcon />
          Voir en action
        </Button>
        <Button color={"white"} href="/pricing">
          <CheckCircleIcon />
          Voir les tarifs
        </Button>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <div className="relative">
      <Container className="relative">
        <Navbar />
        <HeroSection />
      </Container>
    </div>
  );
}

function DarkBentoSection() {
  return (
    <Container>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Conçue pour s'intégrer à votre environnement professionnel
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          dark
          eyebrow="Networking"
          title="Un Chatbot qui connait parfaitement votre entreprise"
          description="Permet de retrouver rapidement les informations dont vous avez besoin, qu’elles soient dans un fichier, un compte rendu ou un outil métier."
          graphic={
            <div className="h-80 bg-[url(/screenshots/chat-bot.png)] bg-size-[851px_344px] bg-no-repeat" />
          }
          fade={["top"]}
          className="max-lg:rounded-t-2xl lg:col-span-4 lg:rounded-tl-2xl"
        />
        <BentoCard
          dark
          eyebrow="Integrations"
          title="Connectée à vos outils"
          description="Se connecte facilement à vos outils du quotidien : messagerie, drive, CRM, gestion de projets, etc."
          graphic={<LogoTimeline />}
          // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
          className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-2xl"
        />
        <BentoCard
          dark
          eyebrow="Meetings"
          title="Notre moteur sur-mesure"
          description="Intelligence artificielle spécialement développée pour traiter et comprendre les données internes."
          graphic={<LinkedAvatars />}
          className="lg:col-span-2 lg:rounded-bl-2xl"
        />
        <BentoCard
          dark
          eyebrow="Engagement"
          title={
            <span
              className={
                "flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4"
              }
            >
              <span>Des Agents IA prêts à l'emploi</span>
              <span className="flex items-center gap-1 rounded-full border border-teal-100 bg-teal-50 px-2 text-xs/6 font-medium text-teal-700">
                <ClockIcon className={"size-3"} />
                Bientôt disponible
              </span>
            </span>
          }
          description="Des assistants IA prêts à automatiser vos tâches, RH, demandes internes, mise à jour de fichiers, notifications, en travaillant en arrière-plan, sans configuration complexe."
          graphic={
            <div className="h-80 bg-[url(/screenshots/agents.png)] bg-size-[851px_344px] bg-no-repeat" />
          }
          fade={["top"]}
          className="max-lg:rounded-b-2xl lg:col-span-4 lg:rounded-br-2xl"
        />
      </div>
    </Container>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-blue-50 py-32">
          <DarkBentoSection />
        </div>
      </main>
      <Testimonials />
      <UseCases />
      <Footer />
    </div>
  );
}
