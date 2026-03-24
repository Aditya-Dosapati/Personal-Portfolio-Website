import type { AnchorHTMLAttributes, ReactNode } from "react";

type NeoLinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function NeoLinkButton({ children, className, ...rest }: NeoLinkButtonProps) {
  return (
    <a className={`neo-btn inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.14em] ${className ?? ""}`} {...rest}>
      {children}
    </a>
  );
}