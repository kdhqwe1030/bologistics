"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { HEADER_OFFSET } from "../lib/scroll";

export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const target = document.querySelector(hash);
    if (!target) return;

    const rafId = requestAnimationFrame(() => {
      if (window.__lenis) {
        window.__lenis.scrollTo(target as HTMLElement, {
          offset: -HEADER_OFFSET,
          immediate: true,
        });
      } else {
        (target as HTMLElement).scrollIntoView();
      }
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  return null;
}
