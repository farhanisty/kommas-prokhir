import FootBar from "./../components/FootBar.jsx";
import MainLayout from "./../layouts/MainLayout.jsx";
import { Link } from "react-router-dom";
export default function Locker() {
  return (
    <>
      <MainLayout>
        <div className="px-7">
          <h1>Daftar Loker</h1>

          <ul className="flex flex-wrap justify-between gap-3">
            <li className="shadow-lg flex justify-center items-center text-[2rem] bg-green-400 inline-block w-[30%] aspect-square">
              A1
            </li>
            <li className="flex justify-center items-center text-[2rem] bg-green-400 inline-block w-[30%] aspect-square ">
              A2
            </li>
            <li className="flex justify-center items-center text-[2rem] bg-green-400 inline-block w-[30%] aspect-square">
              A3
            </li>
            <li className="flex justify-center items-center text-[2rem] bg-red-400 inline-block w-[30%] aspect-square">
              B1
            </li>
            <li className="flex justify-center items-center text-[2rem] bg-red-400 inline-block w-[30%] aspect-square">
              B2
            </li>
            <li className="flex justify-center items-center text-[2rem] bg-green-400 inline-block w-[30%] aspect-square">
              B3
            </li>
            <li className="flex justify-center items-center text-[2rem] bg-green-400 inline-block w-[30%] aspect-square">
              C1
            </li>
            <li className="flex justify-center items-center text-[2rem] bg-green-400 inline-block w-[30%] aspect-square">
              C2
            </li>
            <li className="flex justify-center items-center text-[2rem] bg-red-400 inline-block w-[30%] aspect-square">
              C3
            </li>
          </ul>

          <div className="py-5">
            <h1>Daftar Pesanan On Progress</h1>
            <ul>
              <Link to="/locker/order/1">
                <li className="bg-white p-3">
                  <div>Nama: Farhannivta</div>
                  <div>Jenis: Baju</div>
                  <div>Tenggat Waktu: 22-12-2024</div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </MainLayout>
      <FootBar />
    </>
  );
}
