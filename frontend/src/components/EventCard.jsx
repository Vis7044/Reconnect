import React from 'react';
import signup from '../assets/images/signup2.jpg';
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

const EventCard = (props) => {
  return (
    <div className='mx-auto h-[300px] flex flex-col w-[90%] items-center gap-2'>
      <div className='h-[150px] w-full'>
        <img
          src={props.event.image}   
          alt="Event 1"
          className="h-full w-full object-contain rounded-md border"
        />
      </div>
      <div className="flex items-center justify-start w-full">
        <div className='flex gap-1 items-center'><FaLocationDot className="text-xl"/> {props.event.location}</div>
        <div className='ml-10 flex gap-1 items-center'><MdAccessTimeFilled className="text-xl"/> {props.event.date}</div>
      </div>
      <div className='text-start w-full text-slate-500 font-semibold text-3xl'>
        {props.event.title}
      </div>
      <div className='w-full text-end mb-4 text-white'>
      <button className='rounded-full bg-slate-500 p-2 text-l'>Register</button>
      </div>
    </div>
  );
};

export default EventCard;
