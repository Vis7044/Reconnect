import React from 'react'
import { Link } from 'react-router-dom'

const BottomNavLink = ({splitPathName,name,link,path,icon}) => {
  return (
    <Link
          className={` ml-2 p-1 rounded transition duration-200 flex items-center`}
          to={link}
        >
          <div className='flex flex-col items-center gap-1'>
          <div className={`${
            splitPathName === path && 'text-blue-300'
          } text-xl text-white`}>{icon}</div>
          <div className={`${
            splitPathName === path && 'text-blue-300'
          } text-xs text-white`}>{name}</div>
          </div>
        </Link>
  )
}

export default BottomNavLink