"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { User } from "../lib/users";

export default function UsersList({ users }: { users: User[] }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return users;
    return users.filter(
      (u) =>
        u.name.toLowerCase().includes(s) ||
        u.role.toLowerCase().includes(s) ||
        u.skills.some((x) => x.toLowerCase().includes(s))
    );
  }, [q, users]);

  return (
    <>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search: name / role / skill"
        className="mt-6 w-full rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-cyan-500/70"
      />

      <div className="mt-4 text-sm text-zinc-400">
        {filtered.length} / {users.length} users
      </div>

      <ul className="mt-6 space-y-3">
        {filtered.map((u) => (
          <li key={u.id}>
            <Link
              href={`/users/${u.id}`}
              className="block rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-cyan-600/50 hover:bg-zinc-900"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">{u.name}</div>
                  <div className="text-sm text-zinc-400">{u.role}</div>
                </div>
                <span className="text-sm text-cyan-300">Detail →</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {u.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-cyan-700/40 bg-cyan-950/30 px-3 py-1 text-xs text-cyan-100"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
