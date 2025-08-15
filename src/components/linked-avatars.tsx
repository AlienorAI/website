'use client'

import { CheckIcon } from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

const transition = {
  duration: 0.75,
  repeat: Infinity,
  repeatDelay: 1.25,
}

function Rings() {
    const transition = {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
    };

    return (
        <svg
            viewBox="0 0 500 500"
            fill="none"
            className={clsx(
                'col-start-1 row-start-1 size-full',
                'mask-[linear-gradient(to_bottom,black_90%,transparent),radial-gradient(circle,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] mask-intersect',
            )}
        >
            {Array.from(Array(42).keys()).map((n) => (
                <motion.circle
                    key={n}
                    initial="idle"
                    animate="active"
                    variants={{
                        idle: {
                            scale: 1,
                            strokeOpacity: 0.15,
                        },
                        active: {
                            scale: [1, 1.08, 1],
                            strokeOpacity: [0.15, 0.3, 0.15],
                            transition: { ...transition, delay: n * 0.05 },
                        },
                    }}
                    cx="250"
                    cy="250"
                    r={n * 14 + 4}
                    className="stroke-white"
                />
            ))}
        </svg>
    );

}

function Checkmark() {
  return (
      <div className="z-10 col-start-1 row-start-1 flex items-center justify-center">
          <motion.div


              variants={{
                  idle: { scale: 1 },
                  active: {
                      scale: [1, 1.15, 1],
                      transition: { ...transition, duration: 0.75 },
                  },
              }}
              className="from-primary flex size-3 items-center justify-center rounded-full bg-linear-to-t to-cyan-300 shadow-xs"
          ></motion.div>
      </div>
  )
}

function Photos() {
  return (
      <div className="z-10 col-start-1 row-start-1">
          <div className="mx-auto flex size-full max-w-md items-center justify-around">
              <div className="bg-primary/15 ring-primary/10 relative size-20 rounded-full ring-4 dark:bg-white/15 dark:ring-white/15">
                  <img
                      src={"/emojis/rocket.webp"}
                      className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2"
                      alt="Racing car Noto emoji"
                  />
              </div>
              <div className="bg-primary/15 ring-primary/10 relative size-20 rounded-full ring-4 dark:bg-white/15 dark:ring-white/15">
                  <img
                      src={"/flags/france.svg"}
                      className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2"
                      alt="France emoji"
                  />
              </div>
          </div>
      </div>
  )
}

export function LinkedAvatars() {
  return (
    <div aria-hidden="true" className="isolate mx-auto grid h-full grid-cols-1">
      <Rings />
      <Photos />
      <Checkmark />
    </div>
  )
}
