import React from 'react';
import Card from '../components/Card';
import SidebarRight from '../components/SidebarRight';

const Home = () => {
  return (
    <div className="grid grid-cols-4 bg-[rgb(240,242,245)] md:ml-60 ml-0 ">
       <div className='flex h-[calc(100vh-20px)] col-span-3 flex-col items-center mt-5 gap-5 overflow-y-scroll hidescroll'>
        <Card />  
        <Card />  
        <Card />  
        <Card />  
        <Card />  
       </div>
       <div className='hidden xl:block h-[calc(100vh-20px)]'>
          <SidebarRight/>
      </div>
    </div>
  );
};

export default Home;
