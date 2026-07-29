import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import BookCta from "@/components/BookCta";
import NewsletterSignup from "@/components/NewsletterSignup";
import Reveal from "@/components/Reveal";
import { blogCategories, posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blogs | The Consult Law",
  description: "Insights on the law that matters to your business.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHero
        label="Blogs"
        title="Insights on the law that matters to your business."
      />

      <section className="bg-white py-24 md:py-32">
        <div className="container-base">
          <ul className="flex flex-wrap gap-2">
            {blogCategories.map((cat, i) => (
              <li key={cat}>
                <span
                  className={`inline-block rounded-full px-4 py-2 text-xs transition-colors ${
                    i === 0
                      ? "bg-brand text-white"
                      : "border border-ink/10 text-ink/60"
                  }`}
                >
                  {cat}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-ink/10 p-8 transition-colors duration-300 hover:border-brand/30"
                >
                  <span className="self-start rounded-full bg-brand/5 px-3.5 py-1.5 text-xs text-brand">
                    {post.category}
                  </span>
                  <h2 className="mt-6 font-display text-lg font-normal leading-snug text-ink">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-grey">
                    {post.excerpt}
                  </p>
                  <p className="mt-7 text-xs text-grey">
                    By {post.author} · {post.date}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <BookCta />
    </>
  );
}
