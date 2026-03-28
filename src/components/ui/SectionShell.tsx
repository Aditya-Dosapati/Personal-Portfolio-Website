import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  title: string;
  tag: string;
  children: ReactNode;
};

export function SectionShell({ id, title, tag: _tag, children }: SectionShellProps) {
  return (
    <section id={id} data-tag={_tag} className="neo-section neo-scroll-slide scroll-mt-32 sm:scroll-mt-36">
      <h2 className="neo-heading">
        <span className="neo-heading-reveal">{title}</span>
      </h2>
      {children}
    </section>
  );
}