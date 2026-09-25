import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-[#0c0d10]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo Icon + Brand Text */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="FitLog Icon"
            width={32}
            height={32}
            priority
            className="h-7 w-auto object-contain"
          />
          <span className="text-base font-black tracking-widest text-white">
            FITLOG
          </span>
        </Link>

        {/* Center Pill Navigation */}
        <nav className="flex items-center gap-1 rounded-full border border-zinc-800/80 bg-zinc-950/80 p-1">
          <Link
            href="/"
            className="rounded-full bg-[#b8ff00] px-4 py-1.5 text-xs font-extrabold text-zinc-950 transition hover:bg-[#a5e600]"
          >
            Workouts
          </Link>
          <Link
            href="/my-plan"
            className="rounded-full px-4 py-1.5 text-xs font-semibold text-zinc-400 transition hover:text-white"
          >
            My Plan
          </Link>
        </nav>

        {/* Right Counter Statuses */}
        <div className="flex items-center gap-4 text-xs font-medium text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span>Plan</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#b8ff00] text-[10px] font-black text-zinc-950">
              0
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>Saved</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-bold text-zinc-300">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
