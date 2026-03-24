import { portfolio } from "@/data/portfolio";
import { SectionShell } from "@/components/ui/SectionShell";

export function TimelineSection() {
  return (
    <SectionShell id="timeline" tag="journey" title="Timeline">
      <p className="neo-intro-strip w-fit bg-cyan-300">A focused path from fundamentals to real-world systems</p>

      <div className="relative border-4 border-black bg-white p-8 sm:p-10 shadow-[10px_10px_0_0_#000]">
        <div className="absolute bottom-8 left-10 top-8 w-1 bg-black" aria-hidden="true" />

        <div className="space-y-12">
          {portfolio.timeline.map((item, index) => (
            <div key={`${item.year}-${item.title}`} className="relative pl-16">
              <div
                className={`absolute left-[22px] top-1 h-6 w-6 border-4 border-black ${
                  index % 3 === 0 ? "bg-yellow-300" : index % 3 === 1 ? "bg-cyan-300" : "bg-red-300"
                }`}
              />
              <p className="font-mono text-xs uppercase tracking-[0.2em]">{item.year}</p>
              <h3 className="mt-3 text-4xl leading-[0.9] sm:text-[2.55rem]">{item.title}</h3>
              <p className="mt-3 max-w-2xl font-mono text-sm leading-relaxed sm:text-[0.96rem]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}