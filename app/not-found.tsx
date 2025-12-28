import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-cyan-400">404</h1>
        <p className="mt-4 text-zinc-300">
          お探しのページは見つかりませんでした。
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-2xl border border-cyan-700/40 bg-cyan-950/20 px-5 py-3 text-sm font-semibold text-cyan-100 hover:border-cyan-600/60"
        >
          ← Topに戻る
        </Link>
      </div>
    </main>
  );
}
