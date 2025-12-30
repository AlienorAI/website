import { image } from "@/sanity/image";
import { getPostsForFeed } from "@/sanity/queries";
import { Feed } from "feed";
import assert from "node:assert";
import { getDictionary } from "@/i18n/dictionaries";
import { i18n, type Locale } from "@/i18n/config";

function extractLocale(pathname: string): Locale {
  let [, maybeLocale] = pathname.split("/");
  return i18n.locales.includes(maybeLocale as Locale)
    ? (maybeLocale as Locale)
    : i18n.defaultLocale;
}

export async function GET(req: Request) {
  let url = new URL(req.url);
  let siteUrl = url.origin;
  let locale = extractLocale(url.pathname);
  let dictionary = await getDictionary(locale);
  let localePath = `/${locale}`;

  let feed = new Feed({
    title: dictionary.blog.metadata.title,
    description: dictionary.blog.metadata.description,
    author: {
      name: dictionary.navbar.brand,
      email: "contact@alienor.ai",
    },
    id: `${siteUrl}${localePath}`,
    link: `${siteUrl}${localePath}`,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `${new Date().getFullYear()} ${dictionary.navbar.brand}`,
    feedLinks: {
      rss2: `${siteUrl}${localePath}/blog/feed.xml`,
    },
  });

  let { data: posts } = await getPostsForFeed();

  posts.forEach(
    (
      post: {
        title?: string;
        slug?: string;
        excerpt?: string;
        publishedAt?: string;
        mainImage?: unknown;
        author?: { name?: string };
      },
    ) => {
      try {
        assert(typeof post.title === "string");
        assert(typeof post.slug === "string");
        assert(typeof post.excerpt === "string");
        assert(typeof post.publishedAt === "string");
    } catch (error) {
      console.log("Post is missing required fields for RSS feed:", post, error);
      return;
    }

    feed.addItem({
      title: post.title,
      id: post.slug,
      link: `${siteUrl}${localePath}/blog/${post.slug}`,
      content: post.excerpt,
      image: post.mainImage
        ? image(post.mainImage)
            .size(1200, 800)
            .format("jpg")
            .url()
            .replaceAll("&", "&amp;")
        : undefined,
      author: post.author?.name ? [{ name: post.author.name }] : [],
        contributor: post.author?.name ? [{ name: post.author.name }] : [],
        date: new Date(post.publishedAt),
      });
    },
  );

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      "content-type": "application/xml",
      "cache-control": "s-maxage=31556952",
    },
  });
}
