import Image from "next/image";
import FadeIn from "../FadeIn";

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

export default function History() {
  return (
    <section id="history" className=" min-h-screen w-full  bg-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 justify-between gap-36 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:px-4 ">
        <FadeIn
          direction="left"
          className="lg:sticky lg:top-24 lg:h-fit lg:self-start"
        >
          <div className="relative h-[320px] w-full overflow-hidden rounded-2xl shadow-lg lg:h-[800px]">
            <Image
              src="/연혁.jpg"
              alt="비오로지스틱스 수상 이력"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>

        <div className="relative flex flex-col gap-16">
          <div className="absolute bottom-2 left-5 top-2 w-px bg-gray-200" />

          {timeline.map((block) => (
            <FadeIn key={block.year} direction="none" className="flex gap-6">
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
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
