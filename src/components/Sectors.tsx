import SectionLabel from "./SectionLabel";
import { sectorsSection } from "@/lib/content";

const SPEEDS = ["44s", "56s", "50s"];

export default function Sectors() {
  return (
    <section className="overflow-hidden bg-brand py-24 md:py-32">
      <div className="container-base">
        <SectionLabel tone="light">{sectorsSection.label}</SectionLabel>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
          {sectorsSection.body}
        </p>
      </div>

      <div className="mt-14 space-y-4">
        {sectorsSection.rows.map((row, i) => (
          <div key={i} className="relative flex overflow-hidden">
            <div
              className="marquee-track gap-4"
              style={{
                animationDuration: SPEEDS[i],
                animationDirection: i % 2 === 1 ? "reverse" : "normal",
              }}
            >
              {/* Duplicated once so the -50% translation loops seamlessly */}
              {[...row, ...row, ...row, ...row, ...row, ...row].map((sector, j) => (
                <span
                  key={`${sector}-${j}`}
                  className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/80"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
