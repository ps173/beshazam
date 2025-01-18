export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
}
