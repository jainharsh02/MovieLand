import db from "../firebase/config";

import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore"; 
// import { db } from "./firebase"; // Adjust the import based on your project structure
import FavouriteMovies from "./FavouriteMovies"; // Adjust the import based on your project structure

const FavMovie = () => {
  const [favmovies, setFavMovies] = useState([]);

  // Fetch movies from Firestore
  const fetchMovies = async () => {
<<<<<<< HEAD
    const docRef = doc(db, "users", "harsh");
=======
    const docRef = doc(db, "Fav", "harsh");
>>>>>>> ab527f5d117a5eab21d86dec236b04925c92f3dc
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      setFavMovies(data.favourite || []);
    } else {
      console.log("No such document!");
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return <FavouriteMovies movies={favmovies} />;
};

export default FavMovie;
