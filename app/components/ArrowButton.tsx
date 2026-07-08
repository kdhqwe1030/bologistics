import type { ReactNode } from "react";

type ArrowButtonSize = "sm" | "base" | "lg" | "xl";

const sizeStyles: Record<
  ArrowButtonSize,
  { text: string; icon: string; gap: string; padding: string }
> = {
  sm: { text: "text-sm", icon: "h-3.5 w-3.5", gap: "gap-1.5", padding: "px-4 py-2" },
  base: { text: "text-base", icon: "h-4 w-4", gap: "gap-2", padding: "px-5 py-2.5" },
  lg: { text: "text-lg", icon: "h-5 w-5", gap: "gap-2", padding: "px-6 py-3" },
  xl: { text: "text-xl", icon: "h-6 w-6", gap: "gap-2.5", padding: "px-7 py-3.5" },
};

export default function ArrowButton({
  href,
  children,
  size = "base",
}: {
  href: string;
  children: ReactNode;
  size?: ArrowButtonSize;
}) {
  const { text, icon, gap, padding } = sizeStyles[size];

  return (
    <a
      href={href}
      className={`group relative inline-flex items-center overflow-hidden rounded-sm border border-white/30 text-white/85 hover:border-[#1688CA] ${gap} ${padding}`}
      style={{ transition: "border-color 0.25s" }}
    >
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-0"
        style={{
          background: "#1688CA",
          transition: "translate 0.6s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
      <span className={`relative ${text}`}>{children}</span>
      <svg
        className={`relative group-hover:translate-x-1.5 ${icon}`}
        style={{
          transition: "translate 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        }}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 6l6 6-6 6" />
      </svg>
    </a>
  );
}
