import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Make a GET request to fetch all posts from the backend
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      }
    };

    // Call the fetchPosts function when the component mounts
    fetchPosts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
      {posts.map((post) => (
        <div key={post._id} className="bg-white shadow-md rounded p-4 mb-4">
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <p>{post.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
