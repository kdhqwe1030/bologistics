export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-3 lg:px-12">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">비오로지스틱스</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-white/60">
            Quick Links
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-white/60">
            Contact
          </span>
        </div>
      </div>
    </footer>
  );
}
