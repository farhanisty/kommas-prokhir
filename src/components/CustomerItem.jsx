import { Link } from "react-router-dom";
export default function CustomerItem({ customer }) {
  return (
    <li className="bg-white rounded-lg shadow-md p-3">
      <div className="border-b">
        <h1 className="font-semibold">{customer.name}</h1>
        <h2 className="text-slate-400 font-[300]">{customer.location}</h2>
        <p className="text-xs text-slate-400 my-3">
          Jumlah pesanan(dalam progress): {customer.totalOrder}
        </p>
      </div>
      <div className="py-3">
        <div className="text-slate-400 flex justify-around w-full text-sm">
          <a>Edit Pesanan</a>
          <a>Edit Status</a>
        </div>
        <Link
          to="/add-order"
          className="w-full bg-primary inline-block text-center bg-opacity-10 text-primary rounded-full mt-3 py-2"
        >
          Tambah Pesanan
        </Link>
      </div>
    </li>
  );
}
