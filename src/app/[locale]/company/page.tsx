import { AnimatedNumber } from "@/components/animated-number";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GradientBackground } from "@/components/gradient";
import { Navbar } from "@/components/navbar";
import { Heading, Lead } from "@/components/text";
import type { Metadata } from "next";
import { Link } from "@/components/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

type CompanyCopy = Awaited<ReturnType<typeof getDictionary>>["company"]["header"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  return {
    title: dictionary.company.metadata.title,
    description: dictionary.company.metadata.description,
  };
}

function QuoteGrid({ copy }: { copy: CompanyCopy }) {
  const images = ["/company/6.webp", "/company/1.jpg"];
  return (
    <div className="hidden pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
      <div className="xs:-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-6">
        {copy.quotes.map((quote, index) => (
          <div
            key={quote.author}
            className={`relative ${index === 1 ? "-mt-8 lg:-mt-32 xs:flex hidden" : "flex"} aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-2xl sm:aspect-3/4`}
          >
            <img
              alt=""
              src={images[index]}
              className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
            />
            <figure className="relative p-10">
              <blockquote>
                <p className="relative text-xl/7 text-white">{quote.quote}</p>
              </blockquote>
              <figcaption className="mt-6 border-t border-white/20 pt-6">
                <p className="text-sm/6 font-medium text-white">
                  {quote.author}
                </p>
                <p className="text-sm/6 font-medium">
                  <span className="text-blue-500">{quote.role}</span>
                </p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

function Metrics({ copy }: { copy: CompanyCopy }) {
  return (
    <div className="max-lg:mt-16 lg:col-span-1">
      <hr className="mt-6 border-t border-gray-200" />
      <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        {copy.metrics.map(({ label, value, suffix }, index) => (
          <div
            key={label}
            className={`flex flex-col gap-y-2 ${index < 3 ? "border-b border-dotted border-gray-200 pb-4 max-sm:last:border-none max-sm:last:pb-0" : ""}`}
          >
            <dt className="text-sm/6 text-gray-600">{label}</dt>
            <dd className="order-first text-6xl font-medium tracking-tight">
              <AnimatedNumber start={0} end={value} />
              {suffix}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Header({ copy }: { copy: CompanyCopy }) {
  return (
    <Container className="mt-16 mb-32">
      <Heading as="h1">{copy.title}</Heading>
      <Lead className="mt-6 max-w-3xl">{copy.lead}</Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">
            {copy.missionTitle}
          </h2>
          <p className="mt-6 text-sm/6 text-gray-600">{copy.missionBody[0]}</p>
          <p className="mt-8 text-sm/6 text-gray-600">{copy.missionBody[1]}</p>
          <div className="mt-6">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm/6 font-medium text-blue-500"
            >
              {copy.cta}
              <ArrowLongRightIcon className="size-5" />
            </Link>
          </div>
        </div>

        <QuoteGrid copy={copy} />
        <Metrics copy={copy} />
      </section>
    </Container>
  );
}

export default async function Company({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar nav={dictionary.navbar} localeSwitcher={dictionary.localeSwitcher} />
      </Container>
      <Header copy={dictionary.company.header} />
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
