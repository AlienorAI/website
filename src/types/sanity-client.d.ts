declare module "@sanity/client" {
  export interface SanityClient {
    [key: string]: unknown;
  }
}

declare module "@sanity/icons" {
  import type { ComponentType, SVGProps } from "react";
  export const ImageIcon: ComponentType<SVGProps<SVGSVGElement>>;
}
