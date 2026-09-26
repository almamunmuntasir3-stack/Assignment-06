// src/app/loading.tsx

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-4 bg-[#0c0d10]">
      {/* Neon Spinner */}
      <div className="relative flex h-12 w-12 items-center justify-center">
        <div className="absolute h-full w-full animate-spin rounded-full border-4 border-zinc-800 border-t-[#b8ff00]"></div>
      </div>

      {/* Loading Text */}
      <p className="text-xs font-black uppercase tracking-widest text-zinc-400 animate-pulse">
        Loading FitLog...
      </p>
    </div>
  );
}
