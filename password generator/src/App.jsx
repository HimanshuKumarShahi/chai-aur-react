import  { useState,useCallback } from 'react'
import React from 'react'
import './App.css'


function App() {
  const [length, setlength] = useState(8)
  const [addnumber, setaddnumber] = useState(false)
  const [addchar, setaddchar] = useState(false)
  const [Password,setpassword]=useState("")

  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqretuvwxyz"
    if(addnumber) str+="0123456789"
    if(addchar) str+="!@#$%&*[]{},.?"

    for (let i = 1; i <= array.length; i++) {
      let char=MediaSourceHandle.floor(Math.random()*str.length+1)
      pass=str.charAt(char)
    }
    setpassword(pass)

  },[length,addchar,addnumber,setpassword])

  return (
    <>
     <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-2xl text-orange-400 bg-gray-500">
      <div className='classname="flex shadow rounded-lg overflow-hidden mb-4'>
    <input type="text"
    value={setpassword}
    className='outline-none w-full py-1 px-3'
    placeholder="Password"
    readOnly
    />
    <button className='outline-none bg-blue-900 text-black px-4 py-0.5 shrink rounded-2xl'>Copy</button>
      </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" 
        min={8}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}}
        />
        <label >Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={addnumber}
        id='number input'
        onChange={()=>{
          setaddnumberAllowed((prev)=>!prev);
        }}
        />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={addnumber}
        id='number input'
        onChange={()=>{
          setaddnumberAllowed((prev)=>!prev);
        }}
        />
      <label htmlFor="numberInput">Numbers</label>
      </div>
    </div>

    </div>
    </>
  )
}

export default App
