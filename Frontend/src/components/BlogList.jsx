import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 text-teal-500">Explore Our Blogs</h2>
      {posts.map((post) => (
        <div key={post._id} className="bg-white shadow-md rounded p-4 mb-4">
          <h3 className="text-2xl font-bold mb-2 text-teal-500">{post.title}</h3>
          <p className="text-gray-700">{`${post.desc.slice(0, 150)}...`}</p>
          <Link to={`/blog/${post._id}`} className="text-teal-500 hover:underline">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
