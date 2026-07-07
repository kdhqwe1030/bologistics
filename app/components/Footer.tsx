import Image from "next/image";

const aboutUsMenu = [
  "CEO 인사말",
  "비전 및 핵심가치",
  "연혁",
  "글로벌 네트워크",
];

const businessMenu = [
  "항공 운송",
  "해상 운송",
  "특수/신선 화물",
  "통관 및 창고 보관",
];

export default function Footer() {
  return (
    <footer className="bg-[#181C25] text-sm text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12">
        <div className="flex flex-col justify-between gap-14 lg:flex-row">
          {/* 회사 정보 */}
          <div className="flex max-w-xl flex-col gap-6">
            <a href="/" className="flex w-fit items-center gap-2">
              <div className="relative h-12 w-12">
                <Image
                  src="/투명로고.png"
                  alt="비오로지스틱스 로고"
                  fill
                  className="object-contain"
                />
              </div>

              <span className="text-xl font-bold tracking-wide text-white">
                비오로지스틱스
              </span>
            </a>

            <div className="flex flex-col gap-2 leading-7">
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <span className="font-medium text-gray-200">
                  비오로지스틱스(주)
                </span>
                <span>대표이사 김선정</span>
                <span>사업자등록번호 203-87-00857</span>
              </div>

              <p>서울특별시 강서구 공항대로 237, 에이스타워마곡 1310호</p>

              <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:gap-6">
                <a
                  href="tel:02-6925-5870"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <PhoneIcon />
                  <span>02-6925-5870</span>
                </a>

                <a
                  href="mailto:air@bologistics.co.kr"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <MailIcon />
                  <span>air@bologistics.co.kr</span>
                </a>
              </div>
            </div>
          </div>

          {/* 사이트맵 */}
          <nav className="grid grid-cols-2 gap-x-14 gap-y-10 sm:gap-x-24 lg:min-w-[440px]">
            <div>
              <h3 className="mb-5 text-base font-bold text-white">About Us</h3>

              <ul className="flex flex-col gap-3.5">
                {aboutUsMenu.map((label) => (
                  <li key={label}>
                    <a href="#" className="transition-colors hover:text-white">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-base font-bold text-white">Business</h3>

              <ul className="flex flex-col gap-3.5">
                {businessMenu.map((label) => (
                  <li key={label}>
                    <a href="#" className="transition-colors hover:text-white">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* 하단 */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 비오로지스틱스. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-white">
              개인정보처리방침
            </a>
            <a href="#" className="transition-colors hover:text-white">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-4 w-4 shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-4 w-4 shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}
