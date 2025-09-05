import { SanityLive } from "@/sanity/live";
import { revalidateSyncTags } from "@/sanity/revalidateSyncTags";
import "@/styles/tailwind.css";
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

export const metadata: Metadata = {
  title: {
    template: "%s - Aliénor AI",
    default: "Aliénor AI - L’IA qui connaît votre entreprise",
  },
  description:
    "L'assistant IA intégré au cœur de votre entreprise, qui comprend vos documents, vos outils et vos équipes, pour répondre à chaque question, en toute sécurité.",
  metadataBase: new URL("https://alienor.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Aliénor AI" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href="/blog/feed.xml"
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
