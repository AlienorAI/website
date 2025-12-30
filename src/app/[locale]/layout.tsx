import { SanityLive } from "@/sanity/live";
import { revalidateSyncTags } from "@/sanity/revalidateSyncTags";
import "@/styles/tailwind.css";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
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

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
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
