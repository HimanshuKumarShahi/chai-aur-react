import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer/footer.jsx'; 
import Navbar from './components/Navbar/Navbar.jsx'
import About from './components/About/About.jsx';
import Projects from './components/Projects/Project.jsx';



function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  );
}

export default App
