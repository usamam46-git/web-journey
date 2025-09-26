import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/profile'

const App = () => {
  return (
    <UserContextProvider>
       <h1>Practicing API Context</h1>
       <Login />
       <Profile />

    </UserContextProvider>
  )
}

export default App

