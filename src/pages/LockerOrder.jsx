import { useParams } from "react-router-dom";
import PrimaryButton from "./../components/PrimaryButton.jsx";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function LockerOrder() {
  const { id } = useParams();

  return (
    <>
      <header className="px-5 pt-5 bg-background">
        <Link to="/order">
          <IoMdArrowBack className="text-2xl" />
        </Link>
      </header>
      <div className="px-7 py-5 bg-background min-h-screen">
        <div className="bg-white p-3 rounded shadow">
          <ul className="font-semibold flex flex-col gap-3">
            <li>Nama: Rachman Zulfikar</li>
            <li>Jenis Pesanan: Rachman Zulfikar</li>
            <li>Tenggat Waktu: 2024-12-31</li>
            <li>Catatan Pesanan: tidak ada</li>
          </ul>
          <form className="mt-3">
            <label htmlFor="locker">Masukkan ke loker</label>
            <select name="locker" id="locker">
              <option value="">A1</option>
              <option value="">A2</option>
              <option value="">A3</option>
              <option value="">B3</option>
              <option value="">C1</option>
              <option value="">C2</option>
              <option value="">C3</option>
            </select>
            <PrimaryButton className="mt-3">Save</PrimaryButton>
          </form>
        </div>
      </div>
    </>
  );
}
