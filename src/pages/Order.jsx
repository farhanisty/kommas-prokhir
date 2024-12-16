import FootBar from "./../components/FootBar.jsx";
import HeaderTitle from "./../components/HeaderTitle.jsx";
import SearchBar from "./../components/SearchBar.jsx";
import MainLayout from "./../layouts/MainLayout.jsx";
import CustomerItem from "./../components/CustomerItem.jsx";
import { CiCirclePlus } from "react-icons/ci";
import { useState, useEffect } from "react";

export default function Order() {
  const [customers, setCustomer] = useState([]);

  useEffect(() => {
    setCustomer([
      {
        id: 1,
        name: "Ricardo",
        location: "Kulon Progo",
        totalOrder: 10,
      },
      {
        id: 2,
        name: "Rafi Pradipa",
        location: "Bekasi",
        totalOrder: 2,
      },
      {
        id: 2,
        name: "Rafi Pradipa",
        location: "Bekasi",
        totalOrder: 2,
      },
      {
        id: 2,
        name: "Rafi Pradipa",
        location: "Bekasi",
        totalOrder: 2,
      },
      {
        id: 2,
        name: "Rafi Pradipa",
        location: "Bekasi",
        totalOrder: 2,
      },
      {
        id: 2,
        name: "Rafi Pradipa",
        location: "Bekasi",
        totalOrder: 2,
      },
    ]);
  }, []);

  return (
    <>
      <MainLayout>
        <HeaderTitle>Daftar Pelanggan</HeaderTitle>
        <SearchBar></SearchBar>
        {customers.length === 0 ? (
          <OrderEmptyPage />
        ) : (
          <OrderPage customers={customers} />
        )}
        <button className="text-primary fixed bottom-[70px] bg-primary bg-opacity-10 rounded-full w-[80%] py-3 flex items-center gap-3 justify-center left-1/2 -translate-x-1/2">
          <CiCirclePlus /> Tambah Pelanggan
        </button>
      </MainLayout>
      <FootBar />
    </>
  );
}

function OrderEmptyPage() {
  return (
    <div
      style={{
        height: "calc(100% - 60px)",
      }}
      className="flex flex-col justify-center items-center"
    >
      <h1 className="font-semibold text-xl">Daftar Pelanggan Kosong</h1>
      <p>Tidak ada data pelanggan</p>
    </div>
  );
}

function OrderPage({ customers }) {
  return (
    <div
      className="overflow-y-scroll"
      style={{
        height: "calc(100% - 195px)",
      }}
    >
      <ul className="px-5 flex gap-3 flex-col">
        {customers.map((customer, key) => {
          return <CustomerItem key={key} customer={customer} />;
        })}
      </ul>
    </div>
  );
}
