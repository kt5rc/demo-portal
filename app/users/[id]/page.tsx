import Link from "next/link";
import { Metadata } from "next";
import { getUser } from "../../lib/users";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const user = getUser(id);
  if (!user) return { title: "User Not Found" };
  return {
    title: `${user.name} - User Detail`,
  };
}

export default async function UserDetailPage({ params }: Props) {
  const { id } = await params;
  const user = getUser(id);
  if (!user) notFound();

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex items-end justify-between gap-4">
          <h1 className="text-2xl font-bold">User Detail</h1>
          <Link
            className="text-sm text-zinc-300 hover:text-white"
            href="/users"
          >
            ← Users
          </Link>
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-semibold">{user.name}</div>
              <div className="text-sm text-zinc-400">{user.role}</div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {user.skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-cyan-700/40 bg-cyan-950/30 px-3 py-1 text-xs text-cyan-100"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
