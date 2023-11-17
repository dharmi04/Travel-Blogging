import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/profile', {
            withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error.message);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="max-w-md mx-auto my-8">
      {loading ? (
        <p>Loading...</p>
      ) : userData ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <p className="text-gray-800">{userData.username}</p>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <p className="text-gray-800">{userData.email}</p>
          </div>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default ProfilePage;
