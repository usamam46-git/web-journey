import React,{useContext} from 'react'
import userContext from '../context/userContext'

const Profile = () => {
     const {User}= useContext(userContext);
  if(!User) return <div>Please Login!</div>
  return <div>Welcome: {User.username}</div>
}

export default Profile
