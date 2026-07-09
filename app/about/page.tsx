export default function AboutPage() {
  return (
    <div className="flex w-full flex-col">
      <section
        id="ceo"
        className="flex min-h-screen w-full scroll-mt-20 items-center justify-center bg-white pt-32"
      >
        <h1 className="text-3xl font-bold text-gray-900">CEO 인사말</h1>
      </section>

      <section id="vision" className="w-full scroll-mt-20">
        <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
          <h1 className="text-3xl font-bold text-gray-900">비전</h1>
        </div>
        <div className="flex min-h-screen w-full items-center justify-center bg-gray-50">
          <h1 className="text-3xl font-bold text-gray-900">핵심가치</h1>
        </div>
      </section>

      <section
        id="history"
        className="flex min-h-screen w-full  items-center justify-center bg-white"
      >
        <h1 className="text-3xl font-bold text-gray-900">연혁</h1>
      </section>

      <section
        id="network"
        className="flex min-h-screen w-full items-center justify-center bg-gray-50"
      >
        <h1 className="text-3xl font-bold text-gray-900">글로벌 네트워크</h1>
      </section>
    </div>
  );
}
