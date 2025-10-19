import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setcount]= useState(10)

 
const addnumber=()=>{
  if(counter<20){
    setcount(counter+1);
  }
  else{
    alert("Max value : 20")
  }
};

const removenumber=()=>{
  if(counter>0){
    setcount(counter-1)
  }
  else{
    alert("Min value : 0")
  }
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
