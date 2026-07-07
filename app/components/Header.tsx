"use client";

import { useState } from "react";

const aboutUsMenu = [
  { ko: "CEO 인사말", en: "CEO Greeting" },
  { ko: "비전 및 핵심가치", en: "Vision & Value" },
  { ko: "연혁", en: "History" },
  { ko: "글로벌 네트워크", en: "Global Network" },
];

const businessMenu = [
  { ko: "항공 운송", en: "Air Transport" },
  { ko: "해상 운송", en: "Marine Transport" },
  { ko: "특수/신선 화물", en: "Special & Cold Chain" },
  { ko: "통관 및 창고 보관", en: "Customs & Warehousing" },
];

type MenuKey = "about" | "business";

const menuItems: Record<MenuKey, { ko: string; en: string }[]> = {
  about: aboutUsMenu,
  business: businessMenu,
};

export default function Header() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const activeItems = openMenu ? menuItems[openMenu] : null;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <a href="/" className="text-2xl font-bold tracking-wide text-white">
          비오로지스틱스
        </a>
        <nav className="flex items-center gap-32">
          <button
            className="text-xl font-bold tracking-wide text-white"
            onMouseEnter={() => setOpenMenu("about")}
          >
            About Us
          </button>
          <button
            className="text-xl font-bold tracking-wide text-white"
            onMouseEnter={() => setOpenMenu("business")}
          >
            Business
          </button>
        </nav>
      </div>

      <div
        className={`overflow-hidden bg-white/95 shadow-lg backdrop-blur-sm transition-all duration-300 ease-out ${
          openMenu ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-4 gap-4 px-6 py-8 lg:px-12">
          {activeItems?.map((item) => (
            <a
              key={item.ko}
              href="#"
              className="flex flex-col gap-1 rounded-md px-4 py-3 transition-colors hover:bg-black/5"
            >
              <span className="text-base font-medium text-gray-900">
                {item.ko}
              </span>
              <span className="text-xs text-gray-500">{item.en}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
