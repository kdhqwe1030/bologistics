import Image from "next/image";

const rowTopAirlines = [
  "대한항공",
  "델타",
  "루프트한자",
  "브리티시에어웨이",
  "실크웨이",
  "싱가포르에어라인",
  "아시아나",
  "에어인디아",
];

const rowBottomAirlines = [
  "에어캐나다",
  "에어프랑스",
  "에어프리미아",
  "에티하드",
  "유나이티드항공",
  "차이나남방",
  "핀에어",
  "필리핀에어라인",
];

function LogoRow({
  airlines,
  reverse,
}: {
  airlines: string[];
  reverse?: boolean;
}) {
  return (
    <div className="fade-mask overflow-hidden py-4">
      <div
        className={`flex w-fit hover:[animation-play-state:paused] ${
          reverse
            ? "animate-infinite-scroll-reverse"
            : "animate-infinite-scroll"
        }`}
      >
        <div className="flex shrink-0 gap-10 px-5">
          {airlines.map((name) => (
            <div
              key={name}
              className="flex h-28 w-64 shrink-0 items-center justify-center rounded-md bg-white p-6 "
            >
              <Image
                src={`/항공사/${name}.png`}
                alt={name}
                width={224}
                height={96}
                loading="eager"
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex shrink-0 gap-10 px-5" aria-hidden="true">
          {airlines.map((name) => (
            <div
              key={`dup-${name}`}
              className="flex h-28 w-64 shrink-0 items-center justify-center rounded-md bg-white p-6 shadow-xs"
            >
              <Image
                src={`/항공사/${name}.png`}
                alt=""
                width={224}
                height={96}
                loading="eager"
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <div className="flex w-full flex-col gap-6">
      <LogoRow airlines={rowTopAirlines} />
      <LogoRow airlines={rowBottomAirlines} reverse />
    </div>
  );
}
