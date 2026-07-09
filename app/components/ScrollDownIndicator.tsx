"use client";

import { ChevronDown } from "lucide-react";

export default function ScrollDownIndicator({
  targetId,
  variant = "light",
}: {
  targetId?: string;
  variant?: "light" | "dark";
}) {
  const handleClick = () => {
    const target = targetId ? document.getElementById(targetId) : null;

    if (window.__lenis) {
      if (target) {
        window.__lenis.scrollTo(target);
      } else {
        window.__lenis.scrollTo(window.scrollY + window.innerHeight);
      }
    } else if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  const colorClass =
    variant === "dark"
      ? "text-gray-900/70 hover:text-gray-900"
      : "text-white/80 hover:text-white";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="아래로 스크롤"
      className={`absolute inset-x-0 bottom-8 z-10 flex items-center justify-center transition-colors ${colorClass}`}
    >
      <ChevronDown className="h-9 w-9 animate-bounce" strokeWidth={1.5} />
    </button>
  );
}
