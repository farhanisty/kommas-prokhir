import InputForm from "./../components/InputForm.jsx";
export default function AddCustomer() {
  return (
    <main className="px-7 py-5">
      <h1 className="font-semibold">Masukkan Data Pelanggan</h1>
      <form>
        <InputForm
          placeholder="Masukkan nama"
          type="text"
          label="Nama Pelanggan"
        />
        <InputForm
          placeholder="Masukkan Nomor Whatsapp"
          type="text"
          label="Nomor Whatsapp "
        />
      <InputForm
          placeholder="Masukkan Alamat"
          type="text"
          label="Alamat"
        />
      </form>

    </main>
  );
}
