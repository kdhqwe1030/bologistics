import Image from "next/image";

const features = [
  {
    number: "01",
    image: "/3d일러스트/해상.webp",
    title: "경제적인 해상 운송",
    description:
      "대량 화물과 장거리 운송에 적합한\n합리적인 해상 물류 서비스를 제공합니다.",
  },
  {
    number: "02",
    image: "/3d일러스트/해상.webp",
    title: "FCL · LCL 운송 대응",
    description:
      "화물 규모와 일정에 따라\n컨테이너 단위 운송부터 소량 화물 운송까지 지원합니다.",
  },
  {
    number: "03",
    image: "/3d일러스트/해상.webp",
    title: "수출입 서류 및 통관 연계",
    description:
      "선적 예약, 서류 확인, 통관, 내륙 운송까지\n해상 운송 전 과정을 연결합니다.",
  },
];

export default function SeaSection() {
  return (
    <section className="w-full bg-white pb-20">
      <div className="grid w-full grid-cols-1 lg:grid-cols-[42%_58%]">
        <div className="flex flex-col justify-center py-16 lg:py-8 ">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block text-sm font-semibold tracking-[0.3em] text-[#1688CA]">
              OCEAN FREIGHT
            </span>
            <h2 className="mb-8 text-2xl font-bold leading-relaxed text-gray-900 md:text-3xl">
              대량 화물과 장거리 운송에 적합한
              <br />
              경제적인 해상 물류 서비스를 제공합니다.
            </h2>

            <div className="mb-8 h-0.5 w-16 bg-[#1688CA]" />

            <p className="mb-6 text-base leading-loose text-gray-600">
              비오로지스틱스는 대량 화물과 장거리 운송에 적합한 해상 운송
              서비스를 통해 고객의 물류 비용과 운송 효율을 함께 고려합니다.
            </p>

            <p className="mb-6 text-base leading-loose text-gray-600">
              화물의 규모와 일정에 따라 FCL, LCL 등 적합한 운송 방식을
              제안하며, 선적 예약부터 서류 처리, 통관, 내륙 운송 연계까지
              안정적인 물류 흐름을 제공합니다.
            </p>

            <p className="text-base leading-loose text-gray-600">
              글로벌 해상 네트워크와 실무 경험을 기반으로 고객의 수출입
              화물이 안전하고 경제적으로 이동할 수 있도록 지원합니다.
            </p>
          </div>
        </div>

        <div className="flex items-center py-12 lg:py-16 pl-12">
          <div className="relative h-[280px] w-full overflow-hidden rounded-2xl shadow-lg lg:h-[420px]">
            <Image
              src="/3d일러스트/해상.webp"
              alt="비오로지스틱스 해상 운송 서비스"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.number} className="flex flex-col">
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
          </div>
        ))}
      </div>
    </section>
  );
}
