import BusinessContent from "./components/hero/BusinessContent";
import BusinessIntro from "./components/hero/BusinessIntro";
import NetworkSection from "./components/hero/NetworkSection";
import ScrollDownIndicator from "./components/ScrollDownIndicator";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/mainbackground.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/50 to-transparent" />
        <ScrollDownIndicator targetId="business" />
      </section>

      <BusinessIntro />

      <NetworkSection />

      <BusinessContent />
    </div>
  );
}
