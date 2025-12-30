import { PlusGrid, PlusGridItem, PlusGridRow } from "@/components/plus-grid";
import { Button } from "./button";
import { Container } from "./container";
import { Gradient } from "./gradient";
import { Link } from "./link";
import { CalendarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Feedback from "@/components/feedback";
import { TermsModal, PrivacyModal } from "@/components/legal-modals";
import type { Dictionary } from "@/i18n/dictionaries";

function CallToAction({ cta }: { cta: Dictionary["footer"]["cta"] }) {
  return (
    <div className="relative pt-20 pb-16 text-center sm:py-24">
      <hgroup>
        <p className="mt-6 text-3xl font-bold tracking-tight text-gray-950 sm:text-5xl">
          {cta.title}
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl">
        {cta.lead}
      </p>
      <p className="mx-auto mt-6 max-w-xl text-sm/6 text-gray-500">
        {cta.helper}
      </p>
      <div className="mt-6">
        <Button
          className="w-full sm:w-auto"
          href={"https://calendly.com/alienor-ai/demo"}
phEvent="cta_click"
          phProps={{ location: "footer_cta", action: "plan_demo", source: "calendly" }}
        >
          <CalendarIcon />
          {cta.button}
        </Button>
      </div>
    </div>
  );
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>;
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>;
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-gray-950 data-hover:text-gray-950/75"
      />
    </li>
  );
}

function Sitemap({
  copy,
  legal,
  feedback,
}: {
  copy: Dictionary["footer"]["sitemap"];
  legal: Dictionary["legal"];
  feedback: Dictionary["feedback"];
}) {
  return (
    <>
      <div>
        <SitemapHeading>{copy.product}</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/pricing">{copy.pricing}</SitemapLink>
          <SitemapLink href="/blog">{copy.blog}</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>{copy.company}</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/company">{copy.mission}</SitemapLink>
          {/*<SitemapLink  href="/company#careers">{copy.careers}</SitemapLink>*/}
          <li className={"font-medium cursor-wait text-gray-600 "}>
            {copy.careersDisabledLabel}
          </li>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>{copy.support}</SitemapHeading>
        <SitemapLinks>
          {/*<SitemapLink href="#">{copy.helpCenter}</SitemapLink>*/}
          <Feedback copy={feedback} />
          <SitemapLink href="/pricing#faq">{copy.faq}</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>{copy.legal}</SitemapHeading>
        <SitemapLinks>
          <TermsModal copy={legal.terms} />
          <PrivacyModal copy={legal.privacy} />
        </SitemapLinks>
      </div>
    </>
  );
}

function SocialIconX(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
    </svg>
  );
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  );
}

function SocialLinks() {
  return (
    <div className={"flex items-center gap-6"}>
      <Link
        href="https://x.com/alienorai"
        target="_blank"
        aria-label="Visit us on X"
        className="text-gray-950 data-hover:text-gray-950/75"
        phEvent="social_click"
        phProps={{ location: "footer_social", network: "x" }}
      >
        <SocialIconX className="size-4" />
      </Link>
      <Link
        href="http://linkedin.com/company/alienor-ai"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-gray-950 data-hover:text-gray-950/75"
        phEvent="social_click"
        phProps={{ location: "footer_social", network: "linkedin" }}
      >
        <SocialIconLinkedIn className="size-4" />
      </Link>
    </div>
  );
}

function Certficatetions() {
  return (
    <>
      <div className="size-10 sm:size-full">
        <img
          src={"/certifications/rgpd.webp"}
          alt="RGPD logo"
          width={45}
          height={45}
        />
      </div>
      <div className="size-10 sm:size-full">
        <img
          src={"/certifications/iso.webp"}
          alt="ISO 27001 logo"
          width={45}
          height={45}
        />
      </div>
      <div className="size-10 sm:size-full">
        <img
          src={"/certifications/snc.webp"}
          alt="SecNumCloud logo"
          width={45}
          height={45}
        />
      </div>
    </>
  );
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-950">
      &copy; {new Date().getFullYear()} Aliénor AI
    </div>
  );
}

export function Footer({
  copy,
  legal,
  feedback,
  brand,
  homeLabel,
}: {
  copy: Dictionary["footer"];
  legal: Dictionary["legal"];
  feedback: Dictionary["feedback"];
  brand: string;
  homeLabel: string;
}) {
  return (
    <footer id={"book"}>
      <Gradient className="relative z-0">
        <div className="absolute inset-2 -z-10 rounded-2xl bg-white/80" />
        <Container>
          <CallToAction cta={copy.cta} />
          <PlusGrid className="pb-16">
            <PlusGridRow>
              <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-2 flex flex-col">
                  <PlusGridItem className="pt-6 lg:pb-6">
                    <Link
                      className={
                        "flex w-fit items-center justify-center gap-1.5 rounded-full py-1.5 font-medium"
                      }
                      href="/"
                      title={homeLabel}
                    >
                      <Image
                        className={`dark:outline-white/10' size-7 rounded-full outline -outline-offset-1 outline-black/10`}
                        priority
                        src={"/logo.webp"}
                        alt={brand}
                        width={200}
                        height={200}
                      />
                      {brand}
                    </Link>
                  </PlusGridItem>
                  <p className="text-muted-foreground text-sm">
                    {copy.description}
                  </p>
                  <div className={"mt-6 flex w-fit items-center gap-6"}>
                    <Certficatetions />
                  </div>
                </div>

                <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
                  <Sitemap
                    copy={copy.sitemap}
                    legal={legal}
                    feedback={feedback}
                  />
                </div>
              </div>
            </PlusGridRow>
            <PlusGridRow className="flex items-center justify-between">
              <div>
                <PlusGridItem className="flex flex-col gap-6 py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-6 py-3">
                  <SocialLinks />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  );
}
