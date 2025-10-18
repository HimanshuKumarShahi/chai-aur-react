import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setcount]= useState(15)

 
const addnumber=()=>{
  setcount(counter+1);
};

const removenumber=()=>{
  setcount(counter-1)
}

  return (
    <>
      <h1>Chai Aur React </h1>
      <h2>Counter : {counter}  </h2>
      <button
      onClick={addnumber}
      >Add value:{counter}</button>
      <br />
      <button
      onClick={removenumber}
      >Remove value :{counter}</button>

      <footer>{counter}</footer>
    </>
  )
}

export default App
