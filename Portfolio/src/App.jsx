import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/footer'; 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/t" element={<Footer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
