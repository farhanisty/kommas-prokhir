import InputForm from "./../components/InputForm.jsx";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import PrimaryButton from "./../components/PrimaryButton.jsx";

export default function AddCustomer() {
  return (
    <>
      <header className="px-5 pt-5">
        <Link to="/order">
          <IoMdArrowBack className="text-2xl" />
        </Link>
      </header>
      <main className="px-7 py-5">
        <h1 className="font-semibold mb-5">Masukkan Data Pelanggan</h1>
        <form>
          <InputForm
            placeholder="Masukkan nama"
            type="text"
            label="Nama Pelanggan"
          />
          <PrimaryButton className="mt-3">Tambah Pelanggan</PrimaryButton>
        </form>
      </main>
    </>
  );
}
