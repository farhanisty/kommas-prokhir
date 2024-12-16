export default function PrimaryButton({ children }) {
  return (
    <button className="text-primary bg-primary bg-opacity-10 rounded-full w-full py-3 flex items-center gap-3 justify-center">
      {children}
    </button>
  );
}
