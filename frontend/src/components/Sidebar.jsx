import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SidebarLink from './SidebarLink';
import { MdHomeFilled } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';
import { MdEvent } from 'react-icons/md';
import { FaFileAlt } from 'react-icons/fa';
import { CgProfile,CgLogOut } from "react-icons/cg";

const sidebarLinks = [
  { name: 'Home', link: '/', path: '', icon: <MdHomeFilled /> },
  {
    name: 'Donation',
    link: '/donation',
    path: 'donation',
    icon: <GiReceiveMoney />,
  },
  {
    name: 'Network Hub',
    link: '/network-hub',
    path: 'network-hub',
    icon: <IoChatbubbleEllipsesSharp />,
  },
  {
    name: 'Job Portal',
    link: '/job-portal',
    path: 'job-portal',
    icon: <FaFileAlt />,
  },
  {
    name: 'Events & Reunions',
    link: '/events-reunions',
    path: 'events-reunions',
    icon: <MdEvent />,
  },
];

const Sidebar = () => {

  const location = useLocation();
  const { pathname } = location;
  const splitPathName = pathname.split('/');

  const navigate = useNavigate();
  return (
    <div className="h-full bg-[#1B2430] w-60 text-white md:flex hidden border-r-slate-950 fixed flex-col justify-between">
      <div className="pt-10 flex flex-col p-3 gap-2">
        {sidebarLinks.map((link, index) => {
          return (
            <SidebarLink
              key={index}
              link={link.link}
              name={link.name}
              splitPathName={splitPathName[1]}
              path={link.path}
              icon={link.icon}
            />
          );
        })}
      </div>
      <div className='flex flex-col p-3 gap-2'>
        <Link
          className={`${
            splitPathName[0] === 'profile' && 'bg-blue-500 rounded ml-2 p-1'
          } hover:bg-blue-300 ml-2 p-1 rounded transition duration-200 flex items-center`}
          to={'/profile'}
        >
          <div className='text-xl text-white'><CgProfile/></div>
          <div className='ml-1 text-lg'>Profile</div>
        </Link>
        <button
          className={`${
            splitPathName[0] === 'logout' && 'bg-blue-500 rounded ml-2 p-1'
          } hover:bg-blue-300 ml-2 p-1 rounded transition duration-200 flex items-center`}
          onClick={()=> {
            navigate('/login')
          }}
        >
          <div className='text-xl text-white'><CgLogOut/></div>
          <div className='ml-1 text-lg'>Logout</div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
