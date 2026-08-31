import Image from "next/image";
import FadeIn from "../../components/FadeIn";
import Stagger from "../../components/Stagger";

const features = [
  {
    number: "01",
    image: "/3d일러스트/항공차터.webp",
    title: "화물기 전세 운항",
    description:
      "고객의 물량과 일정에 맞춰\nB747 등 대형 화물기 차터 운항을 지원합니다.",
  },
  {
    number: "02",
    image: "/3d일러스트/항공차터.webp",
    title: "노선·스케줄 맞춤 설계",
    description:
      "출발지, 도착지, 운항 횟수 등을\n고객 요청에 맞춰 유연하게 설계합니다.",
  },
  {
    number: "03",
    image: "/3d일러스트/항공차터.webp",
    title: "대량·특수 화물 대응",
    description:
      "정기편으로 대응이 어려운 대량 화물, 특수 화물도\n차터 운항으로 안정적으로 운송합니다.",
  },
];

export default function AirCharterSection() {
  return (
    <section className="w-full bg-white pb-20">
      <div className="grid w-full grid-cols-1 lg:grid-cols-[42%_58%]">
        <div className="flex flex-col justify-center py-16 lg:py-8 ">
          <div className="max-w-2xl">
            <FadeIn direction="top">
              <span className="mb-4 inline-block text-sm font-semibold tracking-[0.3em] text-[#1688CA]">
                AIR CHARTER
              </span>
              <h2 className="mb-8 text-2xl font-bold leading-relaxed text-gray-900 md:text-3xl">
                대량·긴급 화물을 위한 맞춤형
                <br />
                항공 화물기 차터 서비스를 제공합니다.
              </h2>

              <div className="mb-8 h-0.5 w-16 bg-[#1688CA]" />
            </FadeIn>

            <Stagger step={0.12}>
              <FadeIn direction="left">
                <p className="mb-6 text-base leading-loose text-gray-600">
                  비오로지스틱스는 정기 항공편만으로 대응이 어려운 대량 화물,
                  긴급 화물을 위해 화물기 전세(차터) 운항 서비스를 제공합니다.
                </p>
              </FadeIn>

              <FadeIn direction="left">
                <p className="mb-6 text-base leading-loose text-gray-600">
                  고객의 화물량과 일정에 맞춰 기종 선정, 노선 설계, 운항
                  횟수까지 맞춤형으로 구성하며, B747 등 대형 화물기 차터 운용
                  경험을 바탕으로 안정적인 운항을 지원합니다.
                </p>
              </FadeIn>

              <FadeIn direction="left">
                <p className="text-base leading-loose text-gray-600">
                  예약, 운항 스케줄 조율, 통관, 도착지 연계까지 전 과정을
                  체계적으로 관리하여 고객의 화물이 원하는 시점에 정확히 도착할
                  수 있도록 지원합니다.
                </p>
              </FadeIn>
            </Stagger>
          </div>
        </div>

        <FadeIn
          direction="right"
          className="flex items-center py-12 lg:py-16 pl-12"
        >
          <div className="relative h-[280px] w-full overflow-hidden rounded-2xl shadow-lg lg:h-[420px]">
            <Image
              src="/3d일러스트/항공차터.webp"
              alt="비오로지스틱스 항공 화물기 차터 서비스"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <Stagger step={0.12}>
          {features.map((feature) => (
            <FadeIn
              key={feature.number}
              direction="bottom"
              className="flex flex-col"
            >
              <div className="relative mb-6 h-[220px] w-full overflow-hidden rounded-2xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-500/40">
                  <span className="text-sm font-semibold text-white">
                    임시 이미지
                  </span>
                </div>
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#1688CA] text-sm font-bold text-white">
                  {feature.number}
                </span>
              </div>

              <h3 className="mb-3 text-lg font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="whitespace-pre-line text-sm leading-loose text-gray-600">
                {feature.description}
              </p>
            </FadeIn>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
