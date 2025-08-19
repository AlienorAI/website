"use client";

import {
  AdjustmentsHorizontalIcon,
  CheckBadgeIcon,
  EyeSlashIcon,
  GlobeEuropeAfricaIcon,
  LockClosedIcon,
  ScaleIcon,
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

const testimonials = [
  {
    icon: GlobeEuropeAfricaIcon,
    name: "Souveraineté",
    title: "Hébergement 100% français",
    quote:
      "Aliénor est déployé sur des serveurs situés à Paris. Vos données ne quittent jamais le territoire français.",
  },
  {
    icon: ScaleIcon,
    name: "Conformité",
    title: "Cadre européen exigeant",
    quote:
      "Aliénor s’appuie sur les normes de sécurité les plus strictes (ISO, SOC, SecNumCloud) et applique le RGPD au-delà des obligations légales.",
  },
  {
    icon: LockClosedIcon,
    name: "Confidentialité",
    title: "Protection renforcée",
    quote:
      "Vos données sont protégées à chaque étape, qu’elles circulent ou qu’elles soient stockées, grâce aux meilleures pratiques de sécurité.",
  },
  {
    icon: EyeSlashIcon,
    name: "Transparence",
    title: "Aucune exploitation cachée",
    quote:
      "Nous n’utilisons jamais vos données pour entraîner des modèles externes ni à des fins commerciales.",
  },
  {
    icon: AdjustmentsHorizontalIcon,
    name: "Contrôle",
    title: "Maîtrise par votre entreprise",
    quote:
      "Vous décidez quelles données sont partagées et quelles intégrations sont autorisées, tout reste sous votre contrôle.",
  },
  {
    icon: CheckBadgeIcon,
    name: "Fiabilité",
    title: "Disponibilité continue",
    quote:
      "Notre infrastructure est conçue pour rester disponible et résiliente, même en cas d’incident majeur.",
  },
];

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
      <div className="mx-auto mt-10 hidden w-full max-w-2xl max-sm:px-6 sm:mt-16 md:block lg:max-w-7xl">
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map(({ title, quote, icon: Icon, name }) => (
            <li
              className={
                "group relative flex flex-col items-start rounded-2xl p-6 transition hover:bg-zinc-50"
              }
              key={title}
            >
              <div className="relative z-10 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-sm font-medium text-zinc-600 shadow-md ring-1 shadow-zinc-800/5 ring-white/20 ring-zinc-900/5 ring-inset group-hover:text-zinc-800 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Icon className={"size-3.5"} /> {name}
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800"></h2>
              <p className="relative z-10 mt-2 text-base text-zinc-800">
                {quote}
              </p>
            </li>
          ))}
        </ul>
      </div>
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
      className="relative flex h-fit w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-2xl sm:w-96"
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
