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
    img: "/testimonials/commercial.webp",
    name: "Préparer un rendez-vous client",
    title: "Application Commerciale",
    quote:
      "Demandez à l’IA les points clés d’une fiche technique ou d’un CRM, et arrivez préparé en quelques secondes. ",
  },
  {
    img: "/testimonials/rh.webp",
    name: "Accéder aux politiques internes",
    title: "Application RH",
    quote:
      "Retrouvez instantanément la bonne politique RH et répondez aux questions des collaborateurs sans perdre de temps.",
  },
  {
    img: "/testimonials/amy-chase.jpg",
    name: "Éviter les doublons et erreurs",
    title: "Application Finance / Direction",
    quote:
      "Accédez à la dernière version d’un document financier : les réponses sont vérifiées et sourcées pour éviter les erreurs.",
  },
  {
    img: "/testimonials/support.webp",
    name: "Accélérer la résolution des tickets",
    title: "Application Support",
    quote:
      "Gagnez du temps : l’IA retrouve la bonne réponse dans la base de connaissances et vous aide à résoudre les tickets plus vite.",
  },
  {
    img: "/testimonials/it.webp",
    name: "Gagner du temps sur les infos techniques",
    title: "Application Technique / IT",
    quote:
      "Accédez en un clic aux directives IT et procédures internes, sans passer des heures dans la documentation.",
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
      className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-2xl sm:aspect-3/4 sm:w-96"
    >
      <img
        alt=""
        src={img}
        className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white">{children}</p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">{name}</p>
          <p className="text-sm/6 font-medium">
            <span className="text-blue-500">{title}</span>
          </p>
        </figcaption>
      </figure>
    </motion.div>
  );
}

function CallToAction() {
  return (
    <div>
      <p className="max-w-sm text-sm/6 text-gray-600">
        Libérez du temps et augmentez la productivité de votre entreprise grâce
        à Aliénor.
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

export function UseCases() {
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
    <div className="overflow-hidden pb-32">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Heading as="h3" className="mt-2 max-w-3xl">
            Découvrez comment Aliénor vous aide au quotidien
          </Heading>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          "mt-16 flex gap-6 px-(--scroll-padding)",
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
            {testimonials.map(({ name }, testimonialIndex) => (
              <Headless.Button
                key={testimonialIndex}
                onClick={() => scrollTo(testimonialIndex)}
                data-active={
                  activeIndex === testimonialIndex ? true : undefined
                }
                aria-label={`Scroll to testimonial from ${name}`}
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
