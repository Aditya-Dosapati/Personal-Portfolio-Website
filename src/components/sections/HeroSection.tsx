import { portfolio } from "@/data/portfolio";
import { NeoLinkButton } from "@/components/ui/NeoLinkButton";

export function HeroSection() {
  const [firstName, ...restName] = portfolio.name.split(" ");
  const lastName = restName.join(" ");
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const profileImageSrc = `${basePath}/profile.jpeg`;

  return (
    <section id="home" className="neo-frame relative overflow-hidden p-7 sm:p-12 lg:p-16">
      <div className="hero-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="neo-noise absolute inset-0 opacity-20" aria-hidden="true" />
      <span className="section-tag pulse-tape">intro</span>

      <div className="pointer-events-none absolute -left-6 top-8 h-24 w-24 border-4 border-black bg-yellow-300" />
      <div className="pointer-events-none absolute right-8 top-14 h-16 w-16 border-4 border-black bg-cyan-300" />
      <div className="pointer-events-none absolute -bottom-3 right-16 h-20 w-20 border-4 border-black bg-red-300" />

      <div className="neo-scroll-reveal relative z-10 grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-14">
        <div className="max-w-4xl">
          <p className="neo-kicker">Aditya Dosapati // Portfolio</p>
          <h1 className="mt-5 -rotate-[0.8deg] text-6xl leading-[0.82] sm:text-8xl lg:text-[7.1rem]">
            <span className="block overflow-hidden">
              <span className="neo-line-reveal">{firstName}</span>
            </span>
            <span className="block overflow-hidden">
              <span className="neo-line-reveal">{lastName}</span>
            </span>
          </h1>
          <p className="mt-6 inline-block border-4 border-black bg-cyan-300 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.17em] sm:text-xs">
            {portfolio.role}
          </p>
          <p className="mt-7 max-w-3xl border-4 border-black bg-yellow-300 p-4 font-mono text-sm uppercase leading-relaxed sm:text-base">
            {portfolio.statement}
          </p>

          <div className="mt-10 flex flex-wrap gap-3.5 sm:gap-4">
            <NeoLinkButton href="#projects" className="bg-cyan-300 px-7 py-3.5 text-[11px] tracking-[0.14em] sm:text-sm">
              View Projects
            </NeoLinkButton>
            <NeoLinkButton href="#contact" className="bg-red-300 px-7 py-3.5 text-[11px] tracking-[0.14em] sm:text-sm">
              Let&apos;s Connect
            </NeoLinkButton>
          </div>
        </div>

        <aside className="self-end border-4 border-black bg-white p-6 shadow-[10px_10px_0_0_#000]">
          <div className="mb-5 border-4 border-black bg-black p-1">
            <div className="relative aspect-square w-full overflow-hidden border-2 border-black bg-zinc-900">
              <img src={profileImageSrc} alt="Portrait of Aditya Dosapati" className="h-full w-full object-cover" />
            </div>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em]">Status</p>
          <p className="mt-3 text-[2rem] leading-[0.9] sm:text-[2.2rem]">{portfolio.profile.status}</p>
          <p className="mt-5 border-2 border-black bg-red-300 px-3 py-3 font-mono text-[11px] uppercase leading-relaxed tracking-[0.08em]">
            {portfolio.profile.education}
            <br />
            {portfolio.profile.metric}
            <br />
            {portfolio.profile.location}
          </p>
        </aside>
      </div>

      <div className="neo-scroll-reveal relative z-10 mt-10 border-4 border-black bg-black p-2">
        <div className="overflow-hidden whitespace-nowrap bg-white py-2 font-mono text-xs uppercase tracking-widest sm:text-sm">
          <div className="neo-marquee">
            <span className="inline-block pr-8">Machine Learning</span>
            <span className="inline-block pr-8">AI Systems</span>
            <span className="inline-block pr-8">App Development</span>
            <span className="inline-block pr-8">Real World Problem Solving</span>
            <span className="inline-block pr-8">Machine Learning</span>
            <span className="inline-block pr-8">AI Systems</span>
            <span className="inline-block pr-8">App Development</span>
            <span className="inline-block pr-8">Real World Problem Solving</span>
          </div>
        </div>
      </div>
    </section>
  );
}