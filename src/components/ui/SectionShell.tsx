import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  title: string;
  tag: string;
  children: ReactNode;
};

export function SectionShell({ id, title, tag, children }: SectionShellProps) {
  return (
    <section id={id} className="neo-section neo-scroll-slide scroll-mt-32 sm:scroll-mt-36">
      <span className="section-tag">{tag}</span>
      <h2 className="neo-heading">
        <span className="neo-heading-reveal">{title}</span>
      </h2>
      {children}
    </section>
  );
}