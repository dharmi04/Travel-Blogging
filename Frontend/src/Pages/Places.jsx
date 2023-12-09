// // Places.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Places = () => {
//   const [placesData, setPlacesData] = useState(null);

//   useEffect(() => {
//     const apiUrl = 'http://localhost:8080/https://en.wikipedia.org/w/api.php';

//     const fetchPlacesData = async () => {
//       try {
//         const response = await axios.get(apiUrl, {
//           params: {
//             action: 'query',
//             format: 'json',
//             prop: 'info',
//             inprop: 'url',
//             titles: 'New_York_City', // Example: Replace with the desired place
//           },
//         });

//         // Extract data from the response
//         const pages = response.data.query.pages;
//         const placeData = Object.values(pages)[0];

//         setPlacesData(placeData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchPlacesData();
//   }, []); // Empty dependency array means it runs once on mount

//   return (
//     <div>
//       <h1>Place Information</h1>
//       {placesData && (
//         <div>
//           <h2>{placesData.title}</h2>
//           <p>{placesData.fullurl}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Places;
