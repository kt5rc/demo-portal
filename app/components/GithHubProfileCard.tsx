type GitHubUser = {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
};

async function getGitHubUser(username: string): Promise<GitHubUser> {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    next: { revalidate: 60 * 60 },
    headers: {
      ...(process.env.GITHUB_TOKEN
        ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
        : {}),
    },
  });

  if (!res.ok) throw new Error("Failed to fetch GitHub user");
  return res.json();
}

export default async function GitHubProfileCard({
  username,
}: {
  username: string;
}) {
  const u = await getGitHubUser(username);

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm">
      <div className="grid gap-6 lg:grid-cols-[auto,1fr]">
        {/* Left: Avatar */}
        <div className="flex justify-center lg:justify-start">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/30 p-3">
            <img
              src={u.avatar_url}
              alt={`${u.login} avatar`}
              className="h-32 w-32 rounded-2xl object-cover md:h-40 md:w-40"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="min-w-0">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="truncate text-xl font-bold">
                {u.name ?? u.login}
              </div>
              <div className="mt-1 truncate text-sm text-zinc-400">
                @{u.login}
              </div>
            </div>

            <a
              href={u.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-700/40 bg-cyan-950/20 px-4 py-2 text-sm font-semibold text-cyan-100 hover:border-cyan-600/60"
            >
              GitHub <span aria-hidden>↗</span>
            </a>
          </div>

          {/* Bio */}
          {u.bio && <p className="mt-4 text-zinc-300">{u.bio}</p>}

          {/* Stats */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/30 p-4">
              <div className="text-sm text-zinc-400">Repos</div>
              <div className="mt-1 text-2xl font-bold text-cyan-100">
                {u.public_repos}
              </div>
            </div>

            {/* 追加したくなったらここに増やせる枠（followers等） */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/30 p-4">
              <div className="text-sm text-zinc-400">Focus</div>
              <div className="mt-1 text-sm font-semibold text-zinc-200">
                Next.js / Tailwind
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/30 p-4">
              <div className="text-sm text-zinc-400">Use</div>
              <div className="mt-1 text-sm font-semibold text-zinc-200">
                Personal Study
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
