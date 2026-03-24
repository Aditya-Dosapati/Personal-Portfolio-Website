export function DecorativeLayer() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="neo-orb neo-orb-cyan left-[4%] top-[14%]" />
      <div className="neo-orb neo-orb-red right-[6%] top-[32%]" />
      <div className="neo-orb neo-orb-yellow left-[18%] bottom-[16%]" />
      <div className="neo-grid-fade absolute inset-0" />
    </div>
  );
}

type SectionDividerProps = {
  label: string;
};

export function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div className="relative border-4 border-black bg-black p-1 shadow-[6px_6px_0_0_#000]">
      <div className="neo-divider-track overflow-hidden bg-white py-2">
        <div className="neo-divider-scroll whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.25em] text-black">
          <span className="mr-8">{label}</span>
          <span className="mr-8">Machine Learning</span>
          <span className="mr-8">AI Engineering</span>
          <span className="mr-8">Creative Build</span>
          <span className="mr-8">{label}</span>
          <span className="mr-8">Machine Learning</span>
          <span className="mr-8">AI Engineering</span>
          <span className="mr-8">Creative Build</span>
        </div>
      </div>
    </div>
  );
}