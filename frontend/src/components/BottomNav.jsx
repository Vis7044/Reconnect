import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdHomeFilled } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';
import { MdEvent } from 'react-icons/md';
import { FaFileAlt } from 'react-icons/fa';
import BottomNavLink from './BottomNavLink';


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

const BottomNav = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitPathName = pathname.split('/');

  const navigate = useNavigate();
  return (
    <div className="h-[50px]  bg-[#1B2430] w-full text-white md:hidden flex border-r-slate-950 fixed flex-col justify-between">
      <div className="flex justify-between">
        {sidebarLinks.map((link, index) => {
          return (
            <BottomNavLink
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
    </div>
  );
};

export default BottomNav;
