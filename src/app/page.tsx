import { animations } from "@/lib/animations";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16 sm:px-10">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Hello Leo ✌️
          </h1>
        </header>

        {animations.length === 0 ? (
          <EmptyState />
        ) : (
          <Gallery animations={animations} />
        )}
      </main>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-start gap-3 rounded-xl border border-dashed border-black/15 p-8 text-sm text-zinc-600 dark:border-white/15 dark:text-zinc-400">
      <p className="font-medium text-black dark:text-zinc-50">
        No animations yet.
      </p>
      <ol className="list-decimal space-y-1 pl-4">
        <li>
          Export your composition from After Effects with the Bodymovin
          plugin as a <code className="font-mono">.json</code> file.
        </li>
        <li>
          Drop it into{" "}
          <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
            public/lottie/
          </code>
          .
        </li>
        <li>
          Add an entry in{" "}
          <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
            src/lib/animations.ts
          </code>{" "}
          with an id, title, and the file path (e.g.{" "}
          <code className="font-mono">&quot;/lottie/my-anim.json&quot;</code>
          ).
        </li>
      </ol>
    </div>
  );
}
