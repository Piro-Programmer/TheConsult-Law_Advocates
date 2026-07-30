import Eyebrow from "./Eyebrow";
import { sectorsSection } from "@/lib/content";

const SPEEDS = ["44s", "56s", "50s"];

export default function Sectors() {
  return (
    <section className="overflow-hidden bg-ink-deep py-[100px] xl:py-[150px]">
      <div className="container-wide flex flex-col gap-5">
        <Eyebrow>{sectorsSection.label}</Eyebrow>
        <p className="max-w-3xl font-display text-[16px] leading-[1.5] font-light tracking-[-0.54px] text-white/70 xl:text-[18px]">
          {sectorsSection.body}
        </p>
      </div>

      <div className="mt-[70px] space-y-4">
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
                  className="rounded-full border border-white/10 px-6 py-3 font-display text-[16px] leading-[1.2] font-light tracking-[-0.54px] whitespace-nowrap text-white xl:text-[18px]"
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
