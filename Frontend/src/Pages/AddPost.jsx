import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddPost = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
  });

  

  const handleChange = (value) => {
    setFormData({
      ...formData,
      desc: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if user is logged in
      if (!isLoggedIn) {
        toast.error('Please log in to add a post');
        return;
      }

      const response = await axios.post("http://localhost:5000/api/posts", formData);

      console.log("Post added successfully", response.data);
      // Redirect to posts page or do other actions upon successful post creation
      navigate('/posts');
    } catch (error) {
      console.error('Error adding post:', error.message);
    }
  };

  return (
    <div className=" bg-teal-900 flex items-center justify-center w-full p-10 ">
      <form onSubmit={handleSubmit} className="bg-primary shadow-md rounded p-3  ">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="desc">
            Description
          </label>
          <ReactQuill
            className='h-96'
            value={formData.desc}
            onChange={handleChange}
            placeholder="Enter description"
            modules={{
              toolbar: [
                [{ 'header': [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                ['link', 'image'],
                [{ 'align': [] }],
                ['clean'],
              ],
            }}
            formats={[
              'header',
              'bold', 'italic', 'underline', 'strike',
              'blockquote', 'code-block',
              'list', 'bullet',
              'link', 'image',
              'align',
            ]}
          />
        </div>
        <div className="flex items-center justify-between md:pt-10 pt-20">
          <button
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
