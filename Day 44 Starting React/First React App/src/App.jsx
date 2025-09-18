import React from 'react'

const MyButton = ({ title }) => {
  return (
    <button>{title}</button>
  )
}

const App = () => {
  const access = "admin"
  return (
    <div>App1 <br />
      {
        access == "admin" ?
          <>
            <MyButton title="Create" />
            <MyButton title="Update" />
            <MyButton title="Delete" />
          </> :
          <>
        <MyButton title="Create"/>
          </>
      }
    </div>
  )
}

export default App
