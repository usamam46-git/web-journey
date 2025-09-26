import { useState,useContext } from "react";
import userContext from "../context/userContext";
import React from 'react'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser}= useContext(userContext);

    const handleSubmit= (e) => {
      e.preventDefault()
      setUser({username,password})
    }
    
  return (
    <div>
      <h2>User Data</h2>
      <input type="text" value={username} onChange={(e) => {
        setUsername(e.target.value)
      }
      } placeholder="Username" />
      <input type="text" placeholder="Password" value={password} onChange={(e) => {
        setPassword(e.target.value)
      }
      } />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
