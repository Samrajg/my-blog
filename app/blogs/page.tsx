import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Blogs() {
  const dir = path.join(process.cwd(), "content/blogs");
  const files = fs.readdirSync(dir);

  return (
    <>
      <h1>Blogs</h1>
      {files.map((file) => {
        const slug = file.replace(".md", "");
        return (
          <div key={slug}>
            <Link href={`/blogs/${slug}`}>{slug}</Link>
          </div>
        );
      })}
    </>
  );
}
