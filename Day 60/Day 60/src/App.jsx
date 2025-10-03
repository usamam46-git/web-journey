import React from 'react'
import { useState } from 'react'

const App = () => {
  const [password, setPassword] = useState('')
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)

  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(numbersAllowed){
    str+='0123456789'
  }
  if(charactersAllowed){
    str+='!@#$%^&*()'
  }

  const generatePassword = (len) => {
    let password = ''
    for(let i=0; i<len; i++){
      let index = Math.floor(Math.random()*str.length)
      password += str.charAt(index)
    }
    setPassword(password)
  }

  React.useEffect(() => {
    generatePassword(10)
  }, [numbersAllowed, charactersAllowed])




  return (
    <>
      <div>
        <h1>Random Password Generator</h1>
        <input type="text" value={password} readOnly />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={numbersAllowed}
            onChange={(e) => setNumbersAllowed(e.target.checked)}
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={charactersAllowed}
            onChange={(e) => setCharactersAllowed(e.target.checked)}
          />
          Include Special Characters
        </label>
      </div>
    </>
  )
}

export default App
