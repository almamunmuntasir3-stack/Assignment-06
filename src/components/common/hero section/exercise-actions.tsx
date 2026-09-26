"use client";

import { toast } from "sonner";
import { useExercise } from "@/context/ExerciseContext";
import type { IExercise } from "@/components/type/exercise";

export default function ExerciseActions({ exercise }: { exercise: IExercise }) {
  const { addToPlan, addToSaved } = useExercise();

  const handleAddToPlan = () => {
    addToPlan(exercise);
    toast.success(`${exercise.name} added to today's plan!`);
  };

  const handleSaveForLater = () => {
    addToSaved(exercise);
    toast.info(`${exercise.name} saved for later!`);
  };

  return (
    <div className="flex items-center gap-3 pt-2">
      <button
        type="button"
        onClick={handleAddToPlan}
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4FF00] px-5 py-3.5 text-xs font-extrabold text-black transition hover:bg-[#c5f000] active:scale-[0.98]"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        Add to today&apos;s plan
      </button>

      <button
        type="button"
        onClick={handleSaveForLater}
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-[#16181D]/80 px-5 py-3.5 text-xs font-semibold text-zinc-300 transition hover:bg-zinc-800 hover:text-white active:scale-[0.98]"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
        Save for later
      </button>
    </div>
  );
}
