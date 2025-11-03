import React, { useState } from 'react'

const App = () => {
  const [inputVal, setInputVal] = useState('');
  const [listAll, setListAll] = useState([]);
  const addToDo = () => {
    let newArr = [...listAll, inputVal]
    setListAll(newArr)
    console.log(listAll)
  }

  const removeToDo = (key) => {
    let oldArr = [...listAll]
    oldArr.splice(key, 1 )
    setListAll(oldArr)
  }
  
  
  return (
    <div>
      <input type="text" placeholder='Enter Items' onChange={(e)=>setInputVal(e.target.value)} value={inputVal} />
      <button onClick={addToDo}>Add Todo</button>
     {
      listAll.map((item, i)=>(
          <div key={i}> {item} <button onClick={()=> removeToDo(i)}>Delete</button> </div>

      ))
     }
    </div>
  )
}

export default App
