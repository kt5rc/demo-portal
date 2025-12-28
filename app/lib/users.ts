export type User = {
  id: string;
  name: string;
  role: string;
  skills: string[];
};

export const users: User[] = [
  {
    id: "1",
    name: "Aki",
    role: "Frontend",

    skills: ["Next.js", "React", "Tailwind"],
  },
  {
    id: "2",
    name: "Mina",
    role: "Backend",
    skills: ["Hono", "Node.js", "Zod"],
  },
  {
    id: "3",
    name: "Kenta",
    role: "Fullstack",
    skills: ["Next.js", "API", "Vercel"],
  },
];

export function getUser(id: string): User | undefined {
  return users.find((u) => u.id === id);
}
