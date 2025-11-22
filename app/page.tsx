import Link from "next/link";

const highlights = [
  { title: "Agentic Flow", description: "Autonomous decisions with clear feedback loops." },
  { title: "Type-Safe Stack", description: "Next.js 14, React 18, TypeScript 5, TailwindCSS 3." },
  { title: "Deploy Ready", description: "Preconfigured for seamless Vercel production deploys." }
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center gap-16 px-6 py-24 sm:px-10">
      <section className="flex flex-col items-center gap-8 text-center">
        <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          hello
        </span>
        <h1 className="text-balance text-5xl font-bold sm:text-6xl">
          Welcome to your autonomous agentic workspace
        </h1>
        <p className="max-w-2xl text-balance text-lg text-neutral-300 sm:text-xl">
          This responsive landing surface pairs a luminous gradient aesthetic with just the right hooks
          for fast iteration. Extend it into a full application or keep it as a polished greeting page.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://nextjs.org/docs"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/50 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/60"
          >
            Read Next.js Docs
          </Link>
          <Link
            href="https://tailwindcss.com/docs"
            className="rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-100 transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            Tailwind Reference
          </Link>
        </div>
      </section>

      <section className="grid w-full gap-6 md:grid-cols-3">
        {highlights.map((highlight) => (
          <article
            key={highlight.title}
            className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent p-[1px] transition hover:border-primary/60 hover:from-primary/30 hover:via-primary/10 hover:to-transparent"
          >
            <div className="flex h-full flex-col gap-3 rounded-[calc(theme(borderRadius.2xl)-1px)] bg-neutral-950/80 p-6 backdrop-blur">
              <h3 className="text-lg font-semibold text-white transition group-hover:text-primary">
                {highlight.title}
              </h3>
              <p className="text-sm text-neutral-400">{highlight.description}</p>
            </div>
          </article>
        ))}
      </section>

      <footer className="flex flex-col items-center gap-3 text-center text-sm text-neutral-500">
        <p>
          Crafted autonomously by <span className="font-semibold text-neutral-300">Codex</span>.
        </p>
        <p className="text-xs">
          Ready for immediate deployment — run <code className="rounded bg-neutral-900 px-1.5 py-0.5">npm run build</code>{" "}
          then push straight to Vercel.
        </p>
      </footer>
    </main>
  );
}
