import React from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { MdHomeFilled } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { MdEvent } from 'react-icons/md';
import BottomNavLink from './BottomNavLink';
import { CgProfile } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";
import { IoBagAdd } from "react-icons/io5";


const sidebarLinks = [
  { name: 'Home', link: '/', path: '', icon: <MdHomeFilled /> },
  {
    name: 'Network',
    link: '/network-hub',
    path: 'network-hub',
    icon: <BsPeopleFill />,
  },
  {
    name: 'Job',
    link: '/job-portal',
    path: 'job-portal',
    icon: <IoBagAdd />,
  },
  {
    name: 'Events',
    link: '/events-reunions',
    path: 'events-reunions',
    icon: <MdEvent />,
  },
  {
    name: 'Donation',
    link: '/donation',
    path: 'donation',
    icon: <GiReceiveMoney />,
  },
  {
    name: 'Profile',
    link: '/profile',
    path: 'profile',
    icon: <CgProfile/>
  }
];

const BottomNav = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitPathName = pathname.split('/');

  const navigate = useNavigate();
  return (
    <div className="bg-[#1B2430] w-full text-white md:hidden flex fixed bottom-0 left-0 border-r-slate-950  flex-col justify-between">
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
