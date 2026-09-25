import Image from "next/image";
import Link from "next/link";

export interface Exercise {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
}

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <Link
      href={`/exercises/${exercise.id}`}
      className="group block overflow-hidden rounded-xl border border-zinc-800 bg-[#14161b] transition duration-200 hover:-translate-y-1 hover:border-[#b8ff00]/40"
    >
      <div className="relative aspect-video overflow-hidden bg-zinc-900">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {exercise.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#b8ff00] px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="text-sm font-black uppercase tracking-wide text-white">
          {exercise.name}
        </h3>

        <p className="mt-1 text-[11px] text-zinc-500">{exercise.equipment}</p>

        <div className="my-3 h-px bg-zinc-800" />

        <div className="flex items-center gap-4 text-[10px] text-zinc-400">
          <span className="flex items-center gap-1">
            <span>◷</span>
            {exercise.duration} min
          </span>

          <span className="flex items-center gap-1">
            <span>●</span>
            {exercise.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <span>☆</span>
            {exercise.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;
