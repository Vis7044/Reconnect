import React from 'react';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="w-full bg-[#F0F2F5] overflow-y-scroll border-r-1  ml-60 mr-80 flex-1 hidescroll">
       <div className='flex justify-center items-center flex-col mt-5 gap-3'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
       </div>
    </div>
  );
};

export default Home;
