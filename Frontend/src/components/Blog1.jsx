import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown';
// import gfm from 'remark-gfm'; // for GitHub flavored markdown support

import Andaman from '../assets/andaman.jpg';

const Blog1 = () => {
  const [featuredBlog, setFeaturedBlog] = useState(null);

  const getBlogPostById = async (postId) => {
    return {
      id: '657aa106218917ec1c1e5643',
      title: 'Exploring Paradise: A Mesmerizing Tour to Andaman and Nicobar Islands',
      content: 'Nestled in the azure waters of the Bay of Bengal, the Andaman and Nicobar Islands stand as a pristine haven waiting to be discovered. This archipelago, consisting of 572 islands, is known for its breathtaking landscapes, diverse marine life, and rich cultural heritage. Embarking on a tour to the Andaman and Nicobar Islands promises a journey filled with adventure, relaxation, and unforgettable memories. ....'
    };
  };

  useEffect(() => {
    const fetchFeaturedBlog = async () => {
      const blogPost = await getBlogPostById('657aa106218917ec1c1e5643');
      setFeaturedBlog(blogPost);
    };

    fetchFeaturedBlog();
  }, []);

  return (
    <div>
      <div className='flex md:flex-row flex-col space-x-7 p-6'>
        <div className='md:w-1/2'>
          <img src={Andaman} alt="paris" className='rounded-lg' />
        </div>
        {featuredBlog && (
          <div className="md:w-1/2 overflow-hidden shadow-xl rounded-lg text-teal-900 md:p-6 transform transition-transform hover:scale-105">
            <div className="md:px-6 py-4">
              <div className="font-bold text-3xl mb-2 font-sans ">{featuredBlog.title}</div>
              <ReactMarkdown plugins={[gfm]} children={featuredBlog.content} />
            </div>
            <div className="md:px-6 py-4">
              <a href={`/blog/${featuredBlog.id}`} className="text-black text-sm font-normal hover:underline">Read More</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog1;
