import {BentoCard} from '@/components/bento-card'
import {Button} from '@/components/button'
import {Container} from '@/components/container'
import {Footer} from '@/components/footer'
import {Gradient} from '@/components/gradient'
import {Keyboard} from '@/components/keyboard'
import {Link} from '@/components/link'
import {LinkedAvatars} from '@/components/linked-avatars'
import {LogoCloud} from '@/components/logo-cloud'
import {LogoCluster} from '@/components/logo-cluster'
import {LogoTimeline} from '@/components/logo-timeline'
import {Map} from '@/components/map'
import {Navbar} from '@/components/navbar'
import {Screenshot} from '@/components/screenshot'
import {Testimonials} from '@/components/testimonials'
import {Heading, Subheading} from '@/components/text'
import {BoltIcon, CheckIcon, ChevronRightIcon, ListBulletIcon} from '@heroicons/react/16/solid'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

export function HeroSection() {
    return (
        <section className="w-full overflow-hidden relative pt-16 pb-24 sm:pt-24 sm:pb-32 ">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_200%)] bg-size-[4rem_4rem] dark:bg-black dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)]" />
                {/*<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_200%)] bg-size-[4rem_4rem] dark:bg-black dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)]" />*/}
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="from-foreground to-foreground/70 dark:from-foreground mb-5 bg-linear-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl dark:bg-linear-to-r dark:to-white">
                        Toute l’information interne
                        <span className="text-primary block">en quelques secondes</span>
                    </h1>
                    <p className="text-muted-foreground dark:text-muted-foreground mx-auto max-w-2xl text-lg font-light md:text-2xl">
                        Centralisez et accédez à toutes vos données internes
                        <br /> avec{" "}
                        <span className="font-medium">une IA souveraine et sécurisée.</span>
                    </p>

                    {/*<div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row">*/}
                    {/*    <DemoForm />*/}
                    {/*</div>*/}
                </div>
                <div className="text-muted-foreground mt-5 flex flex-col items-center justify-center gap-2 text-sm sm:flex-row sm:gap-4">
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
                </div>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row justify-center">
                <Button href="#"><BoltIcon/>Voir en action</Button>
                <Button color={"white"} href="/pricing">
                    <ListBulletIcon/>Voir les tarifs
                </Button>
            </div>
        </section>
    );
}


function Hero() {
  return (
    <div className="relative">
      {/*<Gradient className="absolute inset-2 bottom-0 rounded-2xl ring-1 ring-black/5 ring-inset" />*/}
      <Container className="relative">

        <Navbar
          banner={
            <Link
              href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
            >
              Radiant raises $100M Series A from Tailwind Ventures
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />

        <div className="">

          <HeroSection/>
          {/*<h1 className="font-display text-xl/[0.9] font-bold tracking-tight text-balance text-gray-950 sm:text-xl/[0.8] md:text-5xl/[0.8]">Toute l’information interne, <span className={"text-blue-500"}>en quelques clics.</span>*/}
          {/*</h1>*/}
          {/*<p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-xl/8">*/}
          {/*    Centralisez et accédez à toutes vos données internes*/}
          {/*    avec une IA souveraine et sécurisée.*/}
          {/*</p>*/}

        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A snapshot of your entire sales pipeline.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-144 sm:h-auto sm:w-304"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
          <Heading as="h3" className="max-w-3xl ">
          Conçue pour s'intégrer à votre environnement professionnel
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-2xl lg:col-span-3 lg:rounded-tl-2xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Undercut your competitors"
          description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-size-[1100px_650px] bg-position-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-2xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-2xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="Radiant helps you sell in locations currently under international embargo."
          graphic={<Map />}
          className="max-lg:rounded-b-2xl lg:col-span-2 lg:rounded-br-2xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (


      <Container>
        <Heading as="h3"  className="mt-2 max-w-3xl">Conçue pour s'intégrer à votre environnement professionnel
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Networking"
            title="Un Chatbot qui connait parfaitement votre entreprise"
            description="Permet de retrouver rapidement les informations dont vous avez besoin, qu’elles soient dans un fichier, un compte rendu ou un outil métier."
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-2xl lg:col-span-4 lg:rounded-tl-2xl "
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
            title="Notre moteur IA sur-mesure"
            description="Intelligence spécialement développée pour traiter et comprendre les données internes."
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-2xl"
          />
          <BentoCard
            dark
            eyebrow="Engagement"
            title="Des Agents IA prêts à l'emploi"
            description="Des assistants IA prêts à automatiser vos tâches, RH, demandes internes, mise à jour de fichiers, notifications, en travaillant en arrière-plan, sans configuration complexe."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-2xl lg:col-span-4 lg:rounded-br-2xl"
          />
        </div>
      </Container>

  )
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
          {/*<FeatureSection />*/}
          {/*<BentoSection />*/}
        <DarkBentoSection />
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
