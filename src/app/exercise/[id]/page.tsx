import Image from "next/image";
import type { IExercise } from "@/components/type/exercise";
import ExerciseActions from "@/components/common/hero section/exercise-actions";

const getExercise = async (id: string): Promise<IExercise> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch exercises");
  }

  const exercises: IExercise[] = await res.json();
  const exercise = exercises.find((item) => String(item.id) === String(id));

  if (!exercise) {
    throw new Error("Exercise not found");
  }

  return exercise;
};

const ExerciseDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const exercise = await getExercise(id);

  return (
    <main className="min-h-screen bg-[#0E0F12] text-white flex items-center justify-center p-6 sm:p-12">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT COLUMN */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-[#16181D]">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col space-y-6 pt-2">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              {exercise.name}
            </h1>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed max-w-xl">
              {exercise.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {exercise.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#D4FF00] px-4 py-1 text-xs font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Specs Card */}
          <div className="rounded-2xl border border-zinc-800/80 bg-[#16181D]/60 p-5 backdrop-blur-sm space-y-3.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold tracking-wider text-zinc-400 uppercase">
                Equipment
              </span>
              <span className="font-semibold text-zinc-200">
                {exercise.equipment}
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-zinc-800/60 pt-3.5">
              <span className="font-bold tracking-wider text-zinc-400 uppercase">
                Difficulty
              </span>
              <span className="font-semibold text-zinc-200">
                {exercise.difficulty}
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-zinc-800/60 pt-3.5">
              <span className="font-bold tracking-wider text-zinc-400 uppercase">
                Sets
              </span>
              <span className="font-semibold text-zinc-200">
                {exercise.sets}
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-zinc-800/60 pt-3.5">
              <span className="font-bold tracking-wider text-zinc-400 uppercase">
                Reps
              </span>
              <span className="font-semibold text-zinc-200">
                {exercise.reps}
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-zinc-800/60 pt-3.5">
              <span className="font-bold tracking-wider text-zinc-400 uppercase">
                Duration
              </span>
              <span className="font-semibold text-zinc-200">
                {exercise.duration} min
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-zinc-800/60 pt-3.5">
              <span className="font-bold tracking-wider text-zinc-400 uppercase">
                Calories
              </span>
              <span className="font-semibold text-zinc-200">
                {exercise.caloriesBurned} kcal
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-zinc-800/60 pt-3.5">
              <span className="font-bold tracking-wider text-zinc-400 uppercase">
                Rating
              </span>
              <span className="font-semibold text-zinc-200">
                {exercise.rating}
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              Instructions
            </h2>
            <ol className="space-y-2 text-xs text-zinc-400 leading-relaxed">
              {exercise.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="shrink-0 text-zinc-500 font-medium">
                    {index + 1}.
                  </span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Connected Action Buttons Component */}
          <ExerciseActions exercise={exercise} />
        </div>
      </div>
    </main>
  );
};

export default ExerciseDetailsPage;
