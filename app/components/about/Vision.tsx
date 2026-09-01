"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FadeIn from "../FadeIn";
import ScrollDownIndicator from "../ScrollDownIndicator";
import Stagger from "../Stagger";

const PHOTO_BOX_CLASS = "h-[280px] w-[380px] lg:h-[390px] lg:w-[540px]";

// const MESSAGE_A = ['" 시작을 마지막처럼', '마지막을 처음과 같은 마음으로 "'];
// const MESSAGE_B = [
//   '" 언제나 초심을 지향하는',
//   '비오로지스틱스의 믿음이 담겨 있습니다. "',
// ];
const MESSAGE_A = ['" 처음 시작할 때 마지막이라는 마음으로 "'];
const MESSAGE_B = [
  '" 비오의 끝은 항상 다시 처음이고',
  '항상 초심을 유지하겠습니다 "',
];
function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

type Rect = { left: number; top: number; width: number; height: number };

export default function Vision() {
  const pinRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const [growProgress, setGrowProgress] = useState(0);
  const [swapProgress, setSwapProgress] = useState(0);
  const [base, setBase] = useState<Rect | null>(null);

  useEffect(() => {
    const measure = () => {
      const box = photoRef.current;
      const frame = stickyRef.current;
      if (!box || !frame) return;
      const prevTransform = box.style.transform;
      box.style.transform = "none";
      const rect = box.getBoundingClientRect();
      const frameRect = frame.getBoundingClientRect();
      box.style.transform = prevTransform;
      // 고정(sticky) 프레임 기준 "상대 오프셋"으로 저장 → 현재 스크롤 위치와 무관하게 항상 동일한 값.
      // 활성 구간에서는 프레임이 top:0에 고정되므로 이 오프셋이 곧 뷰포트 좌표가 된다.
      setBase({
        left: rect.left - frameRect.left,
        top: rect.top - frameRect.top,
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
      id="vision"
      ref={pinRef}
      className="relative w-full "
      style={{ height: "300vh" }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 flex h-screen w-full items-center overflow-hidden bg-white pt-16"
      >
        <div className="grid w-full grid-cols-1 lg:grid-cols-[48%_52%]">
          <div
            className="flex flex-col justify-center py-16 pl-6 pr-6 lg:py-8 lg:pl-48 lg:pr-4"
            style={{ opacity: 1 - growProgress }}
          >
            <div className="max-w-xl">
              <Stagger step={0.15}>
                <FadeIn direction="left">
                  <span className="mb-4 inline-block text-sm font-semibold tracking-[0.3em] text-[#1688CA]">
                    BO LOGISTICS
                  </span>
                  <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
                    비오 가치와 비전
                  </h2>
                  <div className="mb-8 h-0.5 w-16 bg-[#1688CA]" />
                </FadeIn>

                <FadeIn direction="left">
                  <p className="mb-6 text-base leading-loose text-gray-600">
                    비오는 Beginning and Over 의 약자로 시작과 끝의 영문 첫
                    이니셜을 약자로 사용합니다.
                  </p>

                  <p className="mb-6 text-base leading-loose text-gray-600">
                    처음 시작할 때 마지막이라는 마음으로, <br />
                    마지막이라고 생각될 때처음 시작했을 때의 마음을 다시 한번
                    생각합니다.
                  </p>

                  <p className="text-base leading-loose text-gray-600">
                    시작과 마지막은 우리 모두 하나의 마음으로 하고 싶었던 모든
                    것입니다. <br />
                    비오의 끝은 항상 다시 처음이고, 항공 물류 사업에 처음 도전할
                    때의 마음을 잊지 않고 항상 초심을 유지하겠습니다.
                  </p>
                </FadeIn>
              </Stagger>
            </div>
          </div>

          <FadeIn
            direction="none"
            className="flex items-center justify-center py-12 lg:justify-start lg:py-16 lg:pl-20"
          >
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
                {growProgress > 0.85 && (
                  <FadeIn
                    direction="none"
                    duration={1.2}
                    className="mb-6 block font-semibold text-[#4FB6EE]"
                  >
                    Beginning and Over
                  </FadeIn>
                )}
                {growProgress > 0.92 && (
                  <FadeIn
                    key={showSecondMessage ? "b" : "a"}
                    direction="none"
                    duration={1.5}
                    className="mx-auto flex w-[78%] flex-col gap-3 text-2xl font-bold leading-relaxed md:text-2xl"
                  >
                    {(showSecondMessage ? MESSAGE_B : MESSAGE_A).map(
                      (line, index, arr) => (
                        <div
                          key={index}
                          className={
                            arr.length === 1
                              ? "text-center"
                              : index === 0
                                ? "text-left"
                                : "text-right"
                          }
                        >
                          {line}
                        </div>
                      ),
                    )}
                  </FadeIn>
                )}
              </div>
            </div>
          </FadeIn>
        </div>

        {growProgress === 0 && <ScrollDownIndicator variant="dark" />}
        {growProgress > 0.85 && <ScrollDownIndicator />}
      </div>
    </div>
  );
}
