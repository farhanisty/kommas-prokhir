export default function MainLayout({ children }) {
  return (
    <main
      className="bg-background"
      style={{
        height: "calc(100vh - 60px)",
      }}
    >
      {children}
    </main>
  );
}