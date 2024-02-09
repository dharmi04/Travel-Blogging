import React from 'react';
import Nav from '../components/Nav';

const categories = [
  {
    name: 'Specific Locations',
    link: 'https://en.wikipedia.org/wiki/Tourism_in_Uruguay',
  },
  {
    name: 'Beaches',
    link: 'https://en.wikipedia.org/wiki/List_of_beaches_in_Mauritius',
  },
  {
    name: 'Casinos',
    link: 'https://en.wikipedia.org/wiki/List_of_casinos',
  },
  {
    name: 'Museums',
    link: 'https://en.wikipedia.org/wiki/List_of_museums',
  },
  {
    name: 'Recreational and Entertainment Venues',
    link: 'https://en.wikipedia.org/wiki/List_of_airshows',
  },
  {
    name: 'Amusement Parks',
    link: 'https://en.wikipedia.org/wiki/List_of_amusement_parks',
  },
  {
    name: 'Aquaria',
    link: 'https://en.wikipedia.org/wiki/List_of_aquaria',
  },
  {
    name: 'Botanical Gardens',
    link: 'https://en.wikipedia.org/wiki/List_of_botanical_gardens',
  },
  {
    name: 'Architectural and Historical Sites',
    link: 'https://en.wikipedia.org/wiki/List_of_buildings',
  },
  {
    name: 'Cultural Events and Festivals',
    link: 'https://en.wikipedia.org/wiki/List_of_festivals',
  },
  {
    name: 'Memorials and Monuments',
    link: 'https://en.wikipedia.org/wiki/List_of_memorials',
  },
  {
    name: 'Nature and Gardens',
    link: 'https://en.wikipedia.org/wiki/List_of_botanical_gardens',
  },
  {
    name: 'Outdoor and Recreational Areas',
    link: 'https://en.wikipedia.org/wiki/List_of_national_parks',
  },
  {
    name: 'Shopping and Entertainment Complexes',
    link: 'https://en.wikipedia.org/wiki/List_of_shopping_malls',
  },
  {
    name: 'Sports Facilities',
    link: 'https://en.wikipedia.org/wiki/List_of_ski_areas_and_resorts',
  },
  {
    name: 'Sports Venues',
    link: 'https://en.wikipedia.org/wiki/List_of_sports_facilities',
  },
  {
    name: 'Tourism Related to Historical Reenactments',
    link: 'https://en.wikipedia.org/wiki/List_of_tourist_attractions_providing_reenactment',
  },
  {
    name: 'World Heritage and Conservation',
    link: 'https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites',
  },
  {
    name: 'Others',
    link: 'https://en.wikipedia.org/wiki/List_of_zoos',
  },
];

    const CategoryLink = ({ name, link }) => (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-2 m-2 bg-teal-700 text-white rounded transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          {name}
        </a>
      );
      
      const CategoriesList = () => (
        <div className="flex flex-wrap justify-center">
          {categories.map((category, index) => (
            <CategoryLink key={index} {...category} />
          ))}
        </div>
      );
      
      const TourismCategories = () => (
        <div>
            <Nav />
<div className="container mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-4 text-teal-900 text-center">Tourism Categories</h1>
          <CategoriesList />
        </div>
        </div>
        
      );
      
      export default TourismCategories;