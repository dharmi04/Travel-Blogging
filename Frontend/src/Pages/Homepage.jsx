import React, { useState, useEffect } from 'react';
import img1 from '../assets/bg1.jpg';

import img3 from '../assets/bg3.jpg';
import img4 from '../assets/bg4.jpg';
import img5 from '../assets/bg5.jpg';
import img6 from '../assets/bg6.jpg';
import Nav from '../components/Nav';

const Homepage = () => {
  const images = [img1, img3, img4, img5, img6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className=" overflow-hidden">
     
      <div
        className="container absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 min-h-screen w-full p-50 bg-gray-100 shadow-2xl"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          transition: 'background-image 1s ease-in-out', // Smooth transition for background image change
        }}
      >
         <Nav />
        <div id="slide" className="w-max-content mt-8 w-2/3 p-6 bg-transparent text-white font-s">
          <p className='text-white text-5xl font-bold font-Lato  '>Welcome to Wanderlust Chronicles</p>
          <p className='mt-3 text-xl font-regular font-serif'>Embark on a journey with us, your passport to awe-inspiring landscapes, vibrant cultures, and untold stories. Immerse yourself in the magic of travel as our passionate explorers share tales of wanderlust, hidden gems, and extraordinary experiences. Discover a world beyond borders, one story at a time.
          </p>
        </div>

        <div className='p-6'>
          <a href="/home" className='text-white border-white border-2 p-2 text-2xl '>Explore</a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

