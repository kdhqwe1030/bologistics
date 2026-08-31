export const MENUS = [
  {
    title: "About Us",
    items: [
      { label: "CEO 인사말", href: "/about#ceo" },
      { label: "비전 및 핵심가치", href: "/about#vision" },
      { label: "연혁", href: "/about#history" },
      { label: "조직도", href: "/about#org-chart" },
    ],
  },
  {
    title: "Business",
    items: [
      { label: "항공 일반/위험품", href: "/business/air" },
      { label: "항공 차터운용", href: "/business/air-charter" },
    ],
  },
  {
    title: "Support",
    items: [{ label: "채용 안내", href: "/support" }],
  },
] as const;
