import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BookCta from "@/components/BookCta";
import NewsletterSignup from "@/components/NewsletterSignup";
import Prose from "@/components/Prose";
import SectionLabel from "@/components/SectionLabel";
import { authorBio, getPost, posts } from "@/lib/posts";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | The Consult Law`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-brand pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/60 to-brand/30" />
        <div className="container-base relative max-w-4xl">
          <SectionLabel tone="light">{post.category}</SectionLabel>
          <h1 className="mt-7 font-display text-3xl font-light leading-[1.12] tracking-tight text-white md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {post.excerpt}
          </p>
          <p className="mt-8 text-sm text-white/50">
            By {post.author} · {post.date}
          </p>
        </div>
      </section>

      <article className="bg-white py-20 md:py-28">
        <div className="container-base">
          <h2 className="max-w-3xl font-display text-2xl font-light leading-snug tracking-tight text-ink md:text-3xl">
            {post.lede}
          </h2>

          <div className="mt-10">
            <Prose>
              {post.body.map((block, i) => {
                if (block.type === "ul") {
                  return (
                    <ul key={i}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
                if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
                return <p key={i}>{block.text}</p>;
              })}
            </Prose>
          </div>

          <div className="mt-16 max-w-3xl rounded-3xl bg-cream p-8">
            <h3 className="font-display text-base font-normal text-ink">
              About {authorBio.name}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-grey">
              {authorBio.role}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-grey">
              {authorBio.line}
            </p>
          </div>

          <div className="mt-14 max-w-3xl">
            <NewsletterSignup />
          </div>

          <div className="mt-12">
            <Link
              href="/blogs"
              className="text-sm font-medium text-brand hover:underline"
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <BookCta />
    </>
  );
}
