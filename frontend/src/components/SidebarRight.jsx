import React from 'react'
import UserList from './UserList'

const SidebarRight = () => {
  return (
    <div className='m-8 bg-white rounded-2xl h-[calc(100vh-500px)] w-[360px]'>
      <div className='m-3 text-3xl font-semibold text-gray-500'>Recent Connections</div>
      <div className='flex flex-col items-start gap-3 px-6'>
        <UserList/>
        <UserList/>
        <UserList/>
        <UserList/>
        <UserList/>
      </div>
    </div>
  )
}

export default SidebarRight
