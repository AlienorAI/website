"use client";

import {
  GlobeEuropeAfricaIcon,
  ScaleIcon,
  LockClosedIcon,
  AdjustmentsHorizontalIcon,
  CheckBadgeIcon,
  EyeSlashIcon,
} from "@heroicons/react/16/solid";
import {
  type HTMLMotionProps,
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { Container } from "./container";
import { Heading } from "./text";
import {
  type ForwardRefExoticComponent,
  type RefAttributes,
  type SVGProps,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import useMeasure, { type RectReadOnly } from "react-use-measure";
import { clsx } from "clsx";
import * as Headless from "@headlessui/react";

const testimonials = [
  {
    icon: GlobeEuropeAfricaIcon,
    name: "Souveraineté",
    title: "Hébergement en France",
    quote:
      "Vos données restent sur le territoire français, protégées par la législation locale.",
  },
  {
    icon: ScaleIcon,
    name: "Conformité",
    title: "RGPD stricte",
    quote:
      "Une gestion rigoureuse des données, conforme aux normes européennes.",
  },
  {
    icon: LockClosedIcon,
    name: "Confidentialité",
    title: "Chiffrement de bout en bout",
    quote:
      "Sécurisation des échanges et des données stockées avec les standards les plus avancés.",
  },
  {
    icon: AdjustmentsHorizontalIcon,
    name: "Contrôle",
    title: "Accès granulaire",
    quote:
      "Droits et permissions ajustables par utilisateur ou par équipe, pour un contrôle précis.",
  },
  {
    icon: CheckBadgeIcon,
    name: "Fiabilité",
    title: "Certifications reconnues",
    quote:
      "Aliénor respecte les standards : ISO/IEC 27001, ISO/IEC 27701, SOC 2 Type 2 et SecNumCloud.",
  },
  {
    icon: EyeSlashIcon,
    name: "Transparence",
    title: "Politique zéro rétention",
    quote:
      "Aucune utilisation à des fins publicitaires ou d’entraînement externe.",
  },
];

function TestimonialCard({
  name,
  title,
  icon: Icon,
  children,
}: {
  name: string;
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & RefAttributes<SVGSVGElement>
  >;
  children: React.ReactNode;
} & HTMLMotionProps<"div">) {
  return (
    <div className="col-span-1 flex h-fit flex-col justify-end rounded-2xl bg-gradient-to-b from-sky-700 to-sky-900">
      <figure className="p-10">
        <div className="mb-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white ring-1 ring-white/20 ring-inset">
            <Icon className={"size-3"} /> {name}
          </span>
        </div>
        <h4 className="text-xl/7 font-semibold text-white">{title}</h4>
        <p className="mt-3 text-sm/6 text-gray-200">{children}</p>
      </figure>
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
    <div className="w-full overflow-hidden py-32">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Heading as="h3" className="max-w-3xl">
            Sécurité et souveraineté au cœur de chaque réponse
          </Heading>
        </div>
      </Container>
      <div className="mx-auto mt-10 hidden w-full max-w-2xl gap-6 max-sm:px-6 sm:mt-16 md:grid md:grid-cols-3 lg:max-w-7xl">
        {testimonials.map(({ name, title, quote, icon }, testimonialIndex) => (
          <TestimonialCard
            key={testimonialIndex}
            name={name}
            title={title}
            icon={icon}
          >
            {quote}
          </TestimonialCard>
        ))}
      </div>{" "}
      <div
        ref={scrollRef}
        className={clsx([
          "mt-16 flex gap-6 px-(--scroll-padding) md:hidden",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth",
          "[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]",
        ])}
      >
        {testimonials.map(({ icon, name, title, quote }, testimonialIndex) => (
          <TestimonialMobileCard
            icon={icon}
            key={testimonialIndex}
            name={name}
            title={title}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(testimonialIndex)}
          >
            {quote}
          </TestimonialMobileCard>
        ))}
        <div className="w-2xl shrink-0 sm:w-216" />
      </div>
    </div>
  );
}

function TestimonialMobileCard({
  name,
  title,
  icon: Icon,
  children,
  bounds,
  scrollX,
  ...props
}: {
  name: string;
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & RefAttributes<SVGSVGElement>
  >;
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
      className="relative flex h-fit w-96 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-2xl"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-gradient-to-b from-sky-700 to-sky-900"
      />
      <figure className="relative p-10">
        <div className="mb-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white ring-1 ring-white/20 ring-inset">
            <Icon className={"size-3"} /> {name}
          </span>
        </div>
        <h4 className="text-xl/7 font-semibold text-white">{title}</h4>
        <p className="mt-3 text-sm/6 text-gray-200">{children}</p>
      </figure>
    </motion.div>
  );
}
