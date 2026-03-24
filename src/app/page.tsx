import { AboutSection } from "@/components/sections/AboutSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ExploringSection } from "@/components/sections/ExploringSection";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { DecorativeLayer, SectionDivider } from "@/components/ui/DecorativeLayer";
import { NeoLinkButton } from "@/components/ui/NeoLinkButton";
import { portfolio } from "@/data/portfolio";

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
};

async function getGithubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      "https://api.github.com/users/Aditya-Dosapati/repos?sort=updated&per_page=6",
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return [];
    }

    const repos = (await response.json()) as GitHubRepo[];
    return repos;
  } catch {
    return [];
  }
}

export default async function Home() {
  const repos = await getGithubRepos();
  const navToneClasses = {
    white: "bg-white",
    cyan: "bg-cyan-300",
    red: "bg-red-300",
    yellow: "bg-yellow-300",
  } as const;

  return (
    <main className="mx-auto w-full max-w-[94rem] px-4 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
      <DecorativeLayer />

      <div className="neo-topbar relative border-4 border-black bg-yellow-300 p-4 sm:p-5 shadow-[12px_12px_0_0_#000]">
        <div className="neo-noise absolute inset-0 opacity-20" aria-hidden="true" />
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-5">
          <p className="neo-kicker">Aditya Dosapati // Portfolio</p>
          <nav className="flex flex-wrap gap-2.5 sm:gap-3">
            {portfolio.navigation.map((item) => (
              <NeoLinkButton
                key={item.label}
                href={item.href}
                className={`${navToneClasses[item.tone]} px-3.5 py-2.5 text-[10px] tracking-[0.16em] sm:px-4 sm:text-xs`}
              >
                {item.label}
              </NeoLinkButton>
            ))}
          </nav>
        </div>
      </div>

      <div className="neo-section-cluster">
        <HeroSection />
        <AboutSection />
        <SectionDivider label="Core Skills" />
        <SkillsSection />
        <SectionDivider label="Selected Work" />
        <ProjectsSection />
        <ExperienceSection />
        <TimelineSection />
        <AchievementsSection />
        <CertificationsSection />
        <SectionDivider label="Open Source and Exploration" />
        <GitHubSection repos={repos} />
        <ExploringSection />
        <ContactSection />
      </div>

      <footer className="neo-frame mt-20 p-6 text-center font-mono text-xs uppercase tracking-[0.19em] sm:mt-24 sm:text-sm">
        Built with Next.js, React, and TailwindCSS
      </footer>
    </main>
  );
}
