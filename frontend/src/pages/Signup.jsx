import React from 'react';
import { RegisterFields } from '../utils';
import Input from '../components/Input';
import signup from '../assets/images/signup2.jpg'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="h-screen flex items-start justify-center">
      <div className="mt-48 bg-[#F3F4F6] lg:w-[900px] md:w-[700px] sm:w-[80%] w-[80%]  rounded-md sm:grid sm:grid-cols-2 block">
        <div className="sm:block hidden">
          <img src={signup}  alt="Post Image" className="w-full h-full object-cover border" />
        </div>
        <div className=" flex flex-col items-center">
          <div className="text-center mt-5 mb-2 font-semibold text-xl">
            Sign up
          </div>
          <form className="flex gap-4 flex-col w-full">
            {RegisterFields.map((field, index) => (
              <div key={index} className="flex flex-col items-center">
                <Input type={field.type} placeholder={field.placeholder} />
              </div>
            ))}
            <div className='flex flex-col items-center'>
              <select className='border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'>
                <option selected>Select Document</option>
                <option>Marksheet</option>
                <option>Migration Certificate</option>
                <option>College Id Card</option>
              </select>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 mx-auto">Signup</button>
            <div className='max-w-fit mx-auto'>Already Have an Account? <Link to={'/login'} className='underline text-blue-600'>Login</Link></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
