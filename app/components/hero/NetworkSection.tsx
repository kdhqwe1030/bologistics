import Image from "next/image";
import ArrowButton from "../ArrowButton";
import FadeIn from "../FadeIn";
import LogoMarquee from "../LogoMarquee";
import Stagger from "../Stagger";

const STATS_STEP = 0.12;
const STATS_BASE_DELAY = 0.2;
const STATS_COUNT = 3;
const AFTER_STATS_DELAY = STATS_BASE_DELAY + STATS_COUNT * STATS_STEP;

export default function NetworkSection() {
  return (
    <section
      id="network"
      className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-24"
    >
      {/* 배경 이미지 */}
      <Image
        src="/plane.webp"
        alt="글로벌 항공 네트워크"
        fill
        className="object-cover"
      />

      {/* 배경 오버레이 */}
      <div className="absolute inset-0 bg-slate-950/65" />

      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/70" />

      <div className="relative z-10 flex w-full flex-col items-center">
        {/* 제목 영역 */}
        <FadeIn
          direction="top"
          className="mb-16 flex flex-col items-center px-6 text-center"
        >
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            전 세계를 연결하는
            <br />
            <span className="text-sky-400">강력한 항공 네트워크</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            다양한 글로벌 항공사와의 협력 네트워크를 통해
            <br className="hidden md:block" />더 빠르고 안정적인 항공 운송
            서비스를 제공합니다.
          </p>
        </FadeIn>

        {/* 간단한 수치 정보 */}
        <div className="mb-12 flex items-center gap-8 text-center text-white md:gap-16">
          <Stagger step={STATS_STEP} baseDelay={STATS_BASE_DELAY}>
            <FadeIn direction="none">
              <div>
                <strong className="block text-3xl font-bold md:text-4xl">
                  50+
                </strong>
                <span className="mt-1 block text-sm text-white/60">
                  글로벌 항공사
                </span>
              </div>
            </FadeIn>

            <div className="h-10 w-px bg-white/20" />

            <FadeIn direction="none">
              <div>
                <strong className="block text-3xl font-bold md:text-4xl">
                  Worldwide
                </strong>
                <span className="mt-1 block text-sm text-white/60">
                  글로벌 운송 네트워크
                </span>
              </div>
            </FadeIn>

            <div className="hidden h-10 w-px bg-white/20 md:block" />

            <FadeIn direction="none" className="hidden md:block">
              <div>
                <strong className="block text-3xl font-bold md:text-4xl">
                  Reliable
                </strong>
                <span className="mt-1 block text-sm text-white/60">
                  안정적인 운송 서비스
                </span>
              </div>
            </FadeIn>
          </Stagger>
        </div>

        {/* 로고 무한 스크롤 */}
        <FadeIn
          direction="none"
          delay={AFTER_STATS_DELAY}
          className="relative w-full"
        >
          <LogoMarquee />
        </FadeIn>

        {/* 자세히 보기 */}
        <FadeIn
          direction="bottom"
          delay={AFTER_STATS_DELAY + STATS_STEP}
          className="mt-10 flex justify-center"
        >
          <ArrowButton href="/about" size="xl">
            자세히 보기
          </ArrowButton>
        </FadeIn>
      </div>
    </section>
  );
}
