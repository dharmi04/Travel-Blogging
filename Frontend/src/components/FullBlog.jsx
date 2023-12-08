// BlogDetail.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const FullBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error.message);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="max-w-2xl mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 text-teal-500">{blog.title}</h2>
      <p className="text-gray-700">{blog.desc}</p>
    </div>
  );
};

export default FullBlog;
