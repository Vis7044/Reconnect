import React from 'react';
import Card from '../components/Card';
import SidebarRight from '../components/SidebarRight';
import UpcomingEvents from '../components/UpcomingEvents';

const Home = () => {
  return (
    <div className="grid grid-col-1 xl:grid-cols-5 bg-[rgb(240,242,245)] md:ml-60 ml-0 ">
       <div className='flex h-[calc(100vh-20px)] xl:col-span-3 col-span-1 flex-col mt-5 gap-5 overflow-y-scroll hidescroll'>
        <Card />  
        <Card />  
        <Card />  
        <Card />  
        <Card />  
       </div>
       <div className='hidden col-span-2 xl:flex xl:flex-col xl:items-center xl:justify-start h-[calc(100vh-20px)] '>
          <UpcomingEvents/>
          <SidebarRight/>
      </div>
    </div>
  );
};

export default Home;
