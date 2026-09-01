"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";

const STORAGE_KEY = "bio-intro-shown";
const HOLD_MS = 1700;
const FADE_MS = 500;
const NAME_CHARS = Array.from("비오로지스틱스(주)");

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : () => {};

export default function IntroSplash() {
  const [phase, setPhase] = useState<"hidden" | "visible" | "leaving">(
    "hidden",
  );
  const [entered, setEntered] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    sessionStorage.setItem(STORAGE_KEY, "1");

    setPhase("visible");
    const leaveTimer = setTimeout(() => setPhase("leaving"), HOLD_MS);
    const hideTimer = setTimeout(() => setPhase("hidden"), HOLD_MS + FADE_MS);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    document.body.style.overflow = phase === "hidden" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "visible") return;
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-[#0B2F52] transition-opacity duration-500 ease-in-out ${
        phase === "leaving" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex items-center gap-5">
        <div
          className="transition-all duration-1200 ease-out"
          style={{
            opacity: entered ? 1 : 0,
            transform: entered ? "translateX(0)" : "translateX(64px)",
          }}
        >
          <Image
            src="/투명로고.webp"
            alt="비오로지스틱스"
            width={160}
            height={160}
            className="h-28 w-28 object-cover md:h-28 md:w-28"
            priority
          />
        </div>

        <div className="flex">
          {NAME_CHARS.map((char, index) => (
            <span
              key={index}
              className="inline-block text-xl font-bold tracking-wide text-white transition-all duration-1400 ease-out md:text-3xl"
              style={{
                opacity: entered ? 1 : 0,
                transform: entered ? "translateX(0)" : "translateX(24px)",
                transitionDelay: `${300 + index * 90}ms`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
