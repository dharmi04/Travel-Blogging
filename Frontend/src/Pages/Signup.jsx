import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
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
    // Add your signup logic here
    axios
      .post("http://localhost:5000/api/signup", formData)
      .then(response => {
        console.log(response);
        navigate('/');
      })
      .catch(error => {
        console.error("Signup error:", error);
      });

    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-teal-900 min-h-screen flex items-center justify-center">
      <div className="bg-primary p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-5 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent border-white shadow-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent border-white shadow-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent border-white shadow-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors w-full"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-between items-center">
  <p className="flex-start">Already have an account?</p>
  <a href="/login" className="flex-end">Login</a>
</div>

      </div>
    </div>
  );
};

export default Signup;
