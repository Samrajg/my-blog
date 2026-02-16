export default function LayoutWrapper({ children }: any) {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "60px 24px",
      }}
    >
      {children}
    </main>
  );
}
