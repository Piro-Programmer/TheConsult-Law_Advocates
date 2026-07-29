import { notFound } from "next/navigation";
import PageHero from "./PageHero";
import Prose from "./Prose";
import { getLegalPage } from "@/lib/legal";

/** Shared template for the four long-form legal pages. */
export default function LegalPageView({ slug }: { slug: string }) {
  const page = getLegalPage(slug);
  if (!page) notFound();

  return (
    <>
      <PageHero label="Legal" title={page.title} body={page.intro} />

      <section className="bg-white py-20 md:py-28">
        <div className="container-base">
          <Prose>
            {page.blocks.map((block, i) => (
              <div key={i}>
                {block.heading && <h3>{block.heading}</h3>}
                {block.paragraphs.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
            ))}
          </Prose>
        </div>
      </section>
    </>
  );
}
