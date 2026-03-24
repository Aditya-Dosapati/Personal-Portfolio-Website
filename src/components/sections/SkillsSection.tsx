import { portfolio } from "@/data/portfolio";
import { BrutalCard } from "@/components/ui/BrutalCard";
import { SectionShell } from "@/components/ui/SectionShell";

export function SkillsSection() {
  return (
    <SectionShell id="skills" tag="skills" title="Skills">
      <div className="neo-grid-2">
        {portfolio.skills.map((skill, index) => (
          <BrutalCard
            key={skill.title}
            tone={skill.tone}
            className={`${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
          >
            <p className="mb-2 inline-block border-2 border-black bg-white px-2 py-1 font-mono text-[10px] uppercase tracking-wider">
              Category 0{index + 1}
            </p>
            <h3 className="text-3xl uppercase sm:text-[2.05rem]">{skill.title}</h3>
            <ul className="mt-5 space-y-2.5 font-mono text-sm leading-relaxed">
              {skill.items.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </BrutalCard>
        ))}
      </div>
    </SectionShell>
  );
}