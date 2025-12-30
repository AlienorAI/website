export const i18n = {
  defaultLocale: "en",
  locales: ["fr", "en", "ja"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
