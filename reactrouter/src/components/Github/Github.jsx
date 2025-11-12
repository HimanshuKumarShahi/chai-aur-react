import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/himanshukumarshahi')
        .then(Response=>Response.json())
        .then(data=>{
            console.log(data);
            setdata(data)
        })
    },[])

  return (
    <div className='text-center m-6 bg-orange-500 text-white p-4 text-3xl' >Github Followers: {data.followers}
    <img className='flex justify-center items-center rounded-3xl ' src={data.avatar_url} alt="Git Image" width={400} /> </div>
    
  )
}

export default Github