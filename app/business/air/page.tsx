import Image from "next/image";

const features = [
  {
    number: "01",
    image: "/3d일러스트/항공.webp",
    title: "신속한 항공 운송 서비스",
    description:
      "긴급성과 정시성이 중요한 화물을 위해\n빠르고 안정적인 항공 운송을 지원합니다.",
  },
  {
    number: "02",
    image: "/3d일러스트/항공.webp",
    title: "항공 스페이스 확보",
    description:
      "화물 일정과 목적지에 맞춰\n효율적인 항공 스페이스 확보를 지원합니다.",
  },
  {
    number: "03",
    image: "/3d일러스트/항공.webp",
    title: "통관 및 도착지 연계",
    description:
      "예약, 선적, 통관, 도착지 운송까지\n항공 물류 전 과정을 체계적으로 관리합니다.",
  },
];

export default function AirSection() {
  return (
    <section className="w-full bg-white pb-20">
      <div className="grid w-full grid-cols-1 lg:grid-cols-[42%_58%]">
        <div className="flex flex-col justify-center py-16 lg:py-8 ">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block text-sm font-semibold tracking-[0.3em] text-[#1688CA]">
              AIR FREIGHT
            </span>
            <h2 className="mb-8 text-2xl font-bold leading-relaxed text-gray-900 md:text-3xl">
              빠르고 정확한 항공 운송으로
              <br />
              긴급 화물을 안전하게 연결합니다.
            </h2>

            <div className="mb-8 h-0.5 w-16 bg-[#1688CA]" />

            <p className="mb-6 text-base leading-loose text-gray-600">
              비오로지스틱스는 긴급성과 정시성이 중요한 화물을 위해 신속하고
              안정적인 항공 운송 서비스를 제공합니다.
            </p>

            <p className="mb-6 text-base leading-loose text-gray-600">
              화물의 특성, 목적지, 운송 일정에 맞춰 최적의 항공 스페이스를
              확보하고, 예약부터 출고, 통관, 도착지 연계까지 전 과정을
              체계적으로 지원합니다.
            </p>

            <p className="text-base leading-loose text-gray-600">
              글로벌 항공 네트워크를 기반으로 고객의 화물이 빠르고 안전하게
              목적지에 도착할 수 있도록 효율적인 항공 물류 솔루션을
              제공합니다.
            </p>
          </div>
        </div>

        <div className="flex items-center py-12 lg:py-16 pl-12">
          <div className="relative h-[280px] w-full overflow-hidden rounded-2xl shadow-lg lg:h-[420px]">
            <Image
              src="/3d일러스트/항공.webp"
              alt="비오로지스틱스 항공 운송 서비스"
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
