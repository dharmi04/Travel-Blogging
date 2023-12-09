import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Blob from '../components/Blob';
import Parisimage from '../assets/paris.jpg'
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
    <div className=' text-black'>
      <Nav />
      <Blob />
      <div className='flex flex-row space-x-7 p-6'>
        <div className='w-1/2'>
          <img src={Parisimage} alt="paris" className='rounded-lg' />
        </div>
        {featuredBlog && (
          <div className="w-1/2 overflow-hidden shadow-xl rounded-lg text-teal-900 p-6 transform transition-transform hover:scale-105">
            <div className="px-6 py-4">
              <div className="font-bold text-3xl mb-2 font-sans ">{featuredBlog.title}</div>
              <p className="text-black text-xl">{featuredBlog.content}</p>
            </div>
            <div className="px-6 py-4">
              <a href={`/blog/${featuredBlog.id}`} className="text-black text-sm font-normal hover:underline">Read More</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

