import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      }
      )
      .catch((error) => {
        console.log(error)
      }
      )
  })

  return (
    <div>
      <h1>Practicing Full Stack</h1>
      <p>Jokes:{jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3> {joke.title} </h3>
          <p> {joke.content} </p>
        </div>
      )
      )}
    </div>
  )
}

export default App
