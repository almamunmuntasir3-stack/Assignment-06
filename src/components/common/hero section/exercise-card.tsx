import Image from "next/image";
import Link from "next/link";
import type { IExercise } from "@/components/type/exercise";

interface ExerciseCardProps {
  exercise: IExercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <Link
      href={`/exercises/${exercise.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-[#121417] p-3 transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden rounded-xl bg-zinc-800">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col pt-4 px-1">
        {/* Muscle Groups Tags */}
        <div className="mb-2 flex flex-wrap gap-1.5">
          {exercise.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-md bg-[#DFFF00] px-2 py-0.5 text-[10px] font-black tracking-wider uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold uppercase tracking-tight text-white group-hover:text-[#DFFF00] transition-colors">
          {exercise.name}
        </h3>

        {/* Equipment / Subtitle */}
        <p className="mt-0.5 text-xs font-medium text-zinc-400">
          {exercise.equipment}
        </p>

        {/* Spacer to push metadata to bottom */}
        <div className="mt-auto pt-4">
          {/* Bottom Stats Row */}
          <div className="flex items-center gap-3 text-xs font-medium text-zinc-400">
            {/* Duration */}
            <div className="flex items-center gap-1">
              <svg
                className="h-3.5 w-3.5 stroke-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
              <span>{exercise.duration} min</span>
            </div>

            <span>•</span>

            {/* Calories */}
            <div className="flex items-center gap-1">
              <svg
                className="h-3.5 w-3.5 stroke-zinc-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path d="M12 2c0 0-6 4-6 10a6 6 0 0 0 12 0c0-6-6-10-6-10z" />
              </svg>
              <span>{exercise.caloriesBurned} kcal</span>
            </div>

            <span>•</span>

            {/* Rating */}
            <div className="flex items-center gap-1">
              <span className="text-zinc-400">☆</span>
              <span>{exercise.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;
