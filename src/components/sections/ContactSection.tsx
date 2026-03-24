import { portfolio } from "@/data/portfolio";
import { NeoLinkButton } from "@/components/ui/NeoLinkButton";
import { SectionShell } from "@/components/ui/SectionShell";

export function ContactSection() {
  const contactLinks = [
    portfolio.contact.email
      ? {
          label: "Email",
          href: `mailto:${portfolio.contact.email}`,
          className: "bg-white",
          external: false,
        }
      : null,
    {
      label: "GitHub",
      href: portfolio.contact.github,
      className: "bg-yellow-300",
      external: true,
    },
    {
      label: "LinkedIn",
      href: portfolio.contact.linkedin,
      className: "bg-cyan-300",
      external: true,
    },
  ].filter(Boolean) as { label: string; href: string; className: string; external: boolean }[];

  return (
    <SectionShell id="contact" tag="contact" title="Contact">
      <div className="relative border-4 border-black bg-red-300 p-7 sm:p-8 shadow-[8px_8px_0_0_#000]">
        <div className="neo-noise absolute inset-0 opacity-20" aria-hidden="true" />
        <p className="relative max-w-4xl text-4xl leading-[0.9] sm:text-6xl">Let&apos;s build something impactful</p>

        <div className={`relative mt-8 grid gap-4 ${contactLinks.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {contactLinks.map((item) => (
            <NeoLinkButton
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`flex items-center justify-between p-4 text-sm ${item.className}`}
            >
              <span>{item.label}</span>
              <span>-&gt;</span>
            </NeoLinkButton>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}