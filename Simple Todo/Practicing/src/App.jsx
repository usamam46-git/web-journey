import React from 'react'
import { useState } from 'react'

const App = () => {
  const [inputValue, setinputValue] = useState("");
  const [listItems, setlistItems] = useState([]);
  const addNewItem = () => {
    console.log(inputValue)
    const newArr = [...listItems, inputValue];
    setlistItems(newArr)
    setinputValue("")
  }
 const removeItem = (key) => {
    const oldArr = [...listItems];
    oldArr.splice(key, 1);

    setlistItems(oldArr);
  }

  return (
    <div className='flex items-center justify-center m-3'>
      <div className='bg-white p-5 rounded-2xl'>
        <div>
          <input className='border border-gray-400 p-4 rounded-2xl' type="text" placeholder='Enter items' value={inputValue} onChange={(e) => setinputValue(e.target.value)} />
          <button onClick={addNewItem} className='p-4 border border-blue-300 rounded-2xl m-2 hover:bg-green-300'>Add Items</button>
        </div>
        <hr className='my-4' />
        {listItems.length > 0 ?
          <div>
            <ul>
              {listItems.map((item, i) => {
                return < li key={i} className='mb-1' >
                  <div className='flex justify-between items-center'>
                    <span>{item}</span>
                    <button onClick={() => removeItem(i)} className='bg-blue-200 cursor-pointer rounded-2xl p-2 text-amber-50'>Delete</button>
                  </div>
                </li >
              }
              )}
            </ul>
          </div> : "No record found."
        }
      </div>

    </div>
  )
}

export default App





