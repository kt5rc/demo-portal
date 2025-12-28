import Link from "next/link";
import { Metadata } from "next";
import { users } from "../lib/users";
import UsersList from "./UsersList";

export const metadata: Metadata = {
  title: "Users",
};

export default function UsersPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="flex items-end justify-between gap-4">
          <h1 className="text-2xl font-bold">Users</h1>
          <Link className="text-sm text-zinc-300 hover:text-white" href="/">
            ← Home
          </Link>
        </div>

        <UsersList users={users} />
      </div>
    </main>
  );
}
