"use client";

import { i18n, type Locale } from "@/i18n/config";
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from "@/components/dropdown";
import { usePathname, useSearchParams } from "next/navigation";
import { clsx } from "clsx";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

function localeLabel(locale: Locale, labels?: Record<Locale, string>) {
  if (labels?.[locale]) {
    return labels[locale];
  }
  switch (locale) {
    case "fr":
      return "FR";
    case "en":
      return "EN";
    case "ja":
      return "日本語";
  }
}

function localeFlag(locale: Locale) {
  const base =
    "size-5 object-cover";
  const flagCode = locale === "en" ? "gb" : locale === "ja" ? "jp" : "fr";
  const alt =
    locale === "en"
      ? "United Kingdom flag"
      : locale === "ja"
        ? "Japan flag"
        : "France flag";
  switch (locale) {
    case "fr":
    case "en":
    case "ja":
      return (
        <img
          src={`https://kapowaz.github.io/circle-flags/flags/${flagCode}.svg`}
          alt={alt}
          className={base}
          loading="lazy"
        />
      );
  }
}

export function LocaleSwitcher({
  className,
  ariaLabel,
  labels,
}: {
  className?: string;
  ariaLabel?: string;
  labels?: Record<Locale, string>;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale;
    const targetPath = segments.join("/") || "/";
    const query = searchParams?.toString();
    return query ? `${targetPath}?${query}` : targetPath;
  };

  const currentLocale = (() => {
    if (!pathname) return i18n.defaultLocale;
    const [, maybeLocale] = pathname.split("/");
    return i18n.locales.includes(maybeLocale as Locale)
      ? (maybeLocale as Locale)
      : i18n.defaultLocale;
  })();

  return (
    <Dropdown>
      <DropdownButton
plain
        aria-label={ariaLabel}
        className={clsx( className)}
      >

          <span aria-hidden>{localeFlag(currentLocale)}</span>


        <ChevronDownIcon className="size-4" />
      </DropdownButton>
      <DropdownMenu>
        {i18n.locales.map((locale) => (
          <DropdownItem
            key={locale}
            href={redirectedPathname(locale)}
            data-active={locale === currentLocale ? true : undefined}
            aria-label={`Switch to ${localeLabel(locale, labels)} locale`}
          >
            <span className="flex items-center gap-2">
              <span aria-hidden>{localeFlag(locale)}</span>
              <span>{localeLabel(locale, labels)}</span>
            </span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
