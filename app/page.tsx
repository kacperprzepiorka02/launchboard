
export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-400">
      {process.env.NEXT_PUBLIC_APP_NAME}
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
          Portfolio projektów i środowisk produkcyjnych — deployed with Vercel.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Panel pokazujący moje projekty, technologie, deploymenty i status
          aplikacji.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/projects"
            className="rounded-lg bg-white px-6 py-3 text-center font-medium text-black transition hover:bg-zinc-200"
          >
            Zobacz projekty
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 px-6 py-3 text-center font-medium text-white transition hover:bg-zinc-900"
          >
            GitHub
          </a>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-sm text-zinc-400">Environment</p>
            <p className="mt-2 font-semibold">Development</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-sm text-zinc-400">Deployment</p>
            <p className="mt-2 font-semibold">Local</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="text-sm text-zinc-400">Status</p>
            <p className="mt-2 font-semibold text-green-400">
              ● Operational
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}