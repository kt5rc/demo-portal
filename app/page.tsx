import Link from "next/link";
import { users } from "./lib/users";

export default function Home() {
  const userCount = users.length;
  const roleCount = new Set(users.map((u) => u.role)).size;
  const skillCount = new Set(users.flatMap((u) => u.skills)).size;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Hero */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
          <p className="text-sm text-cyan-300">Next.js + Tailwind + Vercel</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Demo Portal
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            外部研修から合流するメンバー向けの「触って理解する」デモ。
            DBなし（モック）で、ルーティング・コンポーネント・最低限のUIを一通り体験できます。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/users"
              className="rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-cyan-400"
            >
              Usersを触る →
            </Link>
            <Link
              href="/about"
              className="rounded-2xl border border-cyan-700/40 bg-cyan-950/20 px-5 py-3 text-sm font-semibold text-cyan-100 hover:border-cyan-600/60"
            >
              About
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
            <div className="text-sm text-zinc-400">Users</div>
            <div className="mt-2 text-2xl font-bold text-cyan-100">
              {userCount}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
            <div className="text-sm text-zinc-400">Roles</div>
            <div className="mt-2 text-2xl font-bold text-cyan-100">
              {roleCount}
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
            <div className="text-sm text-zinc-400">Unique Skills</div>
            <div className="mt-2 text-2xl font-bold text-cyan-100">
              {skillCount}
            </div>
          </div>
        </div>

        {/* Learn / Steps */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-lg font-semibold">このデモで学べること</h2>
            <ul className="mt-4 space-y-2 text-zinc-300">
              <li>
                <span className="text-cyan-300">App Router</span>（app/
                配下の構成）
              </li>
              <li>
                <span className="text-cyan-300">動的ルーティング</span>
                （/users/[id]）
              </li>
              <li>
                <span className="text-cyan-300">Client Component</span>
                （検索フィルタ）
              </li>
              <li>
                <span className="text-cyan-300">データ層分離</span>（app/lib）
              </li>
              <li>
                <span className="text-cyan-300">Vercel</span>
                （GitHub連携デプロイ）
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-lg font-semibold">触る順番（おすすめ）</h2>
            <ol className="mt-4 space-y-3 text-zinc-300">
              <li>
                <span className="mr-2 rounded-full border border-cyan-700/40 bg-cyan-950/20 px-2 py-0.5 text-xs text-cyan-100">
                  Step 1
                </span>
                <Link
                  className="text-cyan-300 hover:text-cyan-200"
                  href="/users"
                >
                  /users
                </Link>{" "}
                で一覧を見る
              </li>
              <li>
                <span className="mr-2 rounded-full border border-cyan-700/40 bg-cyan-950/20 px-2 py-0.5 text-xs text-cyan-100">
                  Step 2
                </span>
                検索で絞り込み（Client Component）
              </li>
              <li>
                <span className="mr-2 rounded-full border border-cyan-700/40 bg-cyan-950/20 px-2 py-0.5 text-xs text-cyan-100">
                  Step 3
                </span>
                名前をクリックして詳細へ（/users/[id]）
              </li>
              <li>
                <span className="mr-2 rounded-full border border-cyan-700/40 bg-cyan-950/20 px-2 py-0.5 text-xs text-cyan-100">
                  Step 4
                </span>
                <span className="text-zinc-400">/users/999</span>{" "}
                で404体験（notFound）
              </li>
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
}
