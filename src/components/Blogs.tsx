import Link from "next/link";
import Button from "./Button";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { blogsSection } from "@/lib/content";

export default function Blogs() {
  return (
    <section className="bg-ink-deep py-[100px] xl:py-[150px]">
      <div className="container-wide flex flex-col gap-[70px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>{blogsSection.label}</Eyebrow>
            <h2 className="max-w-3xl font-display text-[32px] leading-[1.2] font-light tracking-[-1.26px] text-white lg:text-[38px] xl:text-[42px]">
              {blogsSection.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href={blogsSection.cta.href} variant="light" size="sm">
              {blogsSection.cta.label}
            </Button>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {blogsSection.posts.map((post, i) => (
            <Reveal key={post.href} delay={i * 0.08}>
              <Link
                href={post.href}
                className="group flex h-full flex-col border border-white/10 p-7 transition-colors duration-300 hover:border-white/25 xl:p-10"
              >
                <span className="self-start rounded-full border border-white/10 px-3.5 py-1.5 text-[13px] text-white/70">
                  {post.category}
                </span>
                <h3 className="mt-7 font-display text-[22px] leading-[1.2] font-light tracking-[-0.9px] text-white xl:text-[24px]">
                  {post.title}
                </h3>
                <p className="mt-4 flex-1 font-display text-[15px] leading-[1.5] font-light tracking-[-0.54px] text-white/70">
                  {post.excerpt}
                </p>
                <p className="mt-8 text-[13px] text-white/50">
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
