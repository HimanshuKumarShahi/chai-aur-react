import React from 'react'
import { useState } from 'react'

export default function counter() {

  let [count , setcount] = useState(0)


  const add=()=>{
    if(count < 10){
      setcount(count +1)
    }else{
      alert("Not More Than 10")
    }
  }

  const sub=()=>{
    if(count > 0){
      setcount(count -1)
    }else{
      alert("Negative Number not exist.")
    }
  }

  

  return (
    <>
   <div className="inline-flex items-center gap-2 bg-white/10 px-2 py-0.5 rounded-full text-xs">
      <button 
        type="button" 
        onClick={sub} 
        className="px-1.5 py-0.5 hover:bg-white/20 rounded font-bold"
      >
        - Sub
      </button>
      <span className="font-mono text-indigo-300">{count}</span>
      <button 
        type="button" 
        onClick={add} 
        className="px-1.5 py-0.5 hover:bg-white/20 rounded font-bold"
      >
        + Add
      </button>
    </div>
    </>
  )
}
