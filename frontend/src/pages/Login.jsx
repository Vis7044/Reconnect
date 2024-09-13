import React from 'react'
import {LoginFields} from '../utils'
import login from '../assets/images/login.jpg'
import Input from '../components/Input'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="h-screen flex items-start justify-center">
      <div className="mt-48 bg-[#F3F4F6] lg:w-[900px] md:w-[700px] sm:w-[90%] w-[70%] h-96 rounded-md sm:grid sm:grid-cols-2 block items-center">
        <div className="sm:block hidden h-96">
          <img src={login}  alt="Post Image" className="w-full h-full object-cover border" />
        </div>
        <div className=" flex flex-col items-center">
          <div className="text-center mt-5 mb-2 font-semibold text-xl">
            Login
          </div>
          <form className="flex gap-4 flex-col w-full">
            {LoginFields.map((field, index) => (
              <div key={index} className="flex flex-col items-center">
                <Input type={field.type} placeholder={field.placeholder} />
              </div>
            ))}
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 mx-auto">Login</button>
            <div className='max-w-fit mx-auto'>Don't Have an Account? <Link to={'/sign-up'} className='underline text-blue-600'>Signup</Link></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
