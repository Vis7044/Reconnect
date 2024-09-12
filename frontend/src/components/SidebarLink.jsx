import React from 'react'
import { Link } from 'react-router-dom'

const SidebarLink = ({splitPathName,link,name,path,icon}) => {
    console.log(splitPathName,path)
  return (
    <Link
          className={`${
            splitPathName === path && 'bg-blue-500 rounded ml-2 p-1'
          } hover:bg-blue-300 ml-2 p-1 rounded transition duration-200 flex items-center`}
          to={link}
        >
          <div className='text-xl text-white'>{icon}</div>
          <div  className='ml-1 text-lg'>{name}</div>
        </Link>
  )
}

export default SidebarLink
