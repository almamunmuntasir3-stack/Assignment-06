import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-900 bg-[#0c0d10] py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-12">
        {/* Left Logo + Brand Text */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="FitLog Icon"
            width={24}
            height={24}
            className="h-6 w-auto object-contain"
          />
          <span className="text-sm font-black tracking-widest text-white">
            FITLOG
          </span>
        </Link>

        {/* Right Copyright Text */}
        <p className="text-xs text-zinc-500 font-medium text-center sm:text-right">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log
          honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
