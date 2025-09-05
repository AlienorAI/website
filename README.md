# Radiant

Radiant is a [Tailwind Plus](https://tailwindcss.com/plus) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org), with a blog powered by [Sanity](https://www.sanity.io).

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, create a new Sanity project to power the blog within this template:

```bash
npm create sanity@latest -- --env=.env.local --create-project "Radiant Blog" --dataset production
```

This will prompt you to create a new Sanity account if you don't have one already. When asked "Would you like to add configuration files for a Sanity project in this Next.js folder?", choose "n".

Next, optionally import the demo seed data for the blog:

```bash
npx sanity@latest dataset import seed.tar.gz
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

To manage your blog content, visit the embedded Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio).

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [Sanity](https://www.sanity.io) - the Sanity website

## Analytics (PostHog)

This project is instrumented with PostHog for marketing analytics, exception tracking, and optional server-side event capture.

- Client initialization
  - Initialized via Next.js App Router client instrumentation hook in src/instrumentation-client.ts.
  - Uses a proxy at /ingest to avoid ad-blocker issues and automatically routes to the EU cluster.
  - Default config enables exception capture and development debugging.

- Environment variables
  - NEXT_PUBLIC_POSTHOG_KEY (required)
  - NEXT_PUBLIC_POSTHOG_HOST (optional, defaults to EU cluster when using the /ingest proxy)

- Proxy rewrites
  - next.config.mjs configures:
    - /ingest/static/:path* -&gt; https://eu-assets.i.posthog.com/static/:path*
    - /ingest/:path* -&gt; https://eu.i.posthog.com/:path*
  - skipTrailingSlashRedirect is enabled to support PostHog API trailing slashes.

- Client helpers
  - src/lib/analytics.ts provides:
    - phCapture(event, props?) to capture custom events
    - phTrackClick(event, baseProps?) helper for click handlers (adds label and href automatically)
    - phIdentify(distinctId, props?) and phSetProps(props) for identity profile management

- Component instrumentation
  - Link and Button accept optional analytics props:
    - phEvent: string (event name)
    - phProps: Record&lt;string, any&gt; (custom properties)
  - Example:
    - &lt;Button href="/pricing" phEvent="cta_click" phProps={{ location: "home_hero", action: "view_pricing" }} /&gt;
    - &lt;Link href="/blog" phEvent="nav_link_click" phProps={{ location: "navbar_desktop", href: "/blog" }} /&gt;

- Server-side capture
  - src/lib/analytics-server.ts exports captureServer(event, properties, distinctId?) for API routes and server functions.
  - Example: src/app/api/revalidate-blog/route.ts captures success and unauthorized attempts.

- Pre-tagged events
  - cta_click (home hero demo button, home hero pricing button, footer demo button)
  - nav_link_click (navbar desktop/mobile links)
  - login_click (navbar login)
  - social_click (footer X/LinkedIn)
  - blog_revalidate, blog_revalidate_denied (server-side revalidate endpoint)

- Privacy and compliance
  - Exception capture is enabled; do not include PII in event properties.
  - Session recording is not enabled by default. Enable from the PostHog UI (recommended) with privacy masking, or add client config if required.

- Debugging
  - Debug is enabled in development via posthog.init debug flag.
  - Verify pageviews and events in the PostHog Live Events feed.
