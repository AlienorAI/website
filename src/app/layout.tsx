import "@/styles/tailwind.css";
import { SanityLive } from "@/sanity/live";
import { revalidateSyncTags } from "@/sanity/revalidateSyncTags";
import { i18n, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const locale = i18n.locales.includes(params.locale) ? params.locale : i18n.defaultLocale;
  const dictionary = await getDictionary(locale);
  return {
    title: {
      template: dictionary.metadata.titleTemplate,
      default: dictionary.metadata.defaultTitle,
    },
    description: dictionary.metadata.description,
    metadataBase: new URL("https://alienor.ai"),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const locale = i18n.locales.includes(params.locale) ? params.locale : i18n.defaultLocale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Aliénor AI" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href={`/${locale}/blog/feed.xml`}
        />
      </head>
      <body
        className={`text-gray-950 antialiased ${geist.variable} ${geistMono.variable}`}
      >
        {children}
        <SanityLive revalidateSyncTags={revalidateSyncTags} />
        <Analytics />
      </body>
    </html>
  );
}
