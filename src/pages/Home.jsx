import FootBar from "./../components/FootBar.jsx";
import MainLayout from "./../layouts/MainLayout.jsx";
import InfoBox from "./../components/InfoBox.jsx";
import PrimaryButton from "./../components/PrimaryButton.jsx";
import { FaClipboardList } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="px-7 py-5 flex flex-col gap-3">
          <InfoBox total="20" label="Total Pesanan">
            <FaClipboardList className="text-[54px]" />
          </InfoBox>
          <InfoBox total="7" label="Total Pelanggan">
            <IoPerson className="text-[54px]" />
          </InfoBox>
          <InfoBox total="14" label="Pesanan Pending">
            <IoTimeSharp className="text-[54px]" />
          </InfoBox>
        </div>
        <div className="px-7 pt-5">
          <h1 className="font-semibold text-xl">Pesanan</h1>
        </div>
        <div className="px-7 pt-5">
          <div className="bg-white p-3 rounded shadow">
            <ul className="font-semibold flex flex-col gap-3">
              <li>Nama: Rachman Zulfikar</li>
              <li>Jenis Pesanan: Rachman Zulfikar</li>
              <li>Tenggat Waktu: 2024-12-31</li>
              <li>Catatan Pesanan: tidak ada</li>
              <li>Pesanan Selesai dalam : 5 Hari lagi</li>
            </ul>
          </div>
        </div>
      </MainLayout>
      <FootBar></FootBar>
    </>
  );
}
