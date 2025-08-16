"use client";

import * as Headless from "@headlessui/react";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { clsx } from "clsx";
import {
  type HTMLMotionProps,
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import useMeasure, { type RectReadOnly } from "react-use-measure";
import { Container } from "./container";
import { Link } from "./link";
import { Heading } from "./text";

const testimonials = [
  {
    img: "/bonjour.webp",
    name: "Sécurité",
    title: "Hébergement souverain",
    quote:
      "Vos données restent sur le territoire français, protégées par la législation locale.",
  },
  {
    img: "/bonjour.webp",
    name: "Sécurité",
    title: "Conformité RGPD",
    quote:
      "Une gestion rigoureuse des données, conforme aux normes européennes.",
  },
  {
    img: "/bonjour.webp",
    name: "Sécurité",
    title: "Chiffrement de bout en bout",
    quote:
      "Sécurisation des échanges et des données stockées avec les standards les plus avancés.",
  },
  {
    img: "/bonjour.webp",
    name: "Sécurité",
    title: "Contrôle d’accès granulaire",
    quote: "Droits et permissions ajustables par utilisateur ou par équipe.",
  },
  {
    img: "/bonjour.webp",
    name: "Sécurité",
    title: "Authentification multi-facteurs",
    quote: "Protection renforcée contre les accès non autorisés.",
  },
];

function TestimonialCard({
  name,
  title,
  img,
  children,
  bounds,
  scrollX,
  ...props
}: {
  img: string;
  name: string;
  title: string;
  children: React.ReactNode;
  bounds: RectReadOnly;
  scrollX: MotionValue<number>;
} & HTMLMotionProps<"div">) {
  let ref = useRef<HTMLDivElement | null>(null);

  let computeOpacity = useCallback(() => {
    let element = ref.current;
    if (!element || bounds.width === 0) return 1;

    let rect = element.getBoundingClientRect();

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left;
      let percent = diff / rect.width;
      return Math.max(0.5, 1 - percent);
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right;
      let percent = diff / rect.width;
      return Math.max(0.5, 1 - percent);
    } else {
      return 1;
    }
  }, [ref, bounds.width, bounds.left, bounds.right]);

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  });

  useLayoutEffect(() => {
    opacity.set(computeOpacity());
  }, [computeOpacity, opacity]);

  useMotionValueEvent(scrollX, "change", () => {
    opacity.set(computeOpacity());
  });

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex h-fit w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-2xl sm:w-96"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-gradient-to-b from-sky-700 to-sky-900"
      />
      <figure className="relative p-10">
        <div className="mb-4">
          <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white ring-1 ring-white/20 ring-inset">
            {name}
          </span>
        </div>
        <h4 className="text-xl/7 font-semibold text-white">{title}</h4>
        <p className="mt-3 text-sm/6 text-gray-200">{children}</p>
      </figure>
    </motion.div>
  );
}

function CallToAction() {
  return (
    <div>
      <p className="max-w-sm text-sm/6 text-gray-600">
        Boostez la productivité de votre entreprise et gagnez du temps grâce à
        Aliénor.
      </p>
      <div className="mt-2">
        <Link
          href="/company"
          className="inline-flex items-center gap-2 text-sm/6 font-medium text-blue-500"
        >
          Notre mission
          <ArrowLongRightIcon className="size-5" />
        </Link>
      </div>
    </div>
  );
}

export function Testimonials() {
  let scrollRef = useRef<HTMLDivElement | null>(null);
  let { scrollX } = useScroll({ container: scrollRef });
  let [setReferenceWindowRef, bounds] = useMeasure();
  let [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollX, "change", (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth));
  });

  function scrollTo(index: number) {
    let gap = 32;
    let width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth;
    scrollRef.current!.scrollTo({ left: (width + gap) * index });
  }

  return (
    <div className="overflow-hidden py-32">
      <Container>
        <div ref={setReferenceWindowRef}>
          {/*<Subheading>What everyone is saying</Subheading>*/}
          <Heading as="h3" className="max-w-3xl">
            Sécurité et souveraineté au cœur de chaque réponse
          </Heading>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          "mt-16 flex gap-8 px-(--scroll-padding)",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth",
          "[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]",
        ])}
      >
        {testimonials.map(({ img, name, title, quote }, testimonialIndex) => (
          <TestimonialCard
            key={testimonialIndex}
            name={name}
            title={title}
            img={img}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(testimonialIndex)}
          >
            {quote}
          </TestimonialCard>
        ))}
        <div className="w-2xl shrink-0 sm:w-216" />
      </div>
      <Container className="mt-16">
        <div className="flex justify-between">
          <CallToAction />
          <div className="hidden sm:flex sm:gap-2">
            {testimonials.map(({ title }, testimonialIndex) => (
              <Headless.Button
                key={testimonialIndex}
                onClick={() => scrollTo(testimonialIndex)}
                data-active={
                  activeIndex === testimonialIndex ? true : undefined
                }
                aria-label={`Aller à la fonctionnalité : ${title}`}
                className={clsx(
                  "size-2.5 rounded-full border border-transparent bg-gray-300 transition",
                  "data-active:bg-gray-400 data-hover:bg-gray-400",
                  "forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4",
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
