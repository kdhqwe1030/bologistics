"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "../../hooks/useInView";

const services = [
  {
    tag: "Air Transport",
    title: "항공 운송",
    desc: "주요 항공사와의 전략적 제휴를 통해 합리적 운임과 안정적인 화물 스페이스를 확보합니다.",
    img: "/3d일러스트/항공.webp",
    href: "/business/air",
  },
  {
    tag: "Marine Transport",
    title: "해상 운송",
    desc: "경쟁력 있는 해상 운임과 글로벌 네트워크로 안전하고 신속한 화물 운송을 제공합니다.",
    img: "/3d일러스트/해상.webp",
    href: "/business/marine",
  },
  {
    tag: "Inland Transport",
    title: "내륙 운송",
    desc: "국내외 내륙 운송으로 최종 목적지까지 Door-to-Door 종합 대행 서비스를 제공합니다.",
    img: "/3d일러스트/내륙운송.webp",
    href: "/business/inland",
  },
  {
    tag: "Warehouse",
    title: "창고",
    desc: "냉장·냉동 창고 운영부터 보관, 재고 관리까지 체계적인 물류 보관 솔루션을 제공합니다.",
    img: "/3d일러스트/창고.webp",
    href: "/business/warehouse",
  },
];

const STAGGER_STEP = 0.1;

export default function BusinessContent() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      id="contact"
      className="relative z-20 flex min-h-screen w-full items-center bg-white py-20"
    >
      <div className="mx-auto w-full max-w-full px-6 lg:px-48">
        {/* 헤더 */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#1688CA]">
            Business
          </p>
          <h2 className="text-3xl font-medium text-gray-900 md:text-4xl">
            비오로지스틱스의 <span className="text-[#1688CA]">핵심 서비스</span>
          </h2>
        </div>

        {/* 카드 그리드 */}
        <div
          ref={ref}
          className="group/grid flex h-[70vh] min-h-[520px] gap-2.5"
        >
          {services.map((svc, index) => {
            const delay = index * STAGGER_STEP;
            return (
              <Link
                key={svc.href}
                href={svc.href}
                className="group/card relative flex-1 overflow-hidden rounded-xl border border-white/10 group-has-[.group\/card:hover]/grid:[flex:0.7] hover:![flex:2.2] hover:shadow-2xl"
                style={{
                  opacity: inView ? 1 : 0,
                  translate: inView ? "0 0" : "0 28px",
                  transition: `flex 450ms cubic-bezier(0.4,0,0.2,1), opacity 0.7s ease-out ${delay}s, translate 0.7s ease-out ${delay}s`,
                }}
              >
                {/* 배경 이미지 */}
                <Image
                  src={svc.img}
                  alt={svc.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                />

                {/* 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,30,54,0.88)] via-[rgba(14,30,54,0.15)] to-transparent transition-all duration-300 group-hover/card:from-[rgba(22,136,202,0.8)]" />

                {/* 텍스트 */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-2 text-sm uppercase tracking-widest text-white/55">
                    {svc.tag}
                  </p>
                  <p className="whitespace-nowrap text-3xl font-medium text-white">
                    {svc.title}
                  </p>

                  {/* hover 시 등장 */}
                  <p className="mt-3 max-w-[360px] translate-y-1.5 text-base leading-relaxed text-white/75 opacity-0 transition-all duration-200 delay-100 group-hover/card:translate-y-0 group-hover/card:opacity-100">
                    {svc.desc}
                  </p>

                  <span className="mt-4 inline-flex translate-y-1.5 items-center gap-1.5 rounded border border-white/30 bg-white/15 px-4 py-2 text-base text-white opacity-0 transition-all duration-200 delay-150 group-hover/card:translate-y-0 group-hover/card:opacity-100">
                    자세히 보기
                    <svg
                      width="16"
                      height="16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
