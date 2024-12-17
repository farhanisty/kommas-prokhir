export default function InfoBox({ label, total, children }) {
  return (
    <div className="bg-primary bg-opacity-90 text-white flex items-center justify-between px-5 py-3 rounded">
      <div>
        <h1 className="text-2xl font-semibold">{label}</h1>
        <span className="text-xl">{total}</span>
      </div>
      {children}
    </div>
  );
}
