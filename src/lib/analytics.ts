"use client";

import posthog from "posthog-js";

type Props = Record<string, any>;

export type AnalyticsProps = {
  phEvent?: string;
  phProps?: Props;
};

export function phCapture(event: string, properties?: Props) {
  try {
    if (typeof window === "undefined") return;
    if (!event) return;
    posthog.capture(event, {
      ...properties,
      $current_url:
        typeof location !== "undefined" ? location.href : undefined,
    });
  } catch {
    // noop
  }
}

export function phIdentify(distinctId: string, props?: Props) {
  try {
    if (typeof window === "undefined") return;
    if (!distinctId) return;
    posthog.identify(distinctId, props);
  } catch {
    // noop
  }
}

export function phSetProps(props: Props) {
  try {
    if (typeof window === "undefined") return;
    posthog.setPersonProperties?.(props);
  } catch {
    // noop
  }
}

export function phTrackClick(event: string, baseProps?: Props) {
  return function handler(e?: any) {
    try {
      const target = (e?.currentTarget ??
        e?.target) as HTMLElement | undefined;
      const label =
        target?.getAttribute?.("aria-label") ||
        target?.textContent?.trim() ||
        undefined;
      const href =
        (target as HTMLAnchorElement | undefined)?.href ||
        undefined;
      phCapture(event, { ...baseProps, label, href });
    } catch {
      // noop
    }
  };
}

export function phLoaded() {
  try {
    return typeof window !== "undefined";
  } catch {
    return false;
  }
}
