import { portfolio } from "@/data/portfolio";
import { BrutalCard } from "@/components/ui/BrutalCard";
import { SectionShell } from "@/components/ui/SectionShell";

export function AchievementsSection() {
  return (
    <SectionShell id="achievements" tag="highlights" title="Achievements">
      <p className="neo-intro-strip w-fit bg-white">Leadership, consistency, and execution beyond coursework</p>

      <div className="neo-grid-3">
        {portfolio.achievements.map((achievement, index) => (
          <BrutalCard
            key={achievement.title}
            tone={achievement.tone}
            className={`${index % 2 === 0 ? "-rotate-[0.8deg]" : "rotate-[0.8deg]"}`}
          >
            <h3 className="text-4xl leading-[0.9] sm:text-[2.4rem]">{achievement.title}</h3>
            <p className="mt-4 font-mono text-sm leading-relaxed">{achievement.detail}</p>
          </BrutalCard>
        ))}
      </div>
    </SectionShell>
  );
}
