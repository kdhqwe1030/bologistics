"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { HEADER_OFFSET } from "../lib/scroll";

export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const raw = window.location.hash;
    if (!raw) return;

    // "#ceo#network" 처럼 누적된 해시 → 마지막 유효 id 하나만 사용
    const id = raw.replace(/^#/, "").split("#").filter(Boolean).pop();
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return;

    // URL을 단일 해시로 정규화 (해시 누적 방지)
    if (raw !== `#${id}`) {
      history.replaceState(null, "", `${pathname}#${id}`);
    }

    let rafId = 0;
    const run = () => {
      const lenis = window.__lenis;
      if (lenis) {
        // 레이아웃/스크롤 한계를 다시 계산한 뒤 이동해야 목표 위치까지 정확히 도달한다.
        lenis.resize();
        lenis.scrollTo(target, { offset: -HEADER_OFFSET, immediate: true });
      } else {
        target.scrollIntoView();
      }
    };

    // 레이아웃이 안정된 뒤 실행 (두 프레임 대기)
    rafId = requestAnimationFrame(() => {
      rafId = requestAnimationFrame(run);
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname]);

  return null;
}
