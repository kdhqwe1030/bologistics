import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/test.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/50 to-transparent" />
      </section>

      <section
        id="business"
        className="flex h-screen w-full items-center justify-center bg-white"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          Business 소개 영역
        </h2>
      </section>

      <section
        id="contact"
        className="flex h-screen w-full items-center justify-center bg-gray-50"
      >
        <h2 className="text-3xl font-bold text-gray-900">Contact Us 영역</h2>
      </section>

      <Footer />
    </div>
  );
}
