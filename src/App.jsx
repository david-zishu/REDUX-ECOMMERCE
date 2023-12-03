import { Header } from "./components/Header";
import { Home } from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CartDetails } from "./components/CartDetails";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;