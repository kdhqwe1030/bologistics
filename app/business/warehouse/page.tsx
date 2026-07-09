import Image from "next/image";
import FadeIn from "../../components/FadeIn";
import Stagger from "../../components/Stagger";

const features = [
  {
    number: "01",
    image: "/3d일러스트/창고.webp",
    title: "신선화물 전문 검역 및 업무 처리",
    description:
      "신선식품, 농산물, 냉장·냉동 화물 등\n화물 특성에 맞는 검역 및 서류 업무를 지원합니다.",
  },

  {
    number: "02",
    image: "/3d일러스트/창고.webp",
    title: "온도 관리 기반 보관 및 운송",
    description:
      "냉장·냉동 화물의 품질 유지를 위해 보관부터 운송까지\n 안정적인 온도 관리 프로세스를 제공합니다.",
  },
  {
    number: "03",
    image: "/3d일러스트/창고.webp",
    title: "항공·해상 연계 물류 서비스",
    description:
      "수출입 일정과 화물 조건에 맞춰\n경제적이고 안정적인 운송 솔루션을 제안합니다.",
  },
];

export default function WarehouseSection() {
  return (
    <section className="w-full bg-white pb-20">
      <div className="grid w-full grid-cols-1 lg:grid-cols-[42%_58%]">
        <div className="flex flex-col justify-center py-16 lg:py-8 ">
          <div className="max-w-2xl">
            <FadeIn direction="top">
              <span className="mb-4 inline-block text-sm font-semibold tracking-[0.3em] text-[#1688CA]">
                WAREHOUSING & STORAGE
              </span>
              <h2 className="mb-8 text-2xl font-bold leading-relaxed text-gray-900 md:text-3xl">
                안전한 보관과 체계적인 관리로
                <br />
                물류의 시작부터 끝까지 함께합니다.
              </h2>

              <div className="mb-8 h-0.5 w-16 bg-[#1688CA]" />
            </FadeIn>

            <Stagger step={0.12}>
              <FadeIn direction="left">
                <p className="mb-6 text-base leading-loose text-gray-600">
                  비오로지스틱스는 고객의 물류 특성과 운영 환경에 맞춘 창고
                  보관 및 물류 관리 서비스를 제공합니다.
                </p>
              </FadeIn>

              <FadeIn direction="left">
                <p className="mb-6 text-base leading-loose text-gray-600">
                  입·출고 관리부터 재고 관리, 보관, 분류, 포장까지 전
                  과정을 체계적으로 운영하며, 고객 화물이 안전하고
                  효율적으로 관리될 수 있도록 지원합니다.
                </p>
              </FadeIn>

              <FadeIn direction="left">
                <p className="text-base leading-loose text-gray-600">
                  또한 국내외 운송과 연계된 물류 프로세스를 기반으로
                  보관부터 배송까지 끊김 없는 서비스를 제공하여 고객의
                  운영 효율성과 물류 경쟁력을 높여드립니다.
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
              src="/3d일러스트/창고.webp"
              alt="비오로지스틱스 창고 보관 서비스"
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
