import Image from "next/image";

const features = [
  {
    number: "01",
    image: "/3d일러스트/내륙운송.webp",
    title: "국내 내륙 운송 서비스",
    description:
      "공항, 항만, 창고, 최종 목적지를 연결하는\n안정적인 국내 운송 서비스를 제공합니다.",
  },
  {
    number: "02",
    image: "/3d일러스트/내륙운송.webp",
    title: "Door-to-Door 운송 연계",
    description:
      "출발지부터 최종 도착지까지\n운송, 통관, 보관을 연계한 물류 흐름을 지원합니다.",
  },
  {
    number: "03",
    image: "/3d일러스트/내륙운송.webp",
    title: "화물 특성별 차량 운송",
    description:
      "일반 화물, 특수 화물, 신선 화물 등\n화물 조건에 맞는 운송 방식을 제안합니다.",
  },
];

export default function InlandSection() {
  return (
    <section className="w-full bg-white pb-20">
      <div className="grid w-full grid-cols-1 lg:grid-cols-[42%_58%]">
        <div className="flex flex-col justify-center py-16 lg:py-8 ">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block text-sm font-semibold tracking-[0.3em] text-[#1688CA]">
              INLAND TRANSPORT
            </span>
            <h2 className="mb-8 text-2xl font-bold leading-relaxed text-gray-900 md:text-3xl">
              출발지부터 최종 목적지까지
              <br />
              끊김 없는 내륙 운송을 제공합니다.
            </h2>

            <div className="mb-8 h-0.5 w-16 bg-[#1688CA]" />

            <p className="mb-6 text-base leading-loose text-gray-600">
              비오로지스틱스는 국내외 물류 흐름의 마지막 연결 구간까지
              책임지는 내륙 운송 서비스를 제공합니다.
            </p>

            <p className="mb-6 text-base leading-loose text-gray-600">
              항공·해상 운송과 연계하여 항만, 공항, 창고, 최종 목적지 간
              운송을 안정적으로 수행하며, 화물의 특성과 일정에 맞는 차량 및
              운송 방식을 제안합니다.
            </p>

            <p className="text-base leading-loose text-gray-600">
              정확한 배차와 운송 관리 프로세스를 기반으로 고객의 화물이
              안전하고 효율적으로 이동할 수 있도록 지원합니다.
            </p>
          </div>
        </div>

        <div className="flex items-center py-12 lg:py-16 pl-12">
          <div className="relative h-[280px] w-full overflow-hidden rounded-2xl shadow-lg lg:h-[420px]">
            <Image
              src="/3d일러스트/내륙운송.webp"
              alt="비오로지스틱스 내륙 운송 서비스"
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
