"use client";

import * as Headless from "@headlessui/react";
import { i18n, type Locale } from "@/i18n/config";
import NextLink, { type LinkProps } from "next/link";
import React, { forwardRef, useMemo } from "react";
import { usePathname } from "next/navigation";
import { phTrackClick, type AnalyticsProps } from "@/lib/analytics";

export const Link = forwardRef(function Link(
  {
    phEvent,
    phProps,
    onClick,
    ...props
  }: LinkProps &
    React.ComponentPropsWithoutRef<"a"> &
    AnalyticsProps & {
      onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    },
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  const pathname = usePathname();
  const currentLocale = useMemo<Locale>(() => {
    if (!pathname) return i18n.defaultLocale;
    let [, maybeLocale] = pathname.split("/");
    return i18n.locales.includes(maybeLocale as Locale)
      ? (maybeLocale as Locale)
      : i18n.defaultLocale;
  }, [pathname]);

  const href =
    typeof props.href === "string" && props.href.startsWith("/")
      ? (() => {
          let [, maybeLocale] = props.href.split("/");
          if (i18n.locales.includes(maybeLocale as Locale)) {
            return props.href;
          }
          return `/${currentLocale}${props.href === "/" ? "" : props.href}`;
        })()
      : props.href;

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    try {
      onClick?.(e);
    } catch {
      // noop
    }
    if (phEvent) {
      try {
        phTrackClick(phEvent, phProps)(e);
      } catch {
        // noop
      }
    }
  }

  return (
    <Headless.DataInteractive
      {...props}
      href={href}
      ref={ref}
      as={NextLink}
      onClick={handleClick}
    />
  );
});
