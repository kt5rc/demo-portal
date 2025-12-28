import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-cyan-300">Demo Portal</p>
            <h1 className="mt-1 text-2xl font-bold">About</h1>
          </div>

          <Link
            className="rounded-2xl border border-cyan-700/40 bg-cyan-950/20 px-4 py-2 text-sm font-semibold text-cyan-100 hover:border-cyan-600/60"
            href="/"
          >
            ← Home
          </Link>
        </div>

        {/* Intro */}
        <p className="mt-6 text-zinc-300">
          外部研修から合流するメンバー向けに「触って理解する」ためのデモサイトです。
          DBなし（モックデータ）で、Next.js（App Router）と Tailwind
          の基本を最短で体験できます。
        </p>

        {/* Sections */}
        <div className="mt-10 space-y-6">
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-lg font-semibold">目的</h2>
            <ul className="mt-4 space-y-2 text-zinc-300">
              <li>・環境構築や細かい設定で詰まらず、まず「全体像」を掴む</li>
              <li>
                ・ルーティング（一覧→詳細）とコンポーネント分割の感覚を得る
              </li>
              <li>・Tailwindで最低限“それっぽいUI”を作る流れを知る</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-lg font-semibold">触り方（おすすめ順）</h2>
            <ol className="mt-4 space-y-2 text-zinc-300">
              <li>
                1.{" "}
                <Link
                  className="text-cyan-300 hover:text-cyan-200"
                  href="/users"
                >
                  /users
                </Link>{" "}
                で一覧を見る
              </li>
              <li>2. 検索ボックスで絞り込み（インタラクティブ要素）</li>
              <li>3. ユーザーをクリックして詳細へ（/users/[id]）</li>
              <li>4. 存在しないIDで404体験（例：/users/999）</li>
            </ol>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-lg font-semibold">ざっくり構成</h2>
            <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4 font-mono text-sm text-zinc-200">
              <div>app/</div>
              <div className="ml-4">page.tsx（Top）</div>
              <div className="ml-4">about/page.tsx（このページ）</div>
              <div className="ml-4">users/page.tsx（一覧）</div>
              <div className="ml-4">users/[id]/page.tsx（詳細）</div>
              <div className="ml-4">lib/users.ts（モックデータ・取得関数）</div>
            </div>
            <p className="mt-4 text-zinc-300">
              UIはページ側、データは{" "}
              <span className="text-cyan-300">app/lib</span>{" "}
              側に寄せて、役割を分けています。
            </p>
          </section>

          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-lg font-semibold">開発ルール（最低限）</h2>
            <ul className="mt-4 space-y-2 text-zinc-300">
              <li>・保存時フォーマット（Prettier）＋ ESLint 自動修正</li>
              <li>・見た目は「Cyanアクセント + ダーク背景」で統一</li>
              <li>・DBは使わず、まずは画面とルーティングに集中</li>
            </ul>
          </section>
        </div>

        {/* Footer Nav */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/users"
            className="rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-cyan-400"
          >
            Usersへ →
          </Link>
          <Link
            href="/"
            className="rounded-2xl border border-zinc-800 bg-zinc-900/40 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
          >
            Homeへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
