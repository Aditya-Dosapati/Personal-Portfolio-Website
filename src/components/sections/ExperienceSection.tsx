import { portfolio } from "@/data/portfolio";
import { BrutalCard } from "@/components/ui/BrutalCard";
import { SectionShell } from "@/components/ui/SectionShell";

export function ExperienceSection() {
  return (
    <SectionShell id="experience" tag="experience" title="Experience">
      <p className="neo-intro-strip w-fit bg-white">Professional exposure shaped by practical machine learning work</p>

      {portfolio.experience.map((item) => (
        <BrutalCard key={item.company} tone="white" className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <p className="inline-block border-2 border-black bg-yellow-300 px-2 py-1 font-mono text-[10px] uppercase tracking-wider">
              {item.period}
            </p>
            <h3 className="mt-4 text-4xl leading-[0.9] sm:text-[2.9rem]">{item.company}</h3>
            <p className="mt-3 border-2 border-black bg-cyan-300 p-3 font-mono text-xs uppercase">{item.role}</p>
            <p className="mt-5 font-mono text-sm leading-relaxed sm:text-[0.96rem]">{item.focus}</p>
          </div>

          <div className="border-4 border-black bg-white p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em]">What I Learned</p>
            <ul className="mt-4 space-y-2 font-mono text-sm leading-relaxed">
              {item.highlights.map((highlight) => (
                <li key={highlight}>- {highlight}</li>
              ))}
            </ul>
          </div>
        </BrutalCard>
      ))}
    </SectionShell>
  );
}
