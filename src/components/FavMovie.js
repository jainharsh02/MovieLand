import db from "../firebase/config";

import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore"; 
import FavouriteMovies from "./FavouriteMovies";

const FavMovie = () => {
  const [favmovies, setFavMovies] = useState([]);
  const fetchMovies = async () => {
    const docRef = doc(db, "users", "harsh");
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
