import { portfolio } from "@/data/portfolio";
import { BrutalCard } from "@/components/ui/BrutalCard";
import { SectionShell } from "@/components/ui/SectionShell";

export function ExploringSection() {
  return (
    <SectionShell id="exploring" tag="next" title="What I am Exploring">
      <p className="neo-intro-strip w-fit bg-cyan-300">Current tracks shaping my next generation of builds</p>

      <div className="neo-grid-2">
        {portfolio.exploring.map((item, index) => (
          <BrutalCard
            key={item.title}
            tone={index % 2 === 0 ? "cyan" : "white"}
            className={index % 2 === 0 ? "-rotate-[0.8deg]" : "rotate-[0.8deg]"}
          >
            <h3 className="text-4xl leading-[0.9] sm:text-[2.45rem]">{item.title}</h3>
            <p className="mt-5 font-mono text-sm leading-relaxed sm:text-[0.95rem]">{item.detail}</p>
          </BrutalCard>
        ))}
      </div>
    </SectionShell>
  );
}
