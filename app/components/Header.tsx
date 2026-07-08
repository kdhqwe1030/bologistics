// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// // 메뉴 데이터를 배열로 관리하여 상단 메뉴와 하위 메뉴의 정렬을 동기화하기 쉽게 구성합니다.
// const MENUS = [
//   {
//     title: "About Us",
//     items: ["CEO 인사말", "비전 및 핵심가치", "연혁", "글로벌 네트워크"],
//   },
//   {
//     title: "Business",
//     items: ["항공 운송", "해상 운송", "특수/신선 화물", "통관 및 창고 보관"],
//   },
//   {
//     title: "Support",
//     items: ["지점 안내"],
//   },
// ];

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // 스크롤 반응 기준을 50px 정도로 주면 사용자 경험상 더 빠르고 자연스럽습니다.
//       setScrolled(window.scrollY > 50);
//     };
//     handleScroll();
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // 스크롤을 내렸거나, 마우스를 헤더에 올렸을 때(hover) 밝은 테마로 변경
//   const isLight = scrolled || isOpen;

//   return (
//     <header
//       className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
//         isLight
//           ? "border-b border-gray-200 bg-white shadow-sm"
//           : "border-b border-transparent bg-transparent"
//       }`}
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       {/* 1. 상단 메인 헤더 영역 */}
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 relative z-10 lg:px-12">
//         {/* 로고 영역 */}
//         <a href="/" className="flex items-center gap-1">
//           <Image
//             src="/투명로고.png"
//             alt="비오로지스틱스 로고"
//             width={40}
//             height={40}
//             className="h-12 w-12 object-contain"
//           />
//           <span
//             className={`text-xl font-bold tracking-wide transition-colors duration-300 ${
//               isLight ? "text-gray-800" : "text-white"
//             }`}
//           >
//             비오로지스틱스
//           </span>
//         </a>

//         {/* 1뎁스 메뉴 영역 */}
//         <nav className="flex items-center gap-24">
//           {MENUS.map((menu) => (
//             // w-32 속성으로 고정 너비를 주어 하위 메뉴와 중앙 정렬을 맞춥니다.
//             <div key={menu.title} className="w-32 text-center">
//               <button
//                 className={`font-semibold tracking-wide transition-colors duration-300 ${
//                   isLight ? "text-gray-900 hover:text-[#1688CA]" : "text-white"
//                 }`}
//               >
//                 {menu.title}
//               </button>
//             </div>
//           ))}
//         </nav>
//       </div>

//       {/* 2. 풀-위드(Full-width) 드롭다운 영역 */}
//       <div
//         className={`absolute left-0 top-full w-full bg-white overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 ${
//           isOpen
//             ? "max-h-96 opacity-100 visible border-b border-gray-200 shadow-md"
//             : "max-h-0 opacity-0 invisible border-t-transparent border-b-transparent"
//         }`}
//       >
//         <div className="mx-auto flex max-w-7xl items-start justify-between px-6 py-8 lg:px-12">
//           {/* 상단 레이아웃과 동일한 비례를 맞추기 위한 투명 로고 스페이서 */}
//           <div className="flex items-center gap-3 invisible pointer-events-none">
//             <div className="h-10 w-10"></div>
//             <span className="text-2xl font-bold tracking-wide">
//               비오로지스틱스
//             </span>
//           </div>

//           {/* 2뎁스 서브 메뉴 영역 */}
//           <nav className="flex items-start gap-24">
//             {MENUS.map((menu) => (
//               <div
//                 key={`${menu.title}-sub`}
//                 // 상단의 1뎁스 div와 똑같이 w-32를 주어 텍스트가 정확히 수직 정렬되게 합니다.
//                 className="flex w-32 flex-col items-center gap-4"
//               >
//                 {menu.items.map((item) => (
//                   <a
//                     key={item}
//                     href="#"
//                     className="whitespace-nowrap text-base font-medium text-gray-600 transition-colors hover:text-[#1688CA]"
//                   >
//                     {item}
//                   </a>
//                 ))}
//               </div>
//             ))}
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MENUS = [
  {
    title: "About Us",
    items: ["CEO 인사말", "비전 및 핵심가치", "연혁", "글로벌 네트워크"],
  },
  {
    title: "Business",
    items: ["항공 운송", "해상 운송", "특수/신선 화물", "통관 및 창고 보관"],
  },
  {
    title: "Support",
    items: ["지점 안내"],
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let mounted = true;

    const handleScroll = () => {
      if (!mounted) return;
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      mounted = false;
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isLight = scrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isLight
          ? "border-b border-gray-200 bg-white shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* 상단 메인 헤더 */}
      <div className="relative z-10 grid w-full grid-cols-[280px_1fr_280px] items-center px-6 py-3 lg:px-48">
        {/* 로고 영역 - 왼쪽 정렬 */}
        <a href="/" className="justify-self-start flex items-center gap-1">
          <Image
            src="/투명로고.png"
            alt="비오로지스틱스 로고"
            width={40}
            height={40}
            className="h-12 w-12 object-contain"
          />
          <span
            className={`text-xl font-bold tracking-wide transition-colors duration-300 ${
              isLight ? "text-gray-800" : "text-white"
            }`}
          >
            비오로지스틱스
          </span>
        </a>
        {/* 1뎁스 메뉴 영역 - 중앙 정렬 */}
        <nav className="flex items-center justify-center gap-16">
          {MENUS.map((menu) => (
            <div key={menu.title} className="w-32 text-center">
              <button
                className={`font-semibold tracking-wide transition-colors duration-300 ${
                  isLight ? "text-gray-900 hover:text-[#1688CA]" : "text-white"
                }`}
              >
                {menu.title}
              </button>
            </div>
          ))}
        </nav>
        {/* 오른쪽 빈 공간 - 가운데 정렬 균형용 */}
        <div className="justify-self-end" />
      </div>

      {/* 풀-위드 드롭다운 영역 */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 ease-in-out ${
          isOpen
            ? "visible max-h-96 border-b border-gray-200 opacity-100 shadow-md"
            : "invisible max-h-0 border-b-transparent border-t-transparent opacity-0"
        }`}
      >
        {/* <div className="mx-auto grid w-full grid-cols-[1fr_auto_1fr] items-start px-6 py-8 "> */}
        <div className="relative z-10 grid w-full grid-cols-[1fr_auto_1fr] items-center px-6 py-3 lg:px-16">
          {/* 로고 자리와 동일한 왼쪽 공간 */}
          <div className="invisible pointer-events-none justify-self-start flex items-center gap-1">
            <div className="h-12 w-12" />
            <span className="text-xl font-bold tracking-wide">
              비오로지스틱스
            </span>
          </div>

          {/* 2뎁스 서브 메뉴 - 상단 메뉴와 동일한 중앙 정렬 */}
          <nav className="flex items-start justify-center gap-20 py-4">
            {MENUS.map((menu) => (
              <div
                key={`${menu.title}-sub`}
                className="flex w-32 flex-col items-center gap-4"
              >
                {menu.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="whitespace-nowrap text-base font-medium text-gray-600 transition-colors hover:text-[#1688CA]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            ))}
          </nav>

          {/* 오른쪽 빈 공간 */}
          <div />
        </div>
      </div>
    </header>
  );
}
