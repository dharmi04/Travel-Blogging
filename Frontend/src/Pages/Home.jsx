import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Blob from '../components/Blob';
import Parisimage from '../assets/paris.jpg';

// New component for the floating '+' sign
const FloatingButton = () => {
  return (
    <a href="/addblog" className="fixed bottom-8 right-8 bg-teal-900 p-3 rounded-full cursor-pointer">
  <span className="text-white text-xl font-bold">+</span>
</a>

  );
};

const Home = () => {
  const [featuredBlog, setFeaturedBlog] = useState(null);

  const getBlogPostById = async (postId) => {
    return {
      id: '65742091f3203661fc728d8c',
      title: 'Paris Emerges as the Most Visited Destination of 2023',
      content: 'In the ever-changing landscape of global tourism, Paris has once again claimed its throne as the most visited destination in 2023. Known as the "City of Lights" and celebrated for its rich history, iconic landmarks, and vibrant culture, Paris continues to captivate the hearts of travelers from around the world. This article ....'
    };
  };

  useEffect(() => {
    const fetchFeaturedBlog = async () => {
      const blogPost = await getBlogPostById('65742091f3203661fc728d8c');
      setFeaturedBlog(blogPost);
    };

    fetchFeaturedBlog();
  }, []);

  return (
    <div className=' text-black relative'>
      <Nav />
      <Blob />
      <div className='flex md:flex-row flex-col space-x-7 p-6'>
        <div className='md:w-1/2'>
          <img src={Parisimage} alt="paris" className='rounded-lg' />
        </div>
        {featuredBlog && (
          <div className="md:w-1/2 overflow-hidden shadow-xl rounded-lg text-teal-900 md:p-6 transform transition-transform hover:scale-105">
            <div className="md:px-6 py-4">
              <div className="font-bold text-3xl mb-2 font-sans ">{featuredBlog.title}</div>
              <p className="text-black text-lg">{featuredBlog.content}</p>
            </div>
            <div className="md:px-6 py-4">
              <a href={`/blog/${featuredBlog.id}`} className="text-black text-sm font-normal hover:underline">Read More</a>
            </div>
          </div>
        )}
      </div>

      {/* Floating '+' button */}
      <FloatingButton />
    </div>
  );
};

export default Home;
