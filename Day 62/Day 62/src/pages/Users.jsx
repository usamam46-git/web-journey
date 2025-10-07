import React, { useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'
import UserCard from '../components/UserCard'
import Navbar from '../components/Navbar'
import { USERS_API } from '../resources/api.js'
import { NavLink } from 'react-router-dom'
import { LayoutGrid, List } from 'lucide-react'

const Users = () => {
  const [userList, setUserList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState('grid')

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(USERS_API)
        const users = await response.json()
        if (!users) {
          console.log('User data is not fetching')
        } else {
          setUserList(users)
        }
      } catch (error) {
        console.error('Error fetching users:', error)
      } finally {
        setIsLoading(false)
      }
    }

    getUsers()
  }, [])

  const toggleView = () => {
    setViewMode((prev) => (prev === 'grid' ? 'list' : 'grid'))
  }

  return (
    <>
      <Navbar />
      <div className='m-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-semibold'>Users</h1>
          <button
            onClick={toggleView}
            className='flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200'
          >
            {viewMode === 'grid' ? (
              <>
                <List className='w-5 h-5' />
                <span>List View</span>
              </>
            ) : (
              <>
                <LayoutGrid className='w-5 h-5' />
                <span>Grid View</span>
              </>
            )}
          </button>
        </div>

        {isLoading ? (
          <div className='flex justify-center mt-10'>
            <ScaleLoader />
          </div>
        ) : (
          <div
            className={`mt-6 ${
              viewMode === 'grid'
                ? 'grid grid-cols-12 gap-4'
                : 'flex flex-col gap-4'
            }`}
          >
            {userList.length > 0 ? (
              userList.map((user, i) => (
                <div
                  key={i}
                  className={`${
                    viewMode === 'grid' ? 'col-span-4' : 'w-full'
                  }`}
                >
                  <NavLink to={`/users/${user.id}`}>
                    <UserCard user={user} viewMode={viewMode} />
                  </NavLink>
                </div>
              ))
            ) : (
              <div>No records were found</div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Users
