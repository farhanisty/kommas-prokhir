import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Order from "./pages/Order.jsx";
import Locker from "./pages/Locker.jsx";
import Inventory from "./pages/Inventory.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/locker" element={<Locker />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
