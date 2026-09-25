import ExerciseCard from "@/components/common/hero section/exercise-card";
import { IExercise } from "@/components/type/exercise";

const getExercises = async (): Promise<IExercise[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch exercises");
  }

  return res.json();
};

const HomePage = async () => {
  const exercises = await getExercises();

  return (
    <main className="min-h-screen bg-[#0B0C0E] py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading Section (Left aligned as per Figma) */}
        <div className="mb-8 text-left">
          <h1 className="text-3xl font-black tracking-tight text-white md:text-4xl uppercase">
            THE LIBRARY
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
