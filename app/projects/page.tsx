import { createClient } from "@/lib/supabase/server";

export default async function ProjectsPage() {
  const supabase = await createClient();
  
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
              className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-zinc-500">
                    Projekt #{project.id}
                  </p>

                  <h2 className="mt-2 text-xl font-semibold">
                    {project.title}
                  </h2>
                </div>

                {project.featured && (
                  <span className="rounded-full border border-emerald-800 bg-emerald-950 px-3 py-1 text-xs font-medium text-emerald-400">
                    Featured
                  </span>
                )}
              </div>

              <p className="mt-4 text-zinc-400">
                {project.description}
              </p>

              <p className="mt-4 text-sm text-zinc-500">
                {project.tech_stack}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium transition hover:bg-zinc-800"
                  >
                    GitHub ↗
                  </a>
                )}

                {project.live_url && (
                  <a
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
                  >
                    Live demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}