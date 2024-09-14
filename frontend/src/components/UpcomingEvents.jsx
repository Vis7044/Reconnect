import React, { useState } from 'react';
import EventCard from './EventCard';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import event1 from '../assets/images/event1.jpg';
import event2 from '../assets/images/event2.jpg';
import event3 from '../assets/images/event3.jpg';
import signup from '../assets/images/signup2.jpg';
import login from '../assets/images/login.jpg';

const EventArray = [
  {
    id: 1,
    title: 'Phoenix',
    date: '24th Sept',
    location: "Kolkata",
    image: event1,
  },
  {
    id: 2,
    title: 'ABC',
    date: '24th Sept',
    location: 'Mumbai',
    image: event2,
  },
  {
    id: 3,
    title: 'Nothing',
    date: '29th Sept',
    location: 'Pune',
    image: event3,
  },
  {
    id: 4,
    title: 'Anything',
    date: '24th Aug',
    location: 'Hyderabad',
    image: login,
  },
  {
    id: 5,
    title: 'Fireship',
    date: '24th Sept',
    location: 'Bangalore',
    image: signup,
  },
];

const UpcomingEvents = () => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % EventArray.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prevIndex) => (prevIndex - 1 + EventArray.length) % EventArray.length
    );
  };

  return (
    <div className="m-8 bg-white rounded-2xl h-[350px] flex flex-col w-[360px]">
      <div className='flex justify-between p-1 items-center'>
      <div className="m-3 text-3xl font-semibold text-gray-500">Upcoming Events</div>
      <div className='flex items-center '>
        <GrFormPrevious className='text-3xl ml-2 cursor-pointer' onClick={prevSlide} />
        <MdOutlineNavigateNext className='text-3xl cursor-pointer' onClick={nextSlide} />
      </div>
      </div>
      <div className="">
        <EventCard event={EventArray[current]} />
      </div>
    </div>
  );
};

export default UpcomingEvents;
