import { HandHelping, Share2, Timer } from "lucide-react";
import BackgroundVideo from "../components/BackgroundVideo";
import CeoHero from "../components/CeoHero";
import { BadgeCheck, Building2, Trophy } from "lucide-react";
import Image from "next/image";

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
const timeline = [
  {
    year: "2022",
    entries: [
      {
        month: "07",
        lines: ["대한항공 대리점 계약", "동남아행 물량 약정 시행"],
      },
      { month: "07", lines: ["기업부설연구소 개설", "(인정번호 2022113315)"] },
    ],
  },
  {
    year: "2021",
    entries: [],
  },
  {
    year: "2020",
    entries: [
      { month: "01", lines: ["특송업체 인증", "(인천세관장)"] },
      { month: "04", lines: ["벤처기업 인증등록"] },
      { month: "12", lines: ["LA향 B747화물기", "Half Charter 운영(26편)"] },
    ],
  },
  {
    year: "2019",
    entries: [
      { month: "05", lines: ["신규 사무실 이전", "(서울 강서구 발산동)"] },
    ],
  },
  {
    year: "2018",
    entries: [{ month: "12", lines: ["Air India CSA 계약"] }],
  },
  {
    year: "2017",
    entries: [
      {
        month: "05",
        lines: ["회사 설립", "(서울 마포구 망원동)", "국제물류주선업 등록"],
      },
      { month: "07", lines: ["IATA 가입 등록"] },
    ],
  },
];
export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      <CeoHero />

      <section className="flex w-full flex-col items-center bg-gray-50">
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

      <section id="history" className=" min-h-screen w-full  bg-white">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 justify-between gap-36 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:px-4 ">
          <div className="lg:sticky lg:top-24 lg:h-fit lg:self-start">
            <div className="relative h-[320px] w-full overflow-hidden rounded-2xl shadow-lg lg:h-[800px]">
              <Image
                src="/연혁.jpg"
                alt="비오로지스틱스 수상 이력"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative flex flex-col gap-16">
            <div className="absolute bottom-2 left-5 top-2 w-px bg-gray-200" />

            {timeline.map((block) => (
              <div key={block.year} className="flex gap-6">
                <div className="flex w-10 shrink-0 justify-center pt-2">
                  <span className="h-3 w-3 rounded-full border-2 border-[#1688CA] bg-white" />
                </div>

                <div className="flex-1">
                  <h3 className="mb-6 text-4xl font-bold text-gray-900">
                    {block.year}
                  </h3>

                  <div className="flex flex-col gap-5">
                    {block.entries.length === 0 && (
                      <p className="text-sm text-gray-400">-</p>
                    )}
                    {block.entries.map((entry, i) => (
                      <div key={i} className="flex gap-6">
                        <span className="w-8 shrink-0 text-sm font-bold text-[#1688CA]">
                          {entry.month}
                        </span>
                        <div className="text-sm leading-relaxed text-gray-700">
                          {entry.lines.map((line, j) => (
                            <p key={j}>{line}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
