import Image from "next/image";
import ArrowButton from "../ArrowButton";
import FadeIn from "../FadeIn";
import Stagger from "../Stagger";

export default function BusinessIntro() {
  return (
    <section
      id="business"
      className="flex min-h-screen w-full items-stretch bg-white"
    >
      <div className="grid w-full grid-cols-1 lg:grid-cols-[42%_58%]">
        <div className="flex flex-col justify-center py-16 pl-6 pr-6 lg:py-24 lg:pl-48 lg:pr-4">
          <div className="max-w-lg">
            <Stagger step={0.15}>
              <FadeIn direction="top">
                <h2 className="text-3xl font-medium leading-snug text-gray-900 md:text-4xl">
                  비오로지스틱스는
                  <br />
                  <span className="text-[#1688CA]">
                    맞춤형 종합 물류 솔루션
                  </span>
                  을
                  <br />
                  제공합니다
                </h2>

                <div className="my-7 mb-24 h-0.5 w-48 bg-[#1688CA]" />
              </FadeIn>

              <FadeIn direction="left">
                <span className="mb-2 inline-block w-fit rounded bg-[#E6F1FB] px-2.5 py-1 text-sm font-medium tracking-wide text-[#1688CA]">
                  Door-to-Door
                </span>
                <p className="mb-6 text-base leading-relaxed text-gray-500">
                  고객사의 필요에 따라 최종 목적지까지
                  <br />
                  포장, 운송, 통관 등{" "}
                  <strong className="font-medium text-gray-800">
                    종합 대행 서비스
                  </strong>
                  를 제공합니다.
                </p>

                <div className="mb-6 h-px w-full bg-gray-100" />
              </FadeIn>

              <FadeIn direction="left">
                <span className="mb-2 inline-block w-fit rounded bg-[#E6F1FB] px-2.5 py-1 text-sm font-medium tracking-wide text-[#1688CA]">
                  Global Network
                </span>
                <p className="mb-9 text-base leading-relaxed text-gray-500">
                  광범위한 글로벌 네트워크를 통해
                  <br />전 세계 어디서든{" "}
                  <strong className="font-medium text-gray-800">
                    신속하고 안정적인 물류
                  </strong>
                  를 실현합니다.
                </p>
              </FadeIn>

              <FadeIn direction="bottom" className="mt-20 self-start">
                <ArrowButton href="/about" size="lg" variant="dark">
                  자세히 보기
                </ArrowButton>
              </FadeIn>
            </Stagger>
          </div>
        </div>

        <FadeIn
          direction="right"
          className="relative flex min-h-[520px] items-center justify-center overflow-visible py-12 lg:min-h-[680px] lg:py-16"
        >
          <div className="relative h-[520px] w-[110%] max-w-none lg:h-[550px] lg:w-[120%]">
            <Image
              src="/3d일러스트/전체물류.webp"
              alt="비오로지스틱스 종합 물류 서비스"
              fill
              className="object-contain"
              priority
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
