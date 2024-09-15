import React, { useRef, useState } from 'react';
import { RegisterFields, TermAndCondition } from '../utils';
import Input from '../components/Input';

import login from '../assets/images/login.jpg';
import { Link } from 'react-router-dom';
import { MdCloudUpload } from 'react-icons/md';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import Modal from '../components/Modal';

const Signup = () => {
  const inputref = useRef(null);
  const [show, setShow] = useState(false);
  const [termAccepted, setTermAccepted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFile = () => {
    console.log('clicked');
    inputref.current.click();
  };

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setShow(true);
  };


  const handleTermCondition = () => {
    setTermAccepted(!termAccepted);
    closeModal(true);
  };
  return (
    <div className="h-screen flex items-start justify-center">
      <div className="mt-48 bg-[#F3F4F6] lg:w-[1000px] md:w-[700px] sm:w-[80%] w-[80%]  rounded-md sm:grid sm:grid-cols-5 block">
        <div className="sm:block hidden col-span-2">
          <img
            src={login}
            alt="Post Image"
            className="w-full h-full object-cover border"
          />
        </div>
        <div className=" flex flex-col items-center col-span-3 pb-4">
          <div className="text-center mt-5 mb-2 font-semibold text-xl">
            Sign up
          </div>
          <form className="flex gap-4 flex-col w-full">
            {RegisterFields.map((field, index) => (
              <div key={index} className="flex flex-col items-center">
                <Input type={field.type} placeholder={field.placeholder} />
              </div>
            ))}
            <div className="flex flex-col items-center">
              <select
                required
                className="border border-gray-300 rounded-md py-2 px-3 w-64 focus:outline-none focus:border-blue-500"
              >
                <option disabled selected>
                  Choose Document
                </option>
                <option>Marksheet</option>
                <option>Migration Certificate</option>
                <option>College Id Card</option>
              </select>
            </div>
            <input
              ref={inputref}
              accept=".pdf"
              className="hidden"
              onChange={handleChange}
              type="file"
            />
            <div className="flex justify-center items-center gap-5">
              <div
                onClick={handleFile}
                className="border border-slate-200 rounded-md py-2 px-3 w-48 focus:outline-none flex justify-around cursor-pointer"
              >
                {' '}
                <MdCloudUpload className="text-blue-500 text-2xl" />
                <span>
                  upload doc(<span className="text-red-500">*pdf</span>)
                </span>
              </div>
              <IoIosCheckmarkCircleOutline
                className={`text-green-600 text-2xl ${
                  show ? 'block' : 'hidden'
                } `}
              />
            </div>
            <div>
              <p className="text-center text-gray-500">
                Read Terms & Conditions{' '}
                <span
                  onClick={openModal}
                  className="text-blue-500 underline cursor-pointer"
                >
                  {' '}
                  read
                </span>
              </p>
            </div>
            
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 mx-auto disabled:bg-gray-600"
              disabled={!termAccepted}
            >
              Signup
            </button>
            <div className="max-w-fit mx-auto">
              Already Have an Account?{' '}
              <Link to={'/login'} className="underline text-blue-600">
                Login
              </Link>
            </div>
          </form>
          <Modal
            isOpen={isModalOpen}
            onClose={handleTermCondition}
            title="Terms And Conditions"
            
          >
            <div className=''>{TermAndCondition.text}</div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Signup;
