import React, { useEffect, useState } from 'react'
import {ScaleLoader} from 'react-spinners'
import UserCard from '../components/UserCard';
import Navbar from '../components/Navbar';
import { USERS_API } from '../resources/api.js';
import { useParams } from 'react-router-dom';
const UserDetails = () => {
  const params = useParams();
    const [singleUser, setSingleUser] = useState({});
    const [isloading, setIsLoading] = useState(true)

    useEffect(()=>{
        const getUsers = async () => {
            const response = await fetch(USERS_API + params.id);
            const users = await response.json();
            if (!users) {
                console.log("User data is not fetching")
            } else {
                setSingleUser(users);
                setIsLoading(false)
                console.log(singleUser)
            }
        }

        getUsers()
    })

    return (
        <>
        <Navbar />
        <div className='m-4'>
            <div className='text-3xl'>User Detail</div>
            {isloading ? 
            <ScaleLoader /> :
            <div className='mt-4'>
                {singleUser != null ?
                    <UserCard user={singleUser}/> : 
                    "No records were found"
                }
            </div>
            }
        </div>
        </>
    )
}

export default UserDetails