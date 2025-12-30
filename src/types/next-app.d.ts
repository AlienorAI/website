import type React from "react";

type ExtractRouteParams<Path extends string> =
  Path extends `${string}[${infer Param}]${infer Rest}`
    ? Param | ExtractRouteParams<Rest>
    : never;

type RouteParams<Path extends string> = [ExtractRouteParams<Path>] extends [never]
  ? Record<string, never>
  : Record<ExtractRouteParams<Path>, string>;

declare global {
  type PageProps<Path extends string = string> = {
    params: Promise<RouteParams<Path>>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
  };

  type LayoutProps<Path extends string = string> = {
    children: React.ReactNode;
    params: Promise<RouteParams<Path>>;
  };
}
