import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarLink from './SidebarLink';
import { MdHomeFilled } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { MdEvent } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";


const sidebarLinks = [
  {name: 'Home',link: '/',path: '', icon: <MdHomeFilled />},
  { name: 'Donation',link: '/donation',path: 'donation',icon: <GiReceiveMoney />},
  { name: 'Network Hub',link: '/network-hub',path: 'network-hub',icon: <IoChatbubbleEllipsesSharp />},
  { name: 'Job Portal',link: '/job-portal',path: 'job-portal',icon: <FaFileAlt/>},
  { name: 'Events & Reunions',link: '/events-reunions',path: 'events-reunions',icon: <MdEvent/>},
];

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitPathName = pathname.split('/');
  return (
    <div className="h-full bg-[#1B2430] w-60 text-white md:block hidden border-r-slate-950 fixed">
      <div className="pt-10 flex flex-col p-3 gap-2">
        {
          sidebarLinks.map((link, index) => {
            return <SidebarLink key={index} link={link.link} name={link.name} splitPathName={splitPathName[1]} path={link.path} icon={link.icon}/>;
          })
        }
      </div>    
    </div>
  );
};

export default Sidebar;
