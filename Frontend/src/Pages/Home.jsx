import React from 'react';
import Nav from '../components/Nav';
import londonImage from '../assets/londonn.jpg';
import dubaiImage from '../assets/dubai.jpeg'

const Home = () => {
  return (
    <div className='bg-white text-black'>
      <Nav />
      <div className='flex flex-row'> 
        <div className=' flex flex-col w-1/2 text-black font-Lato p-6 '>
          <h3 className='text-5xl flex-col '>Explore the world through our travel stories</h3>
          <p className='text-2xl font-light flex-col mt-3'>Embark on a journey of discovery and inspiration with our captivating travel blog.</p>
          <a href="/signup" className='mt-4'>SignUp</a>
        </div>
        <div className='flex w-1/2 pr-6'>
          <img src={londonImage} alt='London' />
        </div>
      </div>
      <div className='flex flex-row mt-10 '> 
        <div className=' flex flex-col w-1/2 text-black shadow-white font-Lato p-6 '>
          <p className='text-5xl flex-col transition duration-300 ease-in-out'>Unlock the World's Hidden Gems with Us</p>
          <p className='text-2xl font-light flex-col mt-3'>Discover insider tips, comprehensive travel guides, and exclusive content that will make your next adventure unforgettable.</p>
          <a href="/signup" className='mt-4'>SignUp</a>
        </div>
        <div className='flex w-1/2 pr-6'>
          <img src={dubaiImage} alt='Dubai' />
        </div>
      </div>
      
      <div className='mt-10 p-6 flex'>
  {/* Content on the left */}
  <div className='flex-1'>
    <p className='text-5xl text-black'>Discover New Travel Destinations</p>
    <p className='text-2xl font-thin text-black mt-2'>Explore the world through our captivating travel blogs.</p>
  </div>

  {/* All Blogs link on the right */}
  <a className='text-white text-2xl  font-light mt-3'>All Blogs</a>
</div>
<div className='flex flex-row space-x-7 p-6'>

<div className="max-w-sm rounded overflow-hidden shadow-lg bg-primary text-white p-6">
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

<div className="text-black text-center mt-20">
  <p className='text-3xl font-Lato font-semibold'>Explore Wanderlust</p>
  <p className='text-xl font-mono font-normal mt-2'>Get inspired by breathtaking travel photography from around the world.</p>
</div>




    </div>
  );
};

export default Home;
