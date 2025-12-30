import { BentoCard } from "@/components/bento-card";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { LinkedAvatars } from "@/components/linked-avatars";
import { LogoCloud } from "@/components/logo-cloud";
import { LogoTimeline } from "@/components/logo-timeline";
import { Navbar } from "@/components/navbar";
import { Testimonials } from "@/components/testimonials";
import { Heading } from "@/components/text";
import {
  BoltIcon,
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
} from "@heroicons/react/16/solid";
import type { Metadata } from "next";
import { UseCases } from "@/components/use-cases";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  return {
    description: dictionary.metadata.description,
  };
}

function HeroSection({
  hero,
}: {
  hero: Awaited<ReturnType<typeof getDictionary>>["home"]["hero"];
}) {
  const badgeColors: Array<React.ComponentProps<typeof Badge>["color"]> = [
    "blue",
    "green",
    "sky",
  ];

  return (
    <section className="relative w-full overflow-hidden pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_200%)] bg-size-[4rem_4rem] dark:bg-black dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)]" />
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="from-foreground to-foreground/70 dark:from-foreground mb-5 bg-linear-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl dark:bg-linear-to-r dark:to-white">
          {hero.title}
          <span className="text-primary block">{hero.highlight}</span>
        </h1>
        <p className="text-muted-foreground dark:text-muted-foreground mx-auto max-w-2xl text-lg font-light md:text-2xl">
          {hero.description}
        </p>
      </div>
      <div className="text-muted-foreground mx-auto mt-5 flex max-w-2xl flex-col flex-wrap items-center justify-center gap-2 text-sm sm:flex-row sm:gap-4">
        {hero.bullets.map((bullet, index) => (
          <div
            key={bullet}
            className={
              index === 2 ? "hidden items-center gap-1 sm:flex" : "flex items-center gap-1"
            }
          >
            <CheckIcon className="text-primary size-4" />
            <span>{bullet}</span>
          </div>
        ))}
        <div className="xs:flex hidden items-center justify-center gap-2 sm:gap-4">
          {hero.badges.map((badge, i) => (
            <Badge key={badge} color={badgeColors[i] ?? "blue"}>
              {badge}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col justify-center gap-x-6 gap-y-4 sm:flex-row">
        <Button
          href={"https://calendly.com/alienor-ai/demo"}
          phEvent="cta_click"
          phProps={{ location: "home_hero", action: "view_demo", source: "calendly" }}
        >
          <BoltIcon />
          {hero.primaryCta}
        </Button>
        <Button
          color={"white"}
          href="/pricing"
          phEvent="cta_click"
          phProps={{ location: "home_hero", action: "view_pricing" }}
        >
          <CheckCircleIcon />
          {hero.secondaryCta}
        </Button>
      </div>
    </section>
  );
}

function Hero({
  hero,
  navbar,
  localeSwitcher,
}: {
  hero: Awaited<ReturnType<typeof getDictionary>>["home"]["hero"];
  navbar: Awaited<ReturnType<typeof getDictionary>>["navbar"];
  localeSwitcher: Awaited<ReturnType<typeof getDictionary>>["localeSwitcher"];
}) {
  return (
    <div className="relative">
      <Container className="relative">
        <Navbar nav={navbar} localeSwitcher={localeSwitcher} />
        <HeroSection hero={hero} />
      </Container>
    </div>
  );
}

function DarkBentoSection({
  copy,
}: {
  copy: Awaited<ReturnType<typeof getDictionary>>["home"];
}) {
  return (
    <Container>
      <Heading as="h3" className="mt-2 max-w-3xl">
        {copy.integrationsHeading}
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          dark
          eyebrow={copy.bentoCards[0].eyebrow}
          title={copy.bentoCards[0].title}
          description={copy.bentoCards[0].description}
          graphic={
            <div className="h-80 bg-[url(/screenshots/chat-bot.png)] bg-size-[851px_344px] bg-no-repeat" />
          }
          fade={["top"]}
          className="max-lg:rounded-t-2xl lg:col-span-4 lg:rounded-tl-2xl"
        />
        <BentoCard
          dark
          eyebrow={copy.bentoCards[1].eyebrow}
          title={copy.bentoCards[1].title}
          description={copy.bentoCards[1].description}
          graphic={<LogoTimeline />}
          className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-2xl"
        />
        <BentoCard
          dark
          eyebrow={copy.bentoCards[2].eyebrow}
          title={copy.bentoCards[2].title}
          description={copy.bentoCards[2].description}
          graphic={<LinkedAvatars />}
          className="lg:col-span-2 lg:rounded-bl-2xl"
        />
        <BentoCard
          dark
          eyebrow={copy.bentoCards[3].eyebrow}
          title={
            <span
              className={
                "flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4"
              }
            >
              <span>{copy.bentoCards[3].title}</span>
              {copy.bentoCards[3].badgeSoon && (
                <span className="flex items-center gap-1 rounded-full border border-teal-100 bg-teal-50 px-2 text-xs/6 font-medium text-teal-700">
                  <ClockIcon className={"size-3"} />
                  {copy.bentoCards[3].badgeSoon}
                </span>
              )}
            </span>
          }
          description={copy.bentoCards[3].description}
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

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <div className="overflow-hidden">
      <Hero
        hero={dictionary.home.hero}
        navbar={dictionary.navbar}
        localeSwitcher={dictionary.localeSwitcher}
      />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-blue-50 py-32">
          <DarkBentoSection copy={dictionary.home} />
        </div>
      </main>
      <Testimonials copy={dictionary.testimonials} />
      <UseCases copy={dictionary.useCases} />
      <Footer
        copy={dictionary.footer}
        legal={dictionary.legal}
        feedback={dictionary.feedback}
        brand={dictionary.navbar.brand}
        homeLabel={dictionary.navbar.home}
      />
    </div>
  );
}
