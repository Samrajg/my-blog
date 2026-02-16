import Link from "next/link";

export default function BlogCard({ title, slug }: any) {
  return (
    <div style={{ marginBottom: 10 }}>
      <Link href={`/blogs/${slug}`}>{title}</Link>
    </div>
  );
}
