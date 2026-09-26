"use client";

import Image from "next/image";
import Link from "next/link";

import { useExercise } from "@/context/ExerciseContext";

const PlanPage = () => {
  const { planList } = useExercise();

  return (
    <main className="min-h-screen bg-[#0B0C0E] px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#DFFF00]">
            Your Workout
          </p>

          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight md:text-4xl">
            Today&apos;s Plan
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            {planList.length} workout{planList.length !== 1 ? "s" : ""} in your
            plan.
          </p>
        </div>

        {/* Empty State */}
        {planList.length === 0 ? (
          <div className="rounded-2xl border border-zinc-800 bg-[#121417] px-6 py-16 text-center">
            <h2 className="text-xl font-bold uppercase">Your plan is empty</h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">
              Browse the workout library and add exercises to your plan.
            </p>

            <Link
              href="/"
              className="mt-6 inline-flex rounded-lg bg-[#DFFF00] px-5 py-3 text-xs font-black uppercase text-black transition hover:bg-[#cfff00]"
            >
              Browse Workouts
            </Link>
          </div>
        ) : (
          /* Cards */
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {planList.map((exercise) => (
              <Link
                key={exercise.id}
                href={`/exercise/${exercise.id}`}
                className="group overflow-hidden rounded-2xl bg-[#121417] p-3 transition duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden rounded-xl bg-zinc-800">
                  <Image
                    src={exercise.image}
                    alt={exercise.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="px-1 pb-2 pt-4">
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    {exercise.muscleGroups.map((muscle) => (
                      <span
                        key={muscle}
                        className="rounded-md bg-[#DFFF00] px-2 py-1 text-[9px] font-black uppercase text-black"
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-lg font-black uppercase tracking-tight">
                    {exercise.name}
                  </h2>

                  <p className="mt-1 text-xs text-zinc-500">
                    {exercise.equipment}
                  </p>

                  <div className="mt-4 flex items-center gap-3 text-xs text-zinc-400">
                    <span>{exercise.duration} min</span>
                    <span>•</span>
                    <span>{exercise.caloriesBurned} kcal</span>
                    <span>•</span>
                    <span>⭐ {exercise.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default PlanPage;
