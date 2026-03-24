import { portfolio } from "@/data/portfolio";
import { BrutalCard } from "@/components/ui/BrutalCard";
import { SectionShell } from "@/components/ui/SectionShell";

export function CertificationsSection() {
  return (
    <SectionShell id="certifications" tag="proof" title="Certifications">
      <p className="neo-intro-strip w-fit bg-white">Validated skills with practical certification depth</p>

      <div className="neo-grid-2">
        {portfolio.certifications.map((cert, index) => (
          <BrutalCard
            key={cert.title}
            tone={cert.tone}
            className={`${index % 2 === 0 ? "-rotate-[0.8deg]" : "rotate-[0.8deg]"}`}
          >
            <p className="inline-block border-2 border-black bg-white px-2 py-1 font-mono text-[10px] uppercase tracking-wider">
              {cert.issuer}
            </p>
            <h3 className="mt-5 text-4xl leading-[0.9] sm:text-[2.45rem]">{cert.title}</h3>
            <p className="mt-4 font-mono text-sm uppercase tracking-wider">{cert.detail}</p>
          </BrutalCard>
        ))}
      </div>
    </SectionShell>
  );
}
