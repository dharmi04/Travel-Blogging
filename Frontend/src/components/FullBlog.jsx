import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';

const FullBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://travel-blogging-1gb9.vercel.app/api/posts/${id}`);
        setBlog(response.data);
        setLikes(response.data.likes);
        // Check if the user has liked the blog
        setIsLiked(response.data.isLiked);
      } catch (error) {
        console.error('Error fetching blog:', error.message);
      }
    };

    fetchBlog();
  }, [id]);

  const handleLike = async () => {
    try {
      // Toggle the like state
      const response = await axios.post(`http://localhost:5000/api/posts/${id}/like`);
      setLikes(response.data.likes);
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Error liking blog:', error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 text-teal-500">{blog.title}</h2>
      <p className="text-gray-700">{blog.desc}</p>

      <div className="flex items-center mt-4">
        <button
          onClick={handleLike}
          className={`mr-4 flex items-center text-black p-2 rounded`}
        >
          <FaThumbsUp className="mr-2" style={{ color: isLiked ? 'green' : 'black' }} />
          {likes} Like
        </button>
      </div>
    </div>
  );
};

export default FullBlog;
