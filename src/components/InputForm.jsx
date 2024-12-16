export default function InputForm({ placeholder, type, label }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor="">{label}</label>
      <input
        className="py-3 px-2 bg-secondary rounded"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
