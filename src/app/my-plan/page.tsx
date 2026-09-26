"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useExercise } from "@/context/ExerciseContext";
import { toast } from "sonner";

export default function MyPlanPage() {
  const { planList, savedList, removeFromPlan, removeFromSaved } =
    useExercise();
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  const currentList = activeTab === "plan" ? planList : savedList;

  // Dynamic calculations for banner stats
  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce(
    (acc, item) => acc + (Number(item.duration) || 0),
    0,
  );
  const totalCalories = currentList.reduce(
    (acc, item) => acc + (Number(item.caloriesBurned) || 0),
    0,
  );

  // Sorting calculation
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") {
      return (Number(b.duration) || 0) - (Number(a.duration) || 0);
    }
    if (sortBy === "calories") {
      return (Number(b.caloriesBurned) || 0) - (Number(a.caloriesBurned) || 0);
    }
    if (sortBy === "rating") {
      return (Number(b.rating) || 0) - (Number(a.rating) || 0);
    }
    return 0;
  });

  const handleRemove = (id: string | number, name: string) => {
    if (activeTab === "plan") {
      removeFromPlan(id);
      toast.info(`${name} removed from your plan`);
    } else {
      removeFromSaved(id);
      toast.info(`${name} removed from saved list`);
    }
  };

  const handleMarkDone = (id: string | number, name: string) => {
    removeFromPlan(id);
    toast.success(`${name} marked as completed! 🎉`);
  };

  return (
    <main className="min-h-screen bg-[#0c0d10] text-white p-6 sm:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight text-white">
            MY PLAN
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats Card */}
        <div className="rounded-2xl border border-zinc-800/80 bg-[#121418] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/80">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-zinc-400">
              Exercises
            </span>
            <span className="text-4xl font-black text-[#b8ff00] mt-2">
              {totalExercises}
            </span>
          </div>

          <div className="flex flex-col sm:pl-8 pt-4 sm:pt-0">
            <span className="text-xs font-semibold text-zinc-400">Minutes</span>
            <span className="text-4xl font-black text-white mt-2">
              {totalMinutes}
            </span>
          </div>

          <div className="flex flex-col sm:pl-8 pt-4 sm:pt-0">
            <span className="text-xs font-semibold text-zinc-400">
              Calories
            </span>
            <span className="text-4xl font-black text-white mt-2">
              {totalCalories}
            </span>
          </div>
        </div>

        {/* Tabs & Sort Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Tabs */}
          <div className="inline-flex items-center rounded-xl border border-zinc-800/80 bg-[#121418] p-1">
            <button
              onClick={() => setActiveTab("plan")}
              className={`rounded-lg px-5 py-2 text-xs font-bold transition ${
                activeTab === "plan"
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-lg px-5 py-2 text-xs font-bold transition ${
                activeTab === "saved"
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400 font-medium">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "calories" | "rating")
              }
              className="rounded-xl border border-zinc-800 bg-[#121418] px-3 py-2 text-xs font-bold text-white outline-none cursor-pointer hover:border-zinc-700 transition"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Exercise List / Empty State */}
        {sortedList.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-800/80 bg-[#121418]/40 p-16 text-center flex flex-col items-center justify-center min-h-[300px]">
            <h2 className="text-xl font-black uppercase text-white tracking-wider">
              NOTHING HERE YET
            </h2>
            <p className="text-xs text-zinc-400 mt-2 max-w-sm">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="mt-6 rounded-full bg-[#b8ff00] px-6 py-3 text-xs font-black text-zinc-950 transition hover:bg-[#a5e600]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedList.map((exercise) => (
              <div
                key={exercise.id}
                className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-zinc-800/80 bg-[#121418] p-4 sm:p-5 transition hover:border-zinc-700/80"
              >
                {/* Left Content */}
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-zinc-900">
                    <Image
                      src={exercise.image}
                      alt={exercise.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-black uppercase tracking-tight text-white">
                      {exercise.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {exercise.equipment}
                    </p>

                    {/* Quick Stats */}
                    <div className="flex items-center gap-4 mt-2 text-[11px] text-zinc-400">
                      <span className="flex items-center gap-1">
                        ⏱ {exercise.duration} min
                      </span>
                      <span className="flex items-center gap-1">
                        🔥 {exercise.caloriesBurned} kcal
                      </span>
                      <span className="flex items-center gap-1 text-zinc-300">
                        ★ {exercise.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 border-zinc-800/60 pt-3 sm:pt-0">
                  <Link
                    href={`/exercise/${exercise.id}`}
                    className="rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-xs font-bold text-zinc-300 transition hover:border-zinc-700 hover:text-white"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      type="button"
                      onClick={() => handleMarkDone(exercise.id, exercise.name)}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#b8ff00] px-4 py-2.5 text-xs font-black text-zinc-950 transition hover:bg-[#a5e600]"
                    >
                      ✓ Mark as Done
                    </button>
                  )}

                  {/* Remove Button Cross */}
                  <button
                    type="button"
                    onClick={() => handleRemove(exercise.id, exercise.name)}
                    className="p-2 text-zinc-500 hover:text-white transition"
                    title="Remove item"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
