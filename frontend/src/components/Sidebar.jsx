import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitPathName = pathname.split('/');
  return (
    <div className="h-screen bg-[#1B2430] w-52 text-white md:block hidden border-r-slate-950">
      <div className="pt-10 flex flex-col p-3 gap-2">
        <Link
          className={`${
            splitPathName[1] === '' ? 'bg-blue-500 rounded ml-2 p-1' : 'hover:bg-blue-300 ml-2 p-1 hover:rounded'
          }`}
          to={'/'}
        >
          <div  className='ml-1'>Home</div>
        </Link>
        <Link
          className={`${
            splitPathName[1] === 'donation' ? 'bg-blue-500 rounded ml-2 p-1' : 'hover:bg-blue-300 ml-2 p-1 hover:rounded'
          }`}
          to={'/donation'}
        >
          <div  className='ml-1'>Donation</div>
        </Link>
        <Link
          className={`${
            splitPathName[1] === 'network-hub' ? 'bg-blue-500 rounded ml-2 p-1' : 'hover:bg-blue-300 ml-2 p-1 hover:rounded'
          }`}
          to={'/network-hub'}
        >
          <div  className='ml-1'>Network Hub</div>
        </Link>
        <Link
          className={`${
            splitPathName[1] === 'job-portal' ? 'bg-blue-500 rounded ml-2 p-1' : 'hover:bg-blue-300 ml-2 p-1 hover:rounded'
          }`}
          to={'/job-portal'}
        >
          <div  className='ml-1'>Job Portal</div>
        </Link>
        <Link
          className={`${
            splitPathName[1] === 'events-reunions' ? 'bg-blue-500 rounded ml-2 p-1' : 'hover:bg-blue-300 ml-2 p-1 hover:rounded'
          }`}
          to={'/events-reunions'}
        >
          <div  className='ml-1'>Events & Reunions</div>
        </Link>
      </div>    
    </div>
  );
};

export default Sidebar;
