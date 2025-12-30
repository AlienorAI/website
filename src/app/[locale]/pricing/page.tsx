import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Gradient, GradientBackground } from "@/components/gradient";
import { TierSelectMobile } from "@/components/tier-select-mobile";
import { LogoCloud } from "@/components/logo-cloud";
import { Navbar } from "@/components/navbar";
import { Heading, Lead } from "@/components/text";
import {
  CalendarIcon,
  CheckIcon,
  EnvelopeIcon,
  MinusIcon,
  RocketLaunchIcon,
} from "@heroicons/react/16/solid";
import type { Metadata } from "next";
import FAQ from "@/components/faq";
import { getDictionary, type PricingTier } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type React from "react";

type PricingCopy = Awaited<ReturnType<typeof getDictionary>>["pricing"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  return {
    title: dictionary.pricing.metadata.title,
    description: dictionary.pricing.metadata.description,
  };
}

function Header({ copy }: { copy: PricingCopy["header"] }) {
  return (
    <Container className="mt-16">
      <Heading as="h1">{copy.title}</Heading>
      <Lead className="mt-6 max-w-3xl">{copy.lead}</Lead>
      <p className="mt-4 text-sm/6 text-gray-950/60">{copy.ribbon}</p>
    </Container>
  );
}

function PricingCards({
  tiers,
  ctaLabel,
  benefitsTitle,
  priceSuffix,
  popularBadge,
}: {
  tiers: PricingTier[];
  ctaLabel: string;
  benefitsTitle: string;
  priceSuffix: string;
  popularBadge: string;
}) {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-2xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard
              key={tierIndex}
              tier={tier}
              ctaLabel={ctaLabel}
              benefitsTitle={benefitsTitle}
              priceSuffix={priceSuffix}
              popularBadge={popularBadge}
            />
          ))}
        </div>
        <LogoCloud className="mt-24" />
      </Container>
    </div>
  );
}

function PricingCard({
  tier,
  ctaLabel,
  benefitsTitle,
  priceSuffix,
  popularBadge,
}: {
  tier: PricingTier;
  ctaLabel: string;
  benefitsTitle: string;
  priceSuffix: string;
  popularBadge: string;
}) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-2xl max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="relative grid grid-cols-1 rounded-2xl">
        {tier.popular && (
          <div className="bg-primary text-primary-foreground absolute top-0 right-0 rounded-tr-lg rounded-bl-lg px-3 py-1 text-xs font-medium">
            {popularBadge}
          </div>
        )}
        <div className="rounded-2xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <div className="text-2xl font-bold">{tier.name}</div>
          <div className="mt-8 flex items-baseline gap-2">
            <div className="text-primary text-4xl font-bold">
              {tier.priceMonthly}€
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>{priceSuffix}</p>
            </div>
          </div>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>

          <div className="mt-8">
            <Button href={tier.href ?? "#book"}>
              <RocketLaunchIcon />
              {ctaLabel}
            </Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              {benefitsTitle}
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
  tiers,
  copy,
}: {
  selectedTier: PricingTier;
  tiers: PricingTier[];
  copy: PricingCopy["table"];
}) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">{copy.caption}</caption>
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
              <TierSelectMobile
                options={tiers.map(({ name, slug }) => ({ name, slug }))}
                selectedSlug={selectedTier.slug}
              />
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
                                {copy.included} {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                {copy.notIncluded} {tier.name}
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
  description: React.ReactNode;
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

function TestimonialSection({
  copy,
  contactHref,
  demoHref,
}: {
  copy: PricingCopy["testimonial"];
  contactHref: string;
  demoHref: string;
}) {
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
                    src="/company/sav.webp"
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
                  {copy.title}
                </p>
                <p className="mt-2 max-w-3xl text-2xl font-medium text-gray-100">
                  {copy.description}
                </p>
              </blockquote>

              <div
                className={
                  "flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
                }
              >
                <Button
                  href={contactHref}
                  color={"white"}
                  className={"w-full sm:w-fit"}
                >
                  <EnvelopeIcon />
                  {copy.contact}
                </Button>
                <Button
                  href={demoHref}
                  color={"white"}
                  className={"w-full sm:w-fit"}
                >
                  <CalendarIcon />
                  {copy.demo}
                </Button>
              </div>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  );
}

function FrequentlyAskedQuestions({ copy }: { copy: PricingCopy["faq"] }) {
  return (
    <Container>
      <section id="faq" className="scroll-mt-24">
        <Heading as="div" className="mt-2 text-center">
          {copy.title}
        </Heading>
        <div className="mx-auto mt-16 mb-32 max-w-3xl space-y-12">
          <FAQ items={copy.items} />
        </div>
      </section>
    </Container>
  );
}

export default async function Pricing({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const tiers = dictionary.pricing.tiers;
  const tierParam =
    searchParams && typeof searchParams.tier === "string"
      ? searchParams.tier
      : undefined;
  const selectedTier =
    tiers.find(({ slug }) => slug === tierParam) ?? tiers[0];

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar nav={dictionary.navbar} localeSwitcher={dictionary.localeSwitcher} />
      </Container>
      <Header copy={dictionary.pricing.header} />
      <PricingCards
        tiers={tiers}
        ctaLabel={dictionary.pricing.actions.cta}
        benefitsTitle={dictionary.pricing.actions.benefitsTitle}
        priceSuffix={dictionary.pricing.priceSuffix}
        popularBadge={dictionary.pricing.popularBadge}
      />
      <PricingTable
        selectedTier={selectedTier}
        tiers={tiers}
        copy={dictionary.pricing.table}
      />
      <TestimonialSection
        copy={dictionary.pricing.testimonial}
        contactHref="mailto:contact@alienor.ai"
        demoHref="https://calendly.com/alienor-ai/demo"
      />
      <FrequentlyAskedQuestions copy={dictionary.pricing.faq} />
      <Footer
        copy={dictionary.footer}
        legal={dictionary.legal}
        feedback={dictionary.feedback}
        brand={dictionary.navbar.brand}
        homeLabel={dictionary.navbar.home}
      />
    </main>
  );
}
