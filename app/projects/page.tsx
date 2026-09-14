export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-400">
          LaunchBoard
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight">
          Moje projekty
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Projekty, technologie i środowiska, które buduję i wdrażam.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-500">01</p>
            <h2 className="mt-2 text-xl font-semibold">LaunchBoard</h2>
            <p className="mt-3 text-zinc-400">
              Portfolio dashboard zbudowany przy użyciu Next.js i wdrożony na
              Vercel.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
                Next.js
              </span>
              <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
                TypeScript
              </span>
              <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
                Vercel
              </span>
            </div>
          </article>

          <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-500">02</p>
            <h2 className="mt-2 text-xl font-semibold">Coming soon</h2>
            <p className="mt-3 text-zinc-400">
              Kolejny projekt zostanie tutaj dodany w przyszłości.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}