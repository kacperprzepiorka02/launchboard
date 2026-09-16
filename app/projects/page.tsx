import { supabase } from "@/lib/supabase/client";

export default async function ProjectsPage() {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    return (
      <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-2xl font-bold">Błąd pobierania projektów</h1>
          <p className="mt-4 text-red-400">{error.message}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-400">
          LaunchBoard
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Moje projekty
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects?.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <p className="text-sm text-zinc-500">
                Projekt #{project.id}
              </p>

              <h2 className="mt-2 text-xl font-semibold">
                {project.title}
              </h2>

              <p className="mt-3 text-zinc-400">
                {project.description}
              </p>

              <p className="mt-4 text-sm text-zinc-500">
                {project.tech_stack}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}