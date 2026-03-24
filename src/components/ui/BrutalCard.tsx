import type { HTMLAttributes, ReactNode } from "react";

type BrutalCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: "yellow" | "cyan" | "white" | "red";
};

const tones = {
  yellow: "bg-yellow-300",
  cyan: "bg-cyan-300",
  white: "bg-zinc-900 text-zinc-100",
  red: "bg-red-300",
};

export function BrutalCard({
  children,
  className,
  tone = "white",
  ...rest
}: BrutalCardProps) {
  return (
    <div
      className={`relative border-4 border-black p-6 sm:p-8 shadow-[11px_11px_0_0_#000] transition-[transform,box-shadow,border-color,outline-color] duration-180 ease-out hover:-translate-x-[6px] hover:-translate-y-[6px] hover:-rotate-[1.3deg] hover:shadow-[16px_16px_0_0_#000] hover:border-[5px] hover:border-black hover:outline-2 hover:outline-yellow-300 active:scale-[0.96] active:shadow-none ${tones[tone]} ${className ?? ""}`}
      {...rest}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2.5 -top-2.5 h-5 w-5 border-2 border-black bg-white"
      />
      {children}
    </div>
  );
}