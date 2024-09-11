import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SidebarLink from './SidebarLink';

const sidebarLinks = [
  {name: 'Home',link: '/',path: ''},
  { name: 'Donation',link: '/donation',path: 'donation',},
  { name: 'Network Hub',link: '/network-hub',path: 'network-hub',},
  { name: 'Job Portal',link: '/job-portal',path: 'job-portal',},
  { name: 'Events & Reunions',link: '/events-reunions',path: 'events-reunions',},
];

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitPathName = pathname.split('/');
  return (
    <div className="h-screen bg-[#1B2430] w-52 text-white md:block hidden border-r-slate-950">
      <div className="pt-10 flex flex-col p-3 gap-2">
        {
          sidebarLinks.map((link, index) => {
            return <SidebarLink key={index} link={link.link} name={link.name} splitPathName={splitPathName[1]} path={link.path}/>;
          })
        }
      </div>    
    </div>
  );
};

export default Sidebar;
