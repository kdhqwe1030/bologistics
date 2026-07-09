export const MENUS = [
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
    items: [{ label: "지점 안내", href: "/support" }],
  },
] as const;
