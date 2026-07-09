"use client";

import Lenis from "lenis";
import { useEffect } from "react";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    // 브라우저 native 스크롤 복원이 Lenis와 충돌하지 않도록 수동 모드로 전환
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const lenis = new Lenis({
      duration: 2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    // 초기 레이아웃 확정 후 스크롤 한계를 다시 계산 (마운트 경쟁으로 인한 짧은 한계 방지)
    const resizeRaf = requestAnimationFrame(() => lenis.resize());

    let active = true;
    let rafId: number;
    function raf(time: number) {
      if (!active) return;
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(resizeRaf);
      lenis.destroy();
      if (window.__lenis === lenis) {
        window.__lenis = undefined;
      }
    };
  }, []);

  return null;
}
