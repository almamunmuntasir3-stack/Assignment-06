"use client";

import { useExercise } from "@/context/ExerciseContext";
import type { IExercise } from "@/components/type/exercise";

export default function ExerciseDetailClient({
  exercise,
}: {
  exercise: IExercise;
}) {
  const { addToPlan, addToSaved } = useExercise();

  return (
    <div className="flex gap-3">
      <button
        onClick={() => addToPlan(exercise)}
        className="rounded-lg bg-[#DFFF00] px-5 py-3 text-xs font-black uppercase text-black"
      >
        Add to today&apos;s plan
      </button>

      <button
        onClick={() => addToSaved(exercise)}
        className="rounded-lg border border-zinc-700 bg-zinc-900 px-5 py-3 text-xs font-extrabold uppercase text-white"
      >
        Save for later
      </button>
    </div>
  );
}
