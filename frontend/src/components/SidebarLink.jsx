import React from 'react'
import { Link } from 'react-router-dom'

const SidebarLink = ({splitPathName,link,name,path,icon}) => {
  return (
    <Link
          className={`${
            splitPathName === path && 'bg-blue-500 rounded ml-2 p-1'
          } hover:bg-blue-300 ml-2 p-1 rounded transition duration-200 flex items-center gap-1`}
          to={link}
        >
          <div className='text-xl text-white pb-1'>{icon}</div>
          <div  className='ml-1 text-lg'>{name}</div>
        </Link>
  )
}

export default SidebarLink
