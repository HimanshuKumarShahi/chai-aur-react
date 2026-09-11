import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Products from "./functionality/product.jsx";
import RandomUsersfromAPI from "./functionality/Randomusers.jsx";
import About from "./functionality/about.jsx";
import Journal from "./functionality/journal.jsx";
import ReactPlayground from "./functionality/ReactPlayground.jsx";

export default function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<RandomUsersfromAPI />} /> 
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/playground" element={<ReactPlayground />} />
      </Routes>
    </BrowserRouter>
  );
}