"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import FadeIn from "../components/FadeIn";

const TABS = [
  {
    label: "항공 운송",
    href: "/business/air",
  },
  {
    label: "항공 차터",
    href: "/business/air-charter",
  },
];

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-white pt-12">
      {/* 탭바 영역 */}
      <FadeIn direction="none">
        <section className="mx-auto mt-16 w-full max-w-7xl px-6 lg:px-12">
          <nav className="flex border-b border-gray-200">
            {TABS.map((tab) => {
              const isActive =
                pathname === tab.href || pathname.startsWith(`${tab.href}/`);

              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`relative flex-1 pb-5 text-center text-base transition-colors ${
                    isActive
                      ? "font-semibold text-gray-900"
                      : "font-medium text-gray-400 hover:text-gray-700"
                  }`}
                >
                  {tab.label}

                  {isActive && (
                    <span className="absolute bottom-[-1px] left-0 h-0.5 w-full bg-[#1688CA]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </section>
      </FadeIn>

      {/* 각 페이지 내용 */}
      <section className="mx-auto w-full max-w-7xl lg:px-12">
        {children}
      </section>
    </main>
  );
}
