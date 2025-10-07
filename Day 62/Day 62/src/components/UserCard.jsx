import React from 'react'
import { GrMapLocation } from "react-icons/gr";

const UserCard = ({ user }) => {
  return (
    <div className='p-3 rounded bg-white/50 shadow'>
        <div>{user.name}</div>
        <div>{user.email}</div>
        <div className='mt-3 text-[9px] border border-purple-600 bg-purple-500/40 max-w-max p-1 rounded-full'>
            <GrMapLocation className='inline -mt-1 mr-1' /> {user.address?.city}
        </div>
    </div>
  )
}

export default UserCard