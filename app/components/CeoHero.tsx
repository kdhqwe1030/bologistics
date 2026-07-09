"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";

const PHOTO_BOX_CLASS = "h-[280px] w-[380px] lg:h-[390px] lg:w-[540px]";

const MESSAGE_A = ['" 시작을 마지막처럼', '마지막을 처음과 같은 마음으로 "'];
const MESSAGE_B = [
  '" 언제나 초심을 지향하는',
  '비오로지스틱스의 믿음이 담겨 있습니다. "',
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

type Rect = { left: number; top: number; width: number; height: number };

export default function CeoHero() {
  const pinRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const [growProgress, setGrowProgress] = useState(0);
  const [swapProgress, setSwapProgress] = useState(0);
  const [base, setBase] = useState<Rect | null>(null);

  useEffect(() => {
    const measure = () => {
      const box = photoRef.current;
      if (!box) return;
      const prevTransform = box.style.transform;
      box.style.transform = "none";
      const rect = box.getBoundingClientRect();
      box.style.transform = prevTransform;
      setBase({
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      });
    };

    let rafId = 0;
    const update = () => {
      const pin = pinRef.current;
      if (!pin) return;
      const rect = pin.getBoundingClientRect();
      const screens = -rect.top / window.innerHeight;

      setGrowProgress(clamp((screens - 0.3) / 0.7, 0, 1));
      setSwapProgress(clamp((screens - 1.3) / 0.3, 0, 1));
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  let transform = "translate(0px, 0px) scale(1)";
  if (base) {
    const coverScale = Math.max(
      window.innerWidth / base.width,
      window.innerHeight / base.height,
    );
    const scale = 1 + (coverScale - 1) * growProgress;
    const baseCenterX = base.left + base.width / 2;
    const baseCenterY = base.top + base.height / 2;
    const targetCenterX = window.innerWidth / 2;
    const targetCenterY = window.innerHeight / 2;
    const tx = (targetCenterX - baseCenterX) * growProgress;
    const ty = (targetCenterY - baseCenterY) * growProgress;
    transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
  }

  const overlayOpacity = growProgress > 0.85 ? (growProgress - 0.85) / 0.15 : 0;
  const darkOverlayOpacity = clamp((growProgress - 0.7) / 0.3, 0, 1) * 0.45;
  const showSecondMessage = swapProgress > 0.15;

  return (
    <div
      id="ceo"
      ref={pinRef}
      className="relative w-full scroll-mt-20"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden bg-white pt-16">
        <div className="grid w-full grid-cols-1 lg:grid-cols-[48%_52%]">
          <div
            className="flex flex-col justify-center py-16 pl-6 pr-6 lg:py-8 lg:pl-48 lg:pr-4"
            style={{ opacity: 1 - growProgress }}
          >
            <div className="max-w-xl">
              <span className="mb-4 inline-block text-sm font-semibold tracking-[0.3em] text-[#1688CA]">
                CEO GREETING
              </span>
              <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
                대표 인사말
              </h2>

              <div className="mb-8 h-0.5 w-16 bg-[#1688CA]" />

              <p className="mb-6 text-base leading-loose text-gray-600">
                비오로지스틱스는 국내외 항공운송서비스뿐만 아니라 물류단계별
                연계서비스에 이르기까지 고객이 필요로 하는 맞춤형 종합
                물류솔루션을 제공하는 종합물류회사입니다.
              </p>

              <p className="text-base leading-loose text-gray-600">
                주요 항공사들과의 전략적 제휴를 통해 시장에서 고객사가 최적의
                물류활동을 구현할 수 합리적 운임과 연중 안정적인 화물운송
                확보하여 최선의 서비스를 제공하여 드릴 것입니다.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center py-12 lg:justify-start lg:py-16 lg:pl-20">
            <div
              ref={photoRef}
              className={`relative overflow-hidden shadow-lg ${PHOTO_BOX_CLASS}`}
              style={{
                transform,
                borderRadius: `${(1 - growProgress) * 24}px`,
                zIndex: growProgress > 0.02 ? 40 : 0,
              }}
            >
              <Image
                src="/ceo.webp"
                alt="비오로지스틱스 대표이사"
                fill
                className="object-cover"
                priority
              />

              <div
                className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/15 to-slate-950/70"
                style={{ opacity: growProgress }}
              />

              <div
                className="absolute inset-0 bg-black"
                style={{ opacity: darkOverlayOpacity }}
              />

              <div
                className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white"
                style={{ opacity: overlayOpacity }}
              >
                <span className="text-lg mb-6 font-semibold  text-[#4FB6EE]">
                  Beginning and Over
                </span>
                {growProgress > 0.92 && (
                  <FadeIn
                    key={showSecondMessage ? "b" : "a"}
                    direction="none"
                    duration={1.5}
                    className="flex flex-col gap-3 text-xl font-bold leading-relaxed md:text-xl"
                  >
                    {(showSecondMessage ? MESSAGE_B : MESSAGE_A).map(
                      (line, index) => (
                        <div
                          key={index}
                          className={index === 0 ? "text-left" : "text-right"}
                        >
                          {line}
                        </div>
                      ),
                    )}
                  </FadeIn>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
