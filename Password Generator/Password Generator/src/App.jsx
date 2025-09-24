import React from 'react'
import { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setlength] = useState(8);
  const [numbersAllowed, setnumbersAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState('')

  const passRef = useRef(null);
  
  const copyPassToClip = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password]
  )
  const passwordGen = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZhhahsjjhdhdjjska";
    if (numbersAllowed) str += "12436457898"
    if (charAllowed) str += "#$%^&*@#!^&"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  },
    [length, numbersAllowed, charAllowed, setpassword],
  )

  useEffect(() => {
    passwordGen();
  }, [length, numbersAllowed, charAllowed, passwordGen])


  return (
    <div>
      <label htmlFor="input">Create random password</label>
      <input type="text" value={password} readOnly ref={passRef} />
      <label htmlFor="checkbox">Number Allowed</label>
      <input type="checkbox" defaultChecked={numbersAllowed} name="number" id="number" onChange={() => {
        setnumbersAllowed((prev) => !prev)
      }

      } /><br />
      <label htmlFor="characters">Characters allowed</label>
      <input type="checkbox" name='characters' defaultChecked={charAllowed} id='characters' onChange={() => {
        setcharAllowed((prev) => !prev)
      }

      } />
      <input type="range" onChange={(e) => {
        setlength(e.target.value)

      }
      } name="" min={8} max={20} id="" />
      <span> Length:{length} </span>

      <button onClick={copyPassToClip}>Copy</button>
    </div>
  )
}

export default App

