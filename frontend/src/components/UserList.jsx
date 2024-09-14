import React from 'react'
import user from '../assets/images/user.jpg'

const UserList = () => {
  return (
    
      <div className="flex items-center justify-between space-x-2 bg-gray-200 w-full  rounded-full">
           <div className='flex items-center gap-2 pl-[1px] '>
           <img
              src={user}
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-gray-800 font-semibold">John Doe</p>
              <p className="text-gray-500 text-sm">Student</p>
            </div>
           </div>
            <div className='pr-2'>
                <span className='text-sm text-gray-600'>2s ago</span>
            </div>
          </div>
  
  )
}

export default UserList
