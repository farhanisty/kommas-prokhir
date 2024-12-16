export default function HeaderTitle({ children }) {
  return (
    <header className="bg-primary bg-opacity-10 py-2">
      <h1 className="text-primary text-center">{children}</h1>
    </header>
  );
}
