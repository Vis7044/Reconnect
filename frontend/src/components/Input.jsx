import React from 'react'

const Input = ({type,placeholder}) => {
  return (
    <input type={type} className='border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500' placeholder={placeholder}/>
  )
}

export default Input
