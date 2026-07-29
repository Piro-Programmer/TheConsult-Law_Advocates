import Link from "next/link";
import Button from "./Button";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { blogsSection } from "@/lib/content";

export default function Blogs() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-base">
        <Reveal>
          <SectionLabel>{blogsSection.label}</SectionLabel>
        </Reveal>

        <div className="mt-7 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <h2 className="max-w-2xl font-display text-3xl font-light leading-[1.15] tracking-tight text-ink md:text-5xl">
              {blogsSection.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href={blogsSection.cta.href} variant="outline">
              {blogsSection.cta.label}
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blogsSection.posts.map((post, i) => (
            <Reveal key={post.href} delay={i * 0.08}>
              <Link
                href={post.href}
                className="group flex h-full flex-col rounded-3xl border border-ink/10 p-8 transition-colors duration-300 hover:border-brand/30"
              >
                <span className="self-start rounded-full bg-brand/5 px-3.5 py-1.5 text-xs text-brand">
                  {post.category}
                </span>
                <h3 className="mt-6 font-display text-lg font-normal leading-snug text-ink">
                  {post.title}
                </h3>
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
      </div>
    </section>
  );
}
