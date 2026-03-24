import { portfolio } from "@/data/portfolio";
import { BrutalCard } from "@/components/ui/BrutalCard";
import { SectionShell } from "@/components/ui/SectionShell";

export function AboutSection() {
  return (
    <SectionShell id="about" tag="about" title="About">
      <BrutalCard className="grid gap-6 bg-white md:grid-cols-[1fr_230px]">
        <p className="max-w-2xl text-base leading-relaxed sm:text-lg">{portfolio.about}</p>

        <div className="h-fit border-4 border-black bg-yellow-300 p-3 font-mono text-xs uppercase shadow-[4px_4px_0_0_#000]">
          AI and ML student.
          <br />
          Product focused.
          <br />
          Innovation driven.
        </div>

        <div className="mt-2 flex flex-wrap gap-3 md:col-span-2">
          {portfolio.keywords.map((keyword) => (
            <span
              key={keyword.label}
              className={`border-2 border-black px-3 py-1 font-mono text-[11px] uppercase tracking-wide ${keyword.tone}`}
            >
              {keyword.label}
            </span>
          ))}
        </div>
      </BrutalCard>
    </SectionShell>
  );
}