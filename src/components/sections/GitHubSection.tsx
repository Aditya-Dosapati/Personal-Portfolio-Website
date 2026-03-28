import { portfolio } from "@/data/portfolio";
import { BrutalCard } from "@/components/ui/BrutalCard";
import { NeoLinkButton } from "@/components/ui/NeoLinkButton";
import { SectionShell } from "@/components/ui/SectionShell";

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
};

type GitHubSectionProps = {
  repos: GitHubRepo[];
};

export function GitHubSection({ repos }: GitHubSectionProps) {
  const repositoryCount = 18;
  const totalStars = 35;

  const customDescriptions: Record<string, string> = {
    "Aditya-Dosapati": "Primary profile repository with README overview and project index.",
    "Qryptic-Trans":
      "QRNG-based Dart app for secure communication with non-traceable OTP generation and encryption-driven transfer.",
  };
  const customLanguages: Record<string, "C" | "Python" | "Dart" | "TypeScript"> = {
    "Cardiocheck-Heart-Health-App": "Python",
    VidhyaVaaradhi: "Python",
  };

  const pinnedRepoNames = [
    "Aditya-Dosapati",
    "Quantum-Assisted-Pattern-Matching",
    "Margsathi-Mobile-Layer",
    "Personal-Portfolio-Website",
    "Qryptic-Trans",
    "Dev-Olab",
    "Cardiocheck-Heart-Health-App",
    "VidhyaVaaradhi",
  ] as const;
  const pinnedRepos = pinnedRepoNames.map((repoName, index) => {
    const foundRepo = repos.find((repo) => repo.name.toLowerCase() === repoName.toLowerCase());

    if (foundRepo) {
      return foundRepo;
    }

    return {
      id: -(index + 1),
      name: repoName,
      description: "Pinned repository",
      html_url: `${portfolio.github.profile}/${repoName}`,
      stargazers_count: 0,
      language: null,
    } as GitHubRepo;
  });

  const allowedLanguages = ["C", "Python", "Dart", "TypeScript"] as const;
  const languageLabelMap: Record<(typeof allowedLanguages)[number], string> = {
    C: "C",
    Python: "Python",
    Dart: "Dart",
    TypeScript: "TS",
  };
  const languages = [...allowedLanguages];

  return (
    <SectionShell id="github" tag="code" title="GitHub">
      <p className="mb-7 -rotate-1 border-4 border-black bg-white p-3 font-mono text-xs uppercase tracking-wider shadow-[8px_8px_0_0_#000]">
        GitHub dashboard for {portfolio.github.username}
      </p>

      <div className="mb-9 grid gap-4 sm:grid-cols-3">
        <BrutalCard tone="yellow" className="p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em]">Repositories</p>
          <p className="neo-metric mt-3">{repositoryCount}</p>
        </BrutalCard>
        <BrutalCard tone="red" className="p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em]">Total Stars</p>
          <p className="neo-metric mt-3">{totalStars}</p>
        </BrutalCard>
        <BrutalCard tone="white" className="p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em]">Languages</p>
          <p className="mt-3 text-4xl leading-none">{languages.length || 0}</p>
          <p className="mt-2 font-mono text-[11px] uppercase">
            {languages.map((lang) => languageLabelMap[lang]).join(" / ") || "N/A"}
          </p>
        </BrutalCard>
      </div>

      {pinnedRepos.length === 0 ? (
        <BrutalCard tone="white">
          <p className="font-mono text-sm">
            Unable to load repositories right now. Please check network access or GitHub API availability.
          </p>
        </BrutalCard>
      ) : (
        <div className="neo-grid-2">
          {pinnedRepos.map((repo, index) => {
            const overriddenLanguage = customLanguages[repo.name];
            const allowedLanguage = overriddenLanguage ?? allowedLanguages.find((lang) => lang === repo.language);
            const repoLanguage = allowedLanguage ? languageLabelMap[allowedLanguage] : "N/A";
            const repoDescription = customDescriptions[repo.name] ?? repo.description ?? "No description provided.";

            return (
              <BrutalCard key={repo.id} tone={index % 2 === 0 ? "white" : "cyan"}>
              <h3 className="text-3xl uppercase leading-[0.92] sm:text-[2.25rem]">{repo.name.replaceAll("-", " ")}</h3>
              <p className="mt-4 min-h-16 font-mono text-sm leading-relaxed sm:text-[0.95rem]">
                {repoDescription}
              </p>

              <div className="mt-4 flex flex-wrap gap-2 font-mono text-[11px] uppercase">
                <span className="border-2 border-black bg-yellow-300 px-2 py-1">Stars: {repo.stargazers_count}</span>
                <span className="border-2 border-black bg-red-300 px-2 py-1">
                  Language: {repoLanguage}
                </span>
              </div>

              <NeoLinkButton
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-white px-5 py-2.5"
              >
                Open Repo
              </NeoLinkButton>
              </BrutalCard>
            );
          })}
        </div>
      )}

      <NeoLinkButton href={portfolio.github.profile} target="_blank" rel="noopener noreferrer" className="mt-9 inline-block bg-white px-6 py-3 text-sm">
        Visit Full GitHub Profile
      </NeoLinkButton>
    </SectionShell>
  );
}