import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://travel-blogging-uvm4.vercel.app/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>

      <div className="mb-5 ">
      <div className='flex md:flex-row flex-col md:space-x-6 space-y-4 pl-6 pr-6 '>
      {posts.map((post) => (
        <div key={post._id} className="bg-white shadow-md rounded p-4 mb-4 border-black transform transition-transform hover:scale-105">
          <h3 className="text-2xl font-bold mb-2 text-teal-900">{post.title}</h3>
          <p className="text-gray-700">{`${post.desc.slice(0, 150)}...`}</p>
          <Link to={`/blog/${post._id}`} className="text-teal-500 hover:underline">
            Read More
          </Link>
        </div>
      ))}
      </div>
      
    </div>
    </div>
  );
};

export default BlogList;
