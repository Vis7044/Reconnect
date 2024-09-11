import React from 'react'
import { Link } from 'react-router-dom'

const SidebarLink = ({splitPathName,link,name,path}) => {
    console.log(splitPathName,path)
  return (
    <Link
          className={`${
            splitPathName === path ? 'bg-blue-500 rounded ml-2 p-1' : 'hover:bg-blue-300 ml-2 p-1 rounded transition duration-200'
          }`}
          to={link}
        >
          <div  className='ml-1'>{name}</div>
        </Link>
  )
}

export default SidebarLink
