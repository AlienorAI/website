'use client'
import Image from "next/image"
import {Disclosure, DisclosureButton, DisclosurePanel,} from '@headlessui/react'
import {Bars2Icon} from '@heroicons/react/24/solid'
import {motion} from 'framer-motion'
import {Link} from './link'
import {PlusGrid, PlusGridRow} from './plus-grid'
import {Button} from "./button"
import {HomeIcon} from "@heroicons/react/16/solid";

const links = [
  { href: '/pricing', label: 'Tarifs' },
  { href: '/company', label: 'Notre mission' },
  { href: '/blog', label: 'Blog' }
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex gap-4  items-center">
      {links.map(({ href, label }) => (
<Button  className={"shrink-0 h-fit"} key={href}  href={href} plain>

            {label}

</Button>
      ))}
        <Button   className={"shrink-0 h-fit"}   href={"https://app.alienor.ai/login"} >
<HomeIcon/>
Se connecter

        </Button>
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-base font-medium text-gray-950">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">

              <Link className={"  gap-1.5 bg-blue-50 dark:bg-sky-900 px-2 py-1.5 rounded-full flex justify-center items-center font-medium"} href="/" title="Home">

              <Image
                  className={` dark:outline-white/10' size-7 rounded-full outline -outline-offset-1 outline-black/10 `}
                  priority
                  src={"/logo.webp"}
                  alt="Aliénor AI"
                  width={200}
                  height={200}
              />
              Aliénor AI
              </Link>

            {/*{banner && (*/}
            {/*  <div className="relative hidden items-center py-3 lg:flex">*/}
            {/*    {banner}*/}
            {/*  </div>*/}
            {/*)}*/}

          <DesktopNav />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  )
}
