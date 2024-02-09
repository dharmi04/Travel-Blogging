import React from 'react';
import Nav from '../components/Nav';

const placesData = [
    
      {
        name: 'Paris, France',
        description: 'Experience the romantic charm of the City of Lights with its iconic landmarks and exquisite cuisine.',
      },
      {
        name: 'New York City, USA',
        description: 'Discover the city that never sleeps, known for its skyscrapers, cultural diversity, and Broadway shows.',
      },
      {
        name: 'Tokyo, Japan',
        description: 'Immerse yourself in the futuristic cityscape, traditional temples, and bustling street life of Tokyo.',
      },
      {
        name: 'Rome, Italy',
        description: 'Step back in time and explore the ancient ruins, art, and delicious cuisine in the Eternal City.',
      },
      {
        name: 'Cape Town, South Africa',
        description: 'Experience the breathtaking landscapes, vibrant culture, and rich history at the tip of the African continent.',
      },
      {
        name: 'Sydney, Australia',
        description: 'Discover the iconic Sydney Opera House, beautiful beaches, and laid-back Australian way of life.',
      },
      {
        name: 'Rio de Janeiro, Brazil',
        description: 'Soak in the sun on the famous Copacabana Beach and marvel at the Christ the Redeemer statue overlooking the city.',
      },
      {
        name: 'Barcelona, Spain',
        description: 'Wander through the enchanting streets, visit Gaudi’s masterpieces, and savor tapas in Barcelona.',
      },
      {
        name: 'Marrakech, Morocco',
        description: 'Get lost in the vibrant souks, explore historic palaces, and experience the rich flavors of Moroccan cuisine.',
      },
      {
        name: 'Dubai, UAE',
        description: 'Witness the futuristic skyline, indulge in luxury shopping, and experience the opulence of the desert city.',
      },
      {
        name: 'Buenos Aires, Argentina',
        description: 'Immerse yourself in the tango culture, explore historic neighborhoods, and savor Argentine steak.',
      },
      {
        name: 'Prague, Czech Republic',
        description: 'Roam through the charming streets, visit historic castles, and enjoy a pint of Czech beer in Prague.',
      },
      {
        name: 'Vancouver, Canada',
        description: 'Surrounded by mountains and ocean, Vancouver offers a perfect blend of outdoor adventures and urban sophistication.',
      },
      {
        name: 'Seoul, South Korea',
        description: 'Experience the dynamic blend of ancient traditions and modern technology in the vibrant city of Seoul.',
      },
      {
        name: 'Amsterdam, Netherlands',
        description: 'Cruise along the picturesque canals, visit world-class museums, and enjoy the laid-back atmosphere of Amsterdam.',
      },
      {
        name: 'Istanbul, Turkey',
        description: 'Bridge between Europe and Asia, Istanbul beckons with its rich history, stunning architecture, and vibrant markets.',
      },
      {
        name: 'Cairo, Egypt',
        description: 'Explore the ancient pyramids, visit historic mosques, and cruise along the Nile River in the heart of Egypt.',
      },
      {
        name: 'Reykjavik, Iceland',
        description: 'Discover the land of fire and ice, where geysers, waterfalls, and the Northern Lights paint a mesmerizing landscape.',
      },
      {
        name: 'Jaipur, Rajasthan',
        description: 'Step into the "Pink City" known for its majestic palaces, vibrant markets, and the iconic Hawa Mahal.',
      },
      {
        name: 'Varanasi, Uttar Pradesh',
        description: 'Experience the spiritual essence of one of the oldest living cities, where the Ganges River flows with ancient rituals and ceremonies.',
      },
      {
        name: 'Goa, Goa',
        description: 'Relax on the pristine beaches, explore colonial architecture, and indulge in the vibrant nightlife of this coastal paradise.',
      },
      {
        name: 'Agra, Uttar Pradesh',
        description: 'Visit the world-famous Taj Mahal, Agra Fort, and the historic Mughal Gardens, capturing the grandeur of India’s history.',
      },
      {
        name: 'Mysuru, Karnataka',
        description: 'Explore the opulent Mysore Palace, experience the vibrant Dasara festival, and stroll through the beautiful Brindavan Gardens.',
      },
      {
        name: 'Kolkata, West Bengal',
        description: 'Immerse yourself in the cultural capital of India, known for its grand Durga Puja celebrations, historical landmarks, and literature festivals.',
      },
      {
        name: 'Kochi, Kerala',
        description: 'Discover the blend of cultural influences, explore the historic Fort Kochi, and enjoy the serene backwaters of Kerala.',
      },
      {
        name: 'Amritsar, Punjab',
        description: 'Experience the spiritual ambience of the Golden Temple, witness the patriotic fervor at the Wagah Border, and savor Punjabi cuisine.',
      },
      {
        name: 'Udaipur, Rajasthan',
        description: 'Known as the "City of Lakes," Udaipur offers a romantic setting with palaces, lakes, and the intricate architecture of the City Palace.',
      },
      {
        name: 'Rishikesh, Uttarakhand',
        description: 'Embrace the spiritual vibe, practice yoga by the Ganges, and experience adventure sports in the foothills of the Himalayas.',
      },
      {
        name: 'Krakow, Poland',
        description: 'Step into the medieval charm of Krakow, visit historic squares, and explore the nearby Auschwitz-Birkenau Memorial.',
      },
      {
        name: 'Singapore City, Singapore',
        description: 'Experience the blend of modern architecture, diverse cultures, and delicious street food in the city-state of Singapore.',
      },
      {
        name: 'Edinburgh, Scotland',
        description: 'Walk through the historic streets, visit the Edinburgh Castle, and immerse yourself in the cultural richness of Scotland.',
      },
      {
        name: 'Havana, Cuba',
        description: 'Step back in time in Havana, where vintage cars, colonial architecture, and lively music create a unique atmosphere.',
      },
      {
        name: 'Munich, Germany',
        description: 'Embrace the Bavarian culture, enjoy Oktoberfest festivities, and explore historic landmarks in Munich.',
      },
      {
        name: 'Kyoto, Japan',
        description: 'Experience the tranquility of traditional tea houses, visit ancient temples, and wander through the historic streets of Kyoto.',
      },
      {
        name: 'Auckland, New Zealand',
        description: 'Discover the stunning landscapes, vibrant Maori culture, and outdoor adventures in the "City of Sails."',
      },
      {
        name: 'Lisbon, Portugal',
        description: 'Explore the historic neighborhoods, enjoy Fado music, and savor delicious pastries in the charming city of Lisbon.',
      },
      {
        name: 'Bangalore, India',
        description: 'Dive into the vibrant tech hub of India, where tradition meets modernity and flavors abound in the street food scene.',
      },
      {
        name: 'Stockholm, Sweden',
        description: 'Experience the Scandinavian charm, explore the archipelago, and visit the historic Vasa Museum in Stockholm.',
      },
      {
        name: 'Copenhagen, Denmark',
        description: 'Cycle through the bike-friendly streets, visit the Little Mermaid statue, and enjoy Danish pastries in Copenhagen.',
      },
      {
        name: 'Hanoi, Vietnam',
        description: 'Immerse yourself in the chaotic yet charming streets, savor traditional pho, and explore the rich history of Hanoi.',
      },
      {
        name: 'Jerusalem, Israel',
        description: 'Step into the historic city where ancient history and religious significance converge, with landmarks like the Western Wall and the Dome of the Rock.',
      },
      {
        name: 'Dublin, Ireland',
        description: 'Experience the lively atmosphere of Irish pubs, explore historic castles, and enjoy traditional music in Dublin.',
      },
      {
        name: 'Bangalore, India',
        description: 'Dive into the vibrant tech hub of India, where tradition meets modernity and flavors abound in the street food scene.',
      },
      {
        name: 'Zurich, Switzerland',
        description: 'Discover the picturesque landscapes, enjoy Swiss chocolate, and explore the vibrant cultural scene in Zurich.',
      },
      {
        name: 'Mexico City, Mexico',
        description: 'Explore the bustling capital with its rich history, vibrant street markets, and impressive Aztec ruins.',
      },
      {
        name: 'Oslo, Norway',
        description: 'Experience the scenic beauty of Oslo, surrounded by fjords, museums, and the stunning Viking Ship Museum.',
      },
      {
        name: 'Delhi, India',
        description: 'Explore the vibrant chaos of Old Delhi, visit historic monuments like the Red Fort, and savor diverse Indian cuisine.',
      },
      {
        name: 'Dubrovnik, Croatia',
        description: 'Wander through the ancient city walls, explore historic sites, and enjoy the stunning views of the Adriatic Sea in Dubrov',
      },
        {
          "name": "Bora Bora, French Polynesia",
          "description": "Immerse yourself in the turquoise lagoons surrounded by overwater bungalows, where the Mount Otemanu's peak creates a stunning backdrop."
        },
        {
          "name": "Santorini, Greece",
          "description": "Explore the charming white-washed buildings perched on cliffs, overlooking the deep blue waters of the Aegean Sea."
        },
        {
          "name": "Maui, Hawaii, USA",
          "description": "Experience the diverse landscapes, from volcanic craters and lush rainforests to golden beaches and the iconic Road to Hana."
        },
        {
          "name": "Maldives",
          "description": "Discover a tropical paradise with overwater bungalows, vibrant coral reefs, and a myriad of marine life in the Indian Ocean."
        },
        {
          "name": "Iceland",
          "description": "Explore the otherworldly landscapes of glaciers, volcanoes, and waterfalls on this North Atlantic island."
        },
        {
          "name": "Svalbard, Norway",
          "description": "Venture into the Arctic wilderness, surrounded by glaciers and polar bears, on this remote archipelago."
        },
        {
          "name": "Galápagos Islands, Ecuador",
          "description": "Delve into the unique biodiversity that inspired Charles Darwin's theory of evolution, with diverse wildlife and volcanic landscapes."
        },
        {
          "name": "Phuket, Thailand",
          "description": "Experience the vibrant culture, lively nightlife, and beautiful beaches on Thailand's largest island."
        },
        {
          "name": "Easter Island, Chile",
          "description": "Uncover the mysteries of the giant moai statues scattered across this remote Polynesian island."
        },
        {
          "name": "Ibiza, Spain",
          "description": "Immerse yourself in the electrifying nightlife, beautiful beaches, and bohemian vibes of this Mediterranean island."
        }
      ]
      

const PlaceCard = ({ name, description }) => (
    
  <div className="max-w-md mx-auto bg-white shadow-lg rounded-md overflow-hidden mb-8 p-6 md:p-0 transform transition-transform hover:scale-105">
    <img
      className="w-full h-40 object-cover"
      src={`https://source.unsplash.com/400x200/?${name}`}  // Example: using Unsplash for images
      alt={name}
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const PlacesList = () => (
    <div>
        <Nav />
        <h1 className="text-3xl font-bold mb-4 text-center p-5 text-teal-900 font-Lato">Places Around the World</h1>
 <div className="flex flex-wrap justify-center">
     
    {placesData.map((place, index) => (
      <PlaceCard key={index} {...place} />
    ))}
  </div>
  <div className='text-center justify-center p-5 '>

  <a href="https://en.wikipedia.org/wiki/Lists_of_tourist_attractions" className='text-center text-xl font-Lato  justify-center text-teal-800'> Explore More</a>
  </div>
    </div>
 
);

export default PlacesList;

