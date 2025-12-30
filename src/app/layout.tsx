import type { ReactNode } from "react";
import { Inter, Roboto_Mono } from "next/font/google";
import "@/styles/tailwind.css";

const geistSans = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
