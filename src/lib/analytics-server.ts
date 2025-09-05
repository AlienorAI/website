import { PostHog } from "posthog-node";

type Props = Record<string, any>;

// Keep a single instance across hot reloads in dev
declare global {
  // eslint-disable-next-line no-var
  var __posthogServer: PostHog | undefined;
}

function resolveKey(): string | undefined {
  return (
    process.env.POSTHOG_KEY ||
    process.env.POSTHOG_PROJECT_API_KEY ||
    process.env.NEXT_PUBLIC_POSTHOG_KEY
  );
}

function resolveHost(): string {
  return (
    process.env.POSTHOG_HOST ||
    process.env.NEXT_PUBLIC_POSTHOG_HOST ||
    "https://eu.i.posthog.com"
  );
}

export function getPostHogServer(): PostHog | null {
  if (global.__posthogServer) return global.__posthogServer;

  const key = resolveKey();
  if (!key) return null;

  const host = resolveHost();

  const client = new PostHog(key, {
    host,
    flushAt: 1,
    flushInterval: 0,
  });

  global.__posthogServer = client;
  return client;
}

/**
 * Capture a server-side analytics event. Safe no-op if PostHog is not configured.
 */
export async function captureServer(
  event: string,
  properties?: Props,
  distinctId: string = "system",
): Promise<void> {
  try {
    const ph = getPostHogServer();
    if (!ph || !event) return;

    ph.capture({
      event,
      distinctId,
      properties,
    });

    // Ensure delivery on short-lived executions (e.g. serverless)
    await ph.flush();
  } catch {
    // noop
  }
}

/**
 * Flush any pending events (optional)
 */
export async function flushServer(): Promise<void> {
  try {
    const ph = getPostHogServer();
    if (!ph) return;

    await ph.flush();
  } catch {
    // noop
  }
}
