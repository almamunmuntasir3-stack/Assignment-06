import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

interface ExerciseDetailClientProps {
  exercise: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
}

function ExerciseDetailClient({ exercise }: ExerciseDetailClientProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
      >
        Add to Routine
      </button>
      <button
        type="button"
        className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:border-zinc-500"
      >
        Save Exercise
      </button>
      <div className="w-full text-xs uppercase tracking-[0.2em] text-zinc-500">
        {exercise.id}
      </div>
    </div>
  );
}

export default async function ExerciseDetailPage({ params }: PageProps) {
  const { id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return notFound();
  const exercise = await res.json();

  return (
    <main className="min-h-screen bg-[#0d0e12] py-10 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/"
          className="mb-6 inline-block text-xs font-semibold text-zinc-400 hover:text-white"
        >
          ← Back to Library
        </Link>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left: Image */}
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#181a20] lg:col-span-6">
            <Image
              src={exercise.image}
              alt={exercise.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Info & Client Action Buttons */}
          <div className="flex flex-col lg:col-span-6">
            <h1 className="text-3xl font-black uppercase">{exercise.name}</h1>
            <p className="mt-3 text-xs text-zinc-400">{exercise.description}</p>

            {/* Context action buttons component */}
            <div className="mt-6">
              <ExerciseDetailClient exercise={exercise} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
