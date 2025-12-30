import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GradientBackground } from "@/components/gradient";
import { Link } from "@/components/link";
import { Navbar } from "@/components/navbar";
import { Heading, Lead } from "@/components/text";
import { image } from "@/sanity/image";
import {
  getCategories,
  getFeaturedPosts,
  getPosts,
  getPostsCount,
} from "@/sanity/queries";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpDownIcon,
  RssIcon,
} from "@heroicons/react/16/solid";
import { clsx } from "clsx";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import "dayjs/locale/en";
import "dayjs/locale/ja";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

type BlogCopy = Awaited<ReturnType<typeof getDictionary>>["blog"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  return {
    title: dictionary.blog.metadata.title,
    description: dictionary.blog.metadata.description,
  };
}

async function FeaturedPosts({
  copy,
}: {
  copy: BlogCopy;
}) {
  let { data: featuredPosts } = await getFeaturedPosts(3);

  if (featuredPosts.length === 0) {
    return;
  }

  return (
    <div className="mt-16 bg-linear-to-t from-gray-100 pb-14">
      <Container>
        <h2 className="text-2xl font-medium tracking-tight">
          {copy.featuredTitle}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <div
              key={post.slug}
              className="relative flex flex-col rounded-2xl bg-white p-2 shadow-md ring-1 shadow-black/5 ring-black/5"
            >
              {post.mainImage && (
                <img
                  alt={post.mainImage.alt || ""}
                  src={image(post.mainImage).size(1170, 780).url()}
                  className="aspect-3/2 w-full rounded-2xl object-cover"
                />
              )}
              <div className="flex flex-1 flex-col p-8">
                <div className="text-sm/5 text-gray-700">
                  {dayjs(post.publishedAt)
                    .format("dddd D MMMM YYYY")
                    .replace(/^\w/, (c) => c.toUpperCase())}
                </div>
                <div className="mt-2 text-base/7 font-medium">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </div>
                <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                  {post.excerpt}
                </div>
                {post.author && (
                  <div className="mt-6 flex items-center gap-3">
                    {post.author.image && (
                      <img
                        alt=""
                        src={image(post.author.image).size(64, 64).url()}
                        className="aspect-square size-6 rounded-full object-cover"
                      />
                    )}
                    <div className="text-sm/5 text-gray-700">
                      {post.author.name}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

async function Categories({
  selected,
  copy,
}: {
  selected?: string;
  copy: BlogCopy;
}) {
  let { data: categories } = await getCategories();

  if (categories.length === 0) {
    return;
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <Menu>
        <MenuButton className="flex items-center justify-between gap-2 font-medium">
          {categories.find(({ slug }) => slug === selected)?.title ||
            copy.categories.all}
          <ChevronUpDownIcon className="size-4 fill-gray-900" />
        </MenuButton>
        <MenuItems
          anchor="bottom start"
          className="min-w-40 rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
        >
          <MenuItem
            as={Link}
            href="/blog"
            data-selected={selected === undefined ? true : undefined}
            className="group grid grid-cols-[1rem_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-950/5"
          >
            <CheckIcon className="hidden size-4 group-data-selected:block" />
            <p className="col-start-2 text-sm/6">{copy.categories.all}</p>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem
              key={category.slug}
              as={Link}
              href={`/blog?category=${category.slug}`}
              data-selected={category.slug === selected ? true : undefined}
              className="group grid grid-cols-[16px_1fr] items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-950/5"
            >
              <CheckIcon className="hidden size-4 group-data-selected:block" />
              <p className="col-start-2 text-sm/6">{category.title}</p>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
      <Button color={"white"} href="/blog/feed.xml" className="gap-1">
        <RssIcon className="size-4" />
        {copy.rss}
      </Button>
    </div>
  );
}

async function Posts({
  page,
  category,
  copy,
}: {
  page: number;
  category?: string;
  copy: BlogCopy;
}) {
  let { data: posts } = await getPosts(
    (page - 1) * 5,
    page * 5,
    category,
  );

  if (posts.length === 0 && (page > 1 || category)) {
    notFound();
  }

  if (posts.length === 0) {
    return <p className="mt-6 text-gray-500">{copy.empty}</p>;
  }

  return (
    <div className="mt-6">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3"
        >
          <div>
            <div className="text-sm/5 max-sm:text-gray-700 sm:font-medium">
              {dayjs(post.publishedAt)
                .format("dddd D MMMM YYYY")
                .replace(/^\w/, (c) => c.toUpperCase())}
            </div>
            {post.author && (
              <div className="mt-2.5 flex items-center gap-3">
                {post.author.image && (
                  <img
                    alt=""
                    src={image(post.author.image).width(64).height(64).url()}
                    className="aspect-square size-6 rounded-full object-cover"
                  />
                )}
                <div className="text-sm/5 text-gray-700">
                  {post.author.name}
                </div>
              </div>
            )}
          </div>
          <div className="sm:col-span-2 sm:max-w-2xl">
            <h2 className="text-sm/5 font-medium">{post.title}</h2>
            <p className="mt-3 text-sm/6 text-gray-500">{post.excerpt}</p>
            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-1 text-sm/5 font-medium"
              >
                <span className="absolute inset-0" />
                {copy.readMore}
                <ChevronRightIcon className="size-4 fill-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

async function Pagination({
  page,
  category,
  copy,
}: {
  page: number;
  category?: string;
  copy: BlogCopy;
}) {
  function url(page: number) {
    let params = new URLSearchParams();

    if (category) params.set("category", category);
    if (page > 1) params.set("page", page.toString());

    return params.size !== 0 ? `/blog?${params.toString()}` : "/blog";
  }

  let totalPosts = (await getPostsCount(category)).data;
  let hasPreviousPage = page - 1;
  let previousPageUrl = hasPreviousPage ? url(page - 1) : undefined;
  let hasNextPage = page * 5 < totalPosts;
  let nextPageUrl = hasNextPage ? url(page + 1) : undefined;
  let pageCount = Math.ceil(totalPosts / 5);

  if (pageCount < 2) {
    return;
  }

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <Button
        color={"white"}
        href={previousPageUrl}
        disabled={!previousPageUrl}
      >
        <ChevronLeftIcon className="size-4" />
        {copy.previous}
      </Button>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              "size-7 rounded-lg text-center text-sm/7 font-medium",
              "data-hover:bg-gray-100",
              "data-active:shadow-sm data-active:ring-1 data-active:ring-black/10",
              "data-active:data-hover:bg-gray-50",
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <Button color={"white"} href={nextPageUrl} disabled={!nextPageUrl}>
        {copy.next}
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  );
}

export default async function Blog({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  dayjs.locale(locale === "fr" ? "fr" : locale === "ja" ? "ja" : "en");

  let pageParam = searchParams?.page;
  let page =
    pageParam && typeof pageParam === "string" && parseInt(pageParam) > 1
      ? parseInt(pageParam)
      : 1;

  let category =
    typeof searchParams?.category === "string"
      ? searchParams.category
      : undefined;

  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar nav={dictionary.navbar} localeSwitcher={dictionary.localeSwitcher} />
        <Heading as="h1" className="mt-16">
          {dictionary.blog.heroTitle}
        </Heading>
        <Lead className="mt-6 max-w-3xl">{dictionary.blog.heroLead}</Lead>
      </Container>
      {page === 1 && !category && <FeaturedPosts copy={dictionary.blog} />}
      <Container className="mt-16 pb-24">
        <Categories selected={category} copy={dictionary.blog} />
        <Posts page={page} category={category} copy={dictionary.blog} />
        <Pagination page={page} category={category} copy={dictionary.blog} />
      </Container>
      <Footer
        copy={dictionary.footer}
        legal={dictionary.legal}
        feedback={dictionary.feedback}
        brand={dictionary.navbar.brand}
        homeLabel={dictionary.navbar.home}
      />
    </main>
  );
}
