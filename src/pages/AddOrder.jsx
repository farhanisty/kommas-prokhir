import InputForm from "./../components/InputForm.jsx";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import PrimaryButton from "./../components/PrimaryButton.jsx";

export default function AddOrder() {
  return (
    <>
      <header className="px-5 pt-5">
        <Link to="/order">
          <IoMdArrowBack className="text-2xl" />
        </Link>
      </header>
      <main className="px-7 py-5">
        <h1 className="font-semibold mb-5">Masukkan Data Pemesanan</h1>
        <form>
          <div className="flex flex-col gap-5">
            <InputForm
             placeholder="Masukkan nama"
             type="text"
             label="Nama Pelanggan"
            />
            <InputForm
             placeholder="Masukkan jenis pesanan"
             type="text"
             label="Jenis Pesanan"
            />
            <InputForm
             placeholder="Masukkan Tenggat Waktu"
             type="date"
             label="Tenggat Waktu"
            />
            <InputForm
             placeholder="Masukkan catatan"
             type="text"
             label="Catatan Pesanan"
            />
          </div>
          <PrimaryButton className="mt-3">Tambah Pesanan</PrimaryButton>
        </form>
      </main>
    </>
  );
}
