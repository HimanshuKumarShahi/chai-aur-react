import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

function Register() {

  const navigate = useNavigate();

  const [data,setData]=useState({
    username:"",
    email:"",
    password:""
  });

  const handleSubmit=async(e)=>{

    e.preventDefault();

    await API.post("/auth/register",data);

    navigate("/login");

  };

  return(

    <div className="flex items-center justify-center h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Register
        </h2>

        <input
          className="border p-2 w-full mb-4"
          placeholder="Username"
          onChange={(e)=>setData({...data,username:e.target.value})}
        />

        <input
          className="border p-2 w-full mb-4"
          placeholder="Email"
          type="email"
          onChange={(e)=>setData({...data,email:e.target.value})}
        />

        <input
          className="border p-2 w-full mb-4"
          placeholder="Password"
          type="password"
          onChange={(e)=>setData({...data,password:e.target.value})}
        />

        <button
          className="bg-blue-500 text-white w-full p-2 rounded"
        >
          Register
        </button>

      </form>

    </div>

  );

}

export default Register;