import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import Nav from '../components/Nav';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const numberOfImagesToShow = 30; // Change this value as needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.unsplash.com/search/photos',
          {
            params: {
              query: 'places',
              client_id: 'gJxu19NegQgHJ9aW9OMKjQKBNxCTxbOUS3S7US-sLwI',
            },
          }
        );
        const photosArray = response.data.results || [];

        setPhotos(photosArray.slice(0, numberOfImagesToShow)); // Use slice to limit the number of images
      } catch (error) {
        console.error('Error fetching photos from Unsplash:', error);
      }
    };

    fetchData();
  }, []); 


  return (
    <div>
<Nav />
    <div className="container mx-auto mt-8">
      
      <h1 className="text-4xl font-bold mb-4 p-6 text-teal-900"> Photo Gallery</h1>
      <p className='font-lato p-6 text-2xl'> Welcome to our Unsplash Photo Gallery! All images featured here are
        sourced from Unsplash, a platform that provides high-quality and
        royalty-free photos. We express our sincere gratitude to the talented
        photographers who generously share their work with the world.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-6">
        {photos.map((photo) => (
          <div key={photo.id} className="relative transition-opacity duration-500 ease-in-out hover:opacity-75">
            <a
              href={photo.user.links.html}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={photo.urls.regular}
                alt={photo.alt_description || 'Unsplash Photo'}
                className="md:w-[400px] md:h-[400px] w-[200px] h-[200px] shadow-md"
              />
            </a>
            {/* <div className="absolute bottom-0 left-0 p-4 bg-slate-400 bg-opacity-40 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center uppercase">
                  <p className="mr-2 uppercase" />
                  {photo.alt_description || 'No Description available'}
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </div>
      <p className="text-white text-sm mt-6 bg-gray-700 text-center h-14 pt-7">
        All photos are courtesy of Unsplash. Visit Unsplash to discover more
        amazing photography.
      </p>
    </div>
    </div>
  );
};

export default PhotoGallery;