import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        backdropFilter: "blur(12px)",
        background: "rgba(15, 23, 42, 0.7)",
        borderBottom: "1px solid #1f2933",
        padding: "16px 24px",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          fontWeight: 500,
        }}
      >
        <strong>Samraj Portfolio</strong>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/achievements">Achievements</Link>
          <Link href="/blogs">Blogs</Link>
        </div>
      </div>
    </nav>
  );
}
