// import { collection, doc, getDoc, getDocs } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
import db from "../firebase/config";

// const FavMovie = () => {
//   const [favourite, setFavourite] = useState([]);
//   useEffect(() => {
//     (async () => {
//       const fav = (await getDoc(doc(db, "Fav", "aditya"))).data().favourite;
//       console.log(fav);
//       setFavourite(fav);
//     })();
//   }, []);
//   return <div>FavMovie</div>;
// };

// export default FavMovie;

// import React, { useState, useEffect } from "react";
// import { doc, getDoc } from "firebase/firestore"; 

// const MovieComponent = () => {
//   const [movies, setMovies] = useState([]);

//   // Fetch movies from Firestore
//   const fetchMovies = async () => {
//     const docRef = doc(db, "Fav", "aditya");
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//       const data = docSnap.data();
//       setMovies(data.favourite || []);
//     } else {
//       console.log("No such document!");
//     }
//   };

//   // Fetch movies when component mounts
//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   return (
//     <div>
//       {movies.map((movie, index) => (
//         <div className="movie" key={index}>
//           <div>
//             <p>{movie.Year}</p>
//           </div>
//           <div>
//             <img
//               src={
//                 movie.Poster !== "N/A"
//                   ? movie.Poster
//                   : "https://via.placeholder.com/400"
//               }
//               alt={movie.Title}
//             />
//           </div>
//           <div>
//             <span>{movie.Type}</span>
//             <h3>{movie.Title}</h3>
//             {/* <button onClick={() => handlefavourites(movie)}>
//               <h4>Add to favourites</h4>
//             </button> */}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieComponent;


import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore"; 
// import { db } from "./firebase"; // Adjust the import based on your project structure
import FavouriteMovies from "./FavouriteMovies"; // Adjust the import based on your project structure

const FavMovie = () => {
  const [favmovies, setFavMovies] = useState([]);

  // Fetch movies from Firestore
  const fetchMovies = async () => {
    const docRef = doc(db, "Fav", "harsh");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      setFavMovies(data.favourite || []);
    } else {
      console.log("No such document!");
    }
  };

  // Fetch movies when component mounts
  useEffect(() => {
    fetchMovies();
  }, []);

  return <FavouriteMovies movies={favmovies} />;
};

export default FavMovie;
