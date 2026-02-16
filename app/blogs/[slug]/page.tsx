import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const dir = path.join(process.cwd(), "content/blogs");
  const files = fs.readdirSync(dir);

  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) notFound();

  const file = path.join(process.cwd(), "content/blogs", `${slug}.md`);

  if (!fs.existsSync(file)) notFound();

  const content = fs.readFileSync(file, "utf8");

  return (
    <article style={{ whiteSpace: "pre-wrap" }}>
      {content}
    </article>
  );
}
