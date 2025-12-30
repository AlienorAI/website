import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./src/i18n/config";

function hasLocale(pathname: string) {
  return i18n.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip internal and static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/studio") ||
    pathname.startsWith("/ingest") ||
    pathname === "/manifest.json" ||
    pathname === "/robots.txt" ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (hasLocale(pathname)) {
    return NextResponse.next();
  }

  const locale = i18n.defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
