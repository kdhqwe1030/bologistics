import Image from "next/image";
import { HandHelping, Share2, Timer } from "lucide-react";
import BackgroundVideo from "../components/BackgroundVideo";
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
      <section id="ceo" className="w-full scroll-mt-20 bg-white pb-20 pt-16">
        <div className="grid w-full grid-cols-1 lg:grid-cols-[48%_52%]">
          <div className="flex flex-col justify-center py-16 pl-6 pr-6 lg:py-8 lg:pl-48 lg:pr-4">
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
            <div className="relative h-[280px] w-[380px] lg:h-[390px] lg:w-[540px]">
              <div className="absolute left-1/2 top-1/2 h-[323px] w-[240px] -translate-x-1/2 -translate-y-1/2 -rotate-90 overflow-hidden rounded-2xl shadow-lg lg:h-[540px] lg:w-[390px]">
                <Image
                  src="/ceo.webp"
                  alt="비오로지스틱스 대표이사"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="vision"
        className="flex w-full scroll-mt-20 flex-col items-center bg-gray-50"
      >
        <div className="flex w-full items-center justify-center py-24">
          <h1 className="text-3xl font-bold text-gray-900">비전</h1>
        </div>

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
