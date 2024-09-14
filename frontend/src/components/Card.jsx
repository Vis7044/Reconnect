import React from 'react';
import profile from '../assets/images/prof.jpg';
import mountain from '../assets/images/mountain.jpg';
import { FaHeart, FaShare } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaCommentDots } from 'react-icons/fa';

const Card = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        {/* <!-- User Info with Three-Dot Menu --> */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img
              src={profile}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-gray-800 font-semibold">John Doe</p>
              <p className="text-gray-500 text-sm">Posted 2 hours ago</p>
            </div>
          </div>
          <div className="text-gray-500 cursor-pointer">
            {/* <!-- Three-dot menu icon --> */}
            <button className="hover:bg-gray-50 rounded-full p-1">
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>
        {/* <!-- Message --> */}
        <div className="mb-4">
          <p className="text-gray-800">
            Just another day with adorable kittens! 🐱{' '}
            <a href="" className="text-blue-600">
              #CuteKitten
            </a>
            <a href="" className="text-blue-600">
              #AdventureCat
            </a>
          </p>
        </div>
        {/* <!-- Image --> */}
        <div className="mb-4">
          <img
            src={mountain}
            alt="Post Image"
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
        {/* <!-- Like and Comment Section --> */}
        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center space-x-2">
            <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
              <FaHeart />
              <span>42 Likes</span>
            </button>
          </div>
          <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
            <FaCommentDots />
            <span>3 Comment</span>
          </button>
          <button className="flex justify-center items-center gap-2 px-2 hover:bg-gray-50 rounded-full p-1">
            <FaShare />
            <span>1 share</span>
          </button>
        </div>
        <hr className="mt-2 mb-2" />
        <p className="text-gray-800 font-semibold">Comment</p>
        <hr className="mt-2 mb-2" />
        <div className="mt-4">
          {/* <!-- Comment 1 --> */}
          <div className="flex items-center space-x-2">
            <img
              src={profile}
              alt="User Avatar"
              className="w-6 h-6 rounded-full"
            />
            <div>
              <p className="text-gray-800 font-semibold">Jane Smith</p>
              <p className="text-gray-500 text-sm">Lovely shot! 📸</p>
            </div>
          </div>
          {/* <!-- Comment 2 --> */}
          <div className="flex items-center space-x-2 mt-2">
            <img
              src={profile}
              alt="User Avatar"
              className="w-6 h-6 rounded-full"
            />
            <div>
              <p className="text-gray-800 font-semibold">Bob Johnson</p>
              <p className="text-gray-500 text-sm">
                I can't handle the cuteness! Where can I get one?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
