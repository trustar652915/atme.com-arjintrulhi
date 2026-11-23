import fs from "fs";
import path from "path";

export interface Post {
  title: string;
  body: string;
  date: string;
}

export function getPosts(): Post[] {
  const dir = path.join(process.cwd(), "content");
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".txt"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8").trim();
      const [title = "", ...rest] = raw.split("\n");
      const stamp = Number(path.basename(f, ".txt"));
      const date =
        Number.isFinite(stamp) && stamp > 0
          ? new Date(stamp * 1000).toISOString()
          : new Date().toISOString();

      return {
        title: title.trim(),
        body: rest.join("\n").trim(),
        date,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
