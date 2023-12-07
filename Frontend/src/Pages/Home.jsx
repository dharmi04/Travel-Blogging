import React from 'react';
import Nav from '../components/Nav';
import londonImage from '../assets/londonn.jpg';

const Home = () => {
  return (
    <div className='bg-teal-900'>
      <Nav />
      <div className='flex flex-row'> 
        <div className=' flex flex-col w-1/2 text-white shadow-white font-Lato p-6 '>
          <p className='text-5xl flex-col'>Explore the world through our travel stories</p>
          <p className='text-2xl font-light flex-col mt-3'>Embark on a journey of discovery and inspiration with our captivating travel blog.</p>
          <a href="/signup" className='mt-4'>SignUp</a>
        </div>
        <div className='flex w-1/2 pr-6'>
          <img src={londonImage} alt='London' />
        </div>
      </div>
      <div className='mt-10 p-6 flex'>
  {/* Content on the left */}
  <div className='flex-1'>
    <p className='text-5xl text-white'>Discover New Travel Destinations</p>
    <p className='text-2xl font-thin text-white mt-2'>Explore the world through our captivating travel blogs.</p>
  </div>

  {/* All Blogs link on the right */}
  <a className='text-white text-2xl  font-light mt-3'>All Blogs</a>
</div>
<div className='flex flex-row space-x-7 p-6'>

<div className="max-w-sm rounded overflow-hidden shadow-lg   bg-red-500 text-white p-6">
  <img src={londonImage} alt="Card Image" className="w-full h-48 object-cover" />

  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Card Title</div>
    <p className="text-white text-base">Card Description goes here. Provide a brief overview of the content.</p>
  </div>

  <div className="px-6 py-4">
    <a href="#" className="text-white text-sm font-light hover:underline">Read More</a>
  </div>
</div>

<div className="max-w-sm rounded overflow-hidden shadow-lg bg-red-500  text-white p-6 ">
  <img src={londonImage} alt="Card Image" className="w-full h-48 object-cover" />

  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Card Title</div>
    <p className="text-white text-base">Card Description goes here. Provide a brief overview of the content.</p>
  </div>

  <div className="px-6 py-4">
    <a href="#" className="text-white text-sm font-light hover:underline">Read More</a>
  </div>
</div>

<div className="max-w-sm rounded overflow-hidden shadow-lg bg-red-500  text-white p-6 ">
  <img src={londonImage} alt="Card Image" className="w-full h-48 object-cover" />

  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Card Title</div>
    <p className="text-white text-base">Card Description goes here. Provide a brief overview of the content.</p>
  </div>

  <div className="px-6 py-4">
    <a href="#" className="text-white text-sm font-light hover:underline">Read More</a>
  </div>
</div>

</div>


    </div>
  );
};

export default Home;
