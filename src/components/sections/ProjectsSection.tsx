import { portfolio } from "@/data/portfolio";
import { BrutalCard } from "@/components/ui/BrutalCard";
import { NeoLinkButton } from "@/components/ui/NeoLinkButton";
import { SectionShell } from "@/components/ui/SectionShell";

export function ProjectsSection() {
  return (
    <SectionShell id="projects" tag="work" title="Projects">
      <p className="neo-intro-strip w-fit bg-white">From problem framing to shipped solution</p>

      <div className="neo-grid-2">
        {portfolio.projects.map((project, index) => (
          <BrutalCard
            key={project.title}
            tone={index % 2 === 0 ? "white" : "yellow"}
            className={`${
              index % 2 === 0 ? "-rotate-[0.9deg]" : "rotate-[0.9deg]"
            }`}
          >
            <p className="mb-3 inline-block border-2 border-black bg-red-300 px-2 py-1 font-mono text-[10px] uppercase tracking-wider">
              project 0{index + 1}
            </p>
            <h3 className="text-4xl leading-[0.9] sm:text-[2.45rem]">{project.title}</h3>
            <p className="mt-5 border-2 border-black bg-white p-3 font-mono text-[11px] uppercase leading-relaxed">
              Problem: {project.problem}
            </p>
            <p className="mt-4 font-mono text-sm leading-relaxed sm:text-[0.98rem]">Solution: {project.solution}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border-2 border-black bg-cyan-300 px-2 py-1 font-mono text-[11px] uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>

            <NeoLinkButton
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block bg-red-300 px-5 py-2.5"
            >
              Open Project
            </NeoLinkButton>
          </BrutalCard>
        ))}
      </div>
    </SectionShell>
  );
}