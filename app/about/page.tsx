import { HandHelping, Share2, Timer } from "lucide-react";
import BackgroundVideo from "../components/BackgroundVideo";
import CeoHero from "../components/CeoHero";
const philosophyItems = [
  {
    icon: Share2,
    title: "상생 기반 업무",
    description:
      "함께하는 고객·파트너사와 동반성장하는 것이 사회에 공헌하는 길입니다",
  },
  {
    icon: HandHelping,
    title: "고객 최우선",
    description:
      "고객의 가치를 창조하는 것이 비오로지스틱스의 존재 이유라고 믿습니다",
  },
  {
    icon: Timer,
    title: "시간 = 신뢰",
    description:
      "비오로지스틱스는 어떠한 순간에도 시간약속을 준수하며 신뢰를 잃지 않습니다",
  },
];
export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      <CeoHero />

      <section
        id="vision"
        className="flex w-full scroll-mt-20 flex-col items-center bg-gray-50"
      >
        <div className="relative flex w-full items-center justify-center overflow-hidden py-32">
          <BackgroundVideo
            className="absolute inset-0 h-full w-full object-cover"
            src="/test2.mp4"
            playbackRate={0.5}
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex w-full max-w-full flex-col items-center px-28 text-center text-white">
            <p className="mb-8 text-sm  uppercase font-semibold tracking-[0.3em]">
              Service Philosophy
            </p>
            <div className="mb-12 h-px w-16 bg-white/60" />
            <p className="mb-48 font-serif text-4xl  text-white md:text-4xl">
              We will always find the way for your cargo
            </p>

            <div className="grid w-full max-w-full  grid-cols-1 divide-y divide-white/25 md:grid-cols-3 md:divide-x md:divide-y-0">
              {philosophyItems.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex flex-col items-center gap-8 px-18 py-10 md:py-0"
                >
                  <Icon className="h-14 w-14 stroke-[1.5]" />
                  <h3 className="text-3xl font-bold md:text-3xl">{title}</h3>
                  <div className="mt-4 w-full rounded bg-white/10 px-6 py-8 text-center text-lg leading-loose text-white/90 backdrop-blur-sm md:text-xl">
                    {description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="history"
        className="flex min-h-screen w-full  items-center justify-center bg-white"
      >
        <h1 className="text-3xl font-bold text-gray-900">연혁</h1>
      </section>

      <section
        id="network"
        className="flex min-h-screen w-full items-center justify-center bg-gray-50"
      >
        <h1 className="text-3xl font-bold text-gray-900">글로벌 네트워크</h1>
      </section>
    </div>
  );
}
