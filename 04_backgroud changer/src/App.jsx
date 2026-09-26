import React,{useState} from 'react';

function App() {
  const [color,setcolor]=useState("black")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}} >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-3 justify-center shadow-lg bg-white py-2 px-3 rounded-3xl'>

          <button className='outline-none px-4 py-1 rounded-2xl text-black shadow-lg  border' style={{backgroundColor:"red"}}
          onClick={()=>setcolor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-2xl text-black shadow-lg border' style={{backgroundColor:"white"}}
          onClick={()=>setcolor("white")}>white</button>
          <button className='outline-none px-4 py-1 rounded-2xl text-black shadow-lg  border' style={{backgroundColor:"green"}}
          onClick={()=>setcolor("green")}>green</button>
          <button className='outline-none px-4 py-1 rounded-2xl text-black shadow-lg  border' style={{backgroundColor:"orange"}}
          onClick={()=>setcolor("orange")}>orange</button>
          <button className='outline-none px-4 py-1 rounded-2xl text-black shadow-lg  border' style={{backgroundColor:"blue"}}
          onClick={()=>setcolor("blue")}>blue</button>
          <button className='outline-none px-4 py-1 rounded-2xl text-black shadow-lg  border' style={{backgroundColor:"lime"}}
          onClick={()=>setcolor("lime")}>lime</button>
          <button className='outline-none px-4 py-1 rounded-2xl text-black shadow-lg  border' style={{backgroundColor:"cyan"}}
          onClick={()=>setcolor("cyan")}>cyan</button>
          <button className='outline-none px-4 py-1 rounded-2xl text-black shadow-lg  border' style={{backgroundColor:"brown"}}
          onClick={()=>setcolor("brown")}>brown</button>
          <button className='outline-none px-4 py-1 rounded-2xl text-white shadow-lg  border' style={{backgroundColor:"black"}}
          onClick={()=>setcolor("black")}>black</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
