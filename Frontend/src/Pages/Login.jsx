import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    axios
      .post("https://travel-blogging-1gb9.vercel.app/api/login", formData)
      .then(response => {
        console.log(response);
        navigate('/');
      })
      .catch(error => {
        console.error("Login error:", error);
      });

    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-teal-900 min-h-screen flex items-center justify-center p-10">
      <div className="bg-primary p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-5 text-center text-black">LogIn</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600 ">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent border-white shadow-lg text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent border-white shadow-lg "
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-black p-2 rounded-md hover:bg-green-600 transition-colors w-full"
          >
            LogIn
          </button>
        </form>
        <div className="flex justify-between items-center mt-5 text-black">
          <p className="flex-start">Don't have an account?</p>
          <a href="/Signup" className="flex-end">SignUp</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
