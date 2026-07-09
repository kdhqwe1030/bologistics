"use client";

import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { HEADER_OFFSET } from "../lib/scroll";

export function useHashLinkClick() {
  const pathname = usePathname();

  return (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    const [path, hash] = href.split("#");
    if (!hash) return;

    const isSamePage = path === pathname;
    if (!isSamePage) return;

    e.preventDefault();
    const target = document.getElementById(hash);
    if (!target) return;

    // 해시 누적(/about#ceo#network) 방지 — 항상 단일 해시로 유지
    history.replaceState(null, "", `${path}#${hash}`);

    if (window.__lenis) {
      window.__lenis.scrollTo(target, { offset: -HEADER_OFFSET });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
}
