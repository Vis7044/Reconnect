import React from 'react'
import { Link } from 'react-router-dom'

const BottomNavLink = ({splitPathName,name,link,path,icon}) => {
  return (
    <Link
          className={`${
            splitPathName === path && 'bg-blue-500 rounded ml-2 p-1'
          } hover:bg-blue-300 ml-2 p-1 rounded transition duration-200 flex items-center`}
          to={link}
        >
          <div className='flex flex-col items-center gap-1'>
          <div className='text-xl text-white'>{icon}</div>
          <div className='text-xs text-white'>{name}</div>
          </div>
        </Link>
  )
}

export default BottomNavLink