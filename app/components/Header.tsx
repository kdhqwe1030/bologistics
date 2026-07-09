"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HEADER_OFFSET } from "../lib/scroll";

const MENUS = [
  {
    title: "About Us",
    items: [
      { label: "CEO 인사말", href: "/about#ceo" },
      { label: "비전 및 핵심가치", href: "/about#vision" },
      { label: "연혁", href: "/about#history" },
      { label: "글로벌 네트워크", href: "/about#network" },
    ],
  },
  {
    title: "Business",
    items: [
      { label: "항공 운송", href: "/business/air" },
      { label: "해상 운송", href: "/business/sea" },
      { label: "내륙 운송", href: "/business/inland" },
      { label: "통관 및 창고 보관", href: "/business/warehouse" },
    ],
  },
  {
    title: "Support",
    items: [{ label: "지점 안내", href: "#" }],
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  const isLight = pathname !== "/" || scrolled || isOpen;

  const handleItemClick =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      setIsOpen(false);

      const [path, hash] = href.split("#");
      if (!hash) return;

      const isSamePage = path === pathname;
      if (!isSamePage) return;

      e.preventDefault();
      const target = document.getElementById(hash);
      if (!target) return;

      // 해시 누적(/about#ceo#network) 방지 — 항상 단일 해시로 유지
      history.replaceState(null, "", `${path}#${hash}`);

      if (window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -HEADER_OFFSET });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

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
            src="/투명로고.webp"
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
          <nav className="flex items-start justify-center gap-16 py-4">
            {MENUS.map((menu) => (
              <div
                key={`${menu.title}-sub`}
                className="flex w-32 flex-col items-center gap-4"
              >
                {menu.items.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={handleItemClick(item.href)}
                    className="whitespace-nowrap text-base font-medium text-gray-600 transition-colors hover:text-[#1688CA]"
                  >
                    {item.label}
                  </Link>
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
