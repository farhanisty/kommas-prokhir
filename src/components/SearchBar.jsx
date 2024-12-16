import { FaSearch } from "react-icons/fa";
import { useRef } from "react";

export default function SearchBar() {
  const searchFormRef = useRef(null);
  const inputSearchRef = useRef(null);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(inputSearchRef.current.value);
  };

  return (
    <div className="w-full px-5 flex justify-center py-3">
      <form ref={searchFormRef} onSubmit={handleSearchSubmit}>
        <div className="relative">
          <input
            ref={inputSearchRef}
            className="pl-3 py-2 bg-secondary border rounded-lg"
            placeholder="Cari nama pelanggan"
            type="text"
          />
          <button className="text-slate-400 absolute right-[15px] -translate-y-1/2 top-1/2">
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
}
