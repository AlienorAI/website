"use client";

import posthog from "posthog-js";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
    capture_pageview: "history_change",
    capture_performance: true,
    capture_exceptions: true,
    debug: process.env.NODE_ENV === "development",
  });
}
