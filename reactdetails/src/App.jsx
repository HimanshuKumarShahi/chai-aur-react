import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Products from "./functionality/product.jsx";
import RandomUsersfromAPI from "./functionality/Randomusers.jsx";
import About from "./functionality/about.jsx";

export default function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<RandomUsersfromAPI />} /> 
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}