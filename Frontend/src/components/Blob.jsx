import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Blob = () => {
  return (
    <div className='p-6 flex flex-col items-center justify-center h-full'>
      <div className="bg-teal-900 text-center h-40 w-full rounded-xl relative">
        <p className='text-yellow-500 text-4xl font-sans font-bold pt-14'>Blogs</p>
        <div className="absolute bottom-0 left-0 w-full h-24 flex items-center justify-center pt-16 ">
          <div className="flex items-center border border-yellow-500 rounded-lg p-2 bg-white shadow-sm shadow-white">
            <AiOutlineSearch className="text-black mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="p-2 text-black bg-transparent border-none focus:outline-none w-48 md:w-96  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blob;
