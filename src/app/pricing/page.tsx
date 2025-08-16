import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Gradient, GradientBackground } from "@/components/gradient";
import { Link } from "@/components/link";
import { LogoCloud } from "@/components/logo-cloud";
import { Navbar } from "@/components/navbar";
import { Heading, Lead } from "@/components/text";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  CalendarIcon,
  CheckIcon,
  ChevronUpDownIcon,
  EnvelopeIcon,
  MinusIcon,
  RocketLaunchIcon,
} from "@heroicons/react/16/solid";
import type { Metadata } from "next";
import FAQ from "@/components/faq";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Des entreprises de toutes tailles utilisent Aliénor pour accéder plus rapidement à leurs informations internes. Choisissez l’offre qui vous convient et commencez dès aujourd’hui.",
};

const tiers = [
  {
    name: "Aliénor" as const,
    slug: "alienor",
    description:
      "Idéal pour les entrepreneurs qui souhaitent intégrer l'IA à leur quotidien professionnel.",
    priceMonthly: 149,
    href: "#",
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
    name: "Aliénor Pro" as const,
    slug: "pro",
    popular: true,
    description:
      "Conçu pour les entreprises qui recherchent performance et sécurité sans compromis.",
    priceMonthly: 249,
    href: "#",
    highlights: [
      { description: "Membres illimités" },
      { description: "Documents illimités*" },
      { description: "Messages illimités*" },
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
    name: "Aliénor Business" as const,
    slug: "business",
    description:
      "Spécialement développé pour les secteurs sensibles avec une infrastructure dédiée.",
    priceMonthly: 349,
    href: "#",
    highlights: [
      { description: "Membres illimités" },
      { description: "Documents illimités*" },
      { description: "Messages illimités*" },
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
];

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Une tarification qui s’adapte à vos besoins.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Trois formules conçues pour répondre à vos besoins de sécurité et de
        performance. Commencez votre essai gratuit dès aujourd'hui.
      </Lead>
    </Container>
  );
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-2xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        <LogoCloud className="mt-24" />
      </Container>
    </div>
  );
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-2xl max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="relative grid grid-cols-1 rounded-2xl">
        {tier.popular && (
          <div className="bg-primary text-primary-foreground absolute top-0 right-0 rounded-tr-lg rounded-bl-lg px-3 py-1 text-xs font-medium">
            Le plus populaire
          </div>
        )}
        <div className="rounded-2xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <div className="text-2xl font-bold">{tier.name}</div>
          <div className="mt-8 flex items-baseline gap-2">
            <div className="text-primary text-4xl font-bold">
              {tier.priceMonthly}€
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>/mois</p>
            </div>
          </div>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>

          <div className="mt-8">
            <Button href={tier.href}>
              <RocketLaunchIcon />
              Essayer la solution
            </Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Vous bénéficiez de :
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingTable({
  selectedTier,
}: {
  selectedTier: (typeof tiers)[number];
}) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <div className="text-2xl font-medium">{tier.name}</div>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <Link
                          scroll={false}
                          href={`/pricing?tier=${tier.slug}`}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value;

                      return (
                        <td
                          key={tier.slug}
                          data-selected={
                            selectedTier === tier ? true : undefined
                          }
                          className="p-4 data-selected:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-green-600" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6">{value}</div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  );
}

function FeatureItem({
  description,
  disabled = false,
}: {
  description: string;
  disabled?: boolean;
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-3.75 shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  );
}

function PlusIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  );
}

function Testimonial() {
  return (
    <div className="mx-2 my-24 rounded-2xl bg-blue-500 bg-[url(/dot-texture.svg)] pt-72 pb-24 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-2xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-2xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-2xl shadow-2xl outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="/company/4.jpg"
                    className="aspect-3/4 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-10 max-lg:text-center">
              <blockquote>
                <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full lg:text-4xl">
                  Un doute ? Une question ?
                </p>
                <p className="mt-2 max-w-3xl text-2xl font-medium text-gray-100">
                  Notre équipe est disponible pour répondre à toutes vos
                  interrogations sur nos offres, nos tarifs et notre
                  fonctionnement.
                </p>
              </blockquote>

              <div
                className={
                  "flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
                }
              >
                <Button color={"white"} className={"w-full sm:w-fit"}>
                  <EnvelopeIcon />
                  Contactez nous
                </Button>
                <Button
                  href={"https://calendly.com/alienor-ai/demo"}
                  color={"white"}
                  className={"w-full sm:w-fit"}
                >
                  <CalendarIcon />
                  Planifiez une démo
                </Button>
              </div>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  );
}

function FrequentlyAskedQuestions() {
  return (
    <Container>
      <section id="faq" className="scroll-mt-24">
        <Heading as="div" className="mt-2 text-center">
          Questions fréquentes
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-3xl space-y-12">
          <FAQ />
        </div>
      </section>
    </Container>
  );
}

export default async function Pricing({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  let params = await searchParams;
  let tier =
    typeof params.tier === "string"
      ? tiers.find(({ slug }) => slug === params.tier)!
      : tiers[0];

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <PricingCards />
      <PricingTable selectedTier={tier} />
      <Testimonial />
      <FrequentlyAskedQuestions />
      <Footer />
    </main>
  );
}
