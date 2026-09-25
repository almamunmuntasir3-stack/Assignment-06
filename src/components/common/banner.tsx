import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <section className="mx-auto max-w-8xl px-4 pt-12 sm:px-6 lg:px-8">
      <div
        className="
          relative
          min-h-[450px]
          overflow-hidden
          rounded-2xl
          border
          border-zinc-800
          bg-[#14161b]
        "
      >
        <div className="grid min-h-[450px] items-center lg:grid-cols-2">
          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-10 px-7 py-12 sm:px-10 lg:px-14">
            {/* Small Heading */}
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#b8ff00]">
              Workout Library
            </p>

            {/* Main Heading */}
            <h1
              className="
                mt-6
                max-w-2xl
                text-5xl
                font-black
                uppercase
                leading-[0.95]
                tracking-[-0.03em]
                text-white
                sm:text-6xl
                lg:text-[64px]
              "
            >
              Train with intent.
              <br />
              Log every set.
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-xl
                text-sm
                leading-6
                text-zinc-400
                sm:text-base
              "
            >
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {/* Button */}
            <div className="mt-8">
              <Link
                href="#library"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-md
                  bg-[#b8ff00]
                  px-6
                  py-3.5
                  text-[11px]
                  font-black
                  uppercase
                  tracking-wider
                  text-black
                  transition
                  duration-200
                  hover:bg-[#c8ff33]
                  hover:shadow-[0_0_25px_rgba(184,255,0,0.15)]
                  active:scale-95
                "
              >
                Browse Workouts
              </Link>
            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex h-full items-center justify-center lg:justify-end">
            <div className="relative w-[75%] max-w-[430px] lg:mr-10 lg:w-full">
              <Image
                src="/banner.png"
                alt="Gym Exercise Anatomical Illustration"
                width={500}
                height={500}
                priority
                className="
                  h-auto
                  w-full
                  object-contain
                  drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
