import React from 'react'
import { useState,useEffect } from "react";

const Github = () => {
const [data, setdata] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/usamam46-git')
      .then(response => response.json())
      .then(data => {console.log(data);
        setdata(data);
      })
    }, [])
    
  return (
    <div>
      <h1 className='bg-gray-700 text-white text-center text-3xl p-4'>Github Followers: {data.followers} | {data.bio}
         <img src={data.avatar_url} alt="" width={300} /> </h1>
    </div>
  )
}

export default Github
