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
  const [additionalBlogs, setAdditionalBlogs] = useState([]);

  const getBlogPostById = async (postId) => {
    return {
      id: '65742091f3203661fc728d8c',
      title: 'Paris Emerges as the Most Visited Destination of 2023',
      content: 'In the ever-changing landscape of global tourism, Paris has once again claimed its throne as the most visited destination in 2023. Known as the "City of Lights" and celebrated for its rich history, iconic landmarks, and vibrant culture, Paris continues to captivate the hearts of travelers from around the world. This article ....'
    };
  };

  const getAdditionalBlogs = async () => {
    try {
      // Fetch additional blog posts here using API or any other method
      // For demonstration purposes, using static data
      const blog2 = await getBlogPostById('657aa106218917ec1c1e5643');
      const blog3 = await getBlogPostById('your_third_blog_id');
  
      setAdditionalBlogs([blog2, blog3]);
    } catch (error) {
      console.error('Error fetching additional blogs:', error);
    }
  };

  useEffect(() => {
    const fetchFeaturedBlog = async () => {
      const blogPost = await getBlogPostById('65742091f3203661fc728d8c');
      setFeaturedBlog(blogPost);
      getAdditionalBlogs();
    };

    fetchFeaturedBlog();
  }, []);

  return (
    <div className='text-black relative'>
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

      {/* Display additional blogs directly */}
      {/* <div className="flex space-x-4 p-4">
        {additionalBlogs.map(blog => (
          <div key={blog.id} className="overflow-hidden shadow-xl rounded-lg text-teal-900 p-4">
            <div className="font-bold text-xl mb-2">{blog.title}</div>
            <p className="text-black">{blog.content}</p>
            <a href={`/blog/${blog.id}`} className="text-black text-sm font-normal hover:underline">Read More</a>
          </div>
        ))}
      </div> */}

      {/* Floating '+' button */}
      <FloatingButton />
    </div>
  );
};

export default Home;
