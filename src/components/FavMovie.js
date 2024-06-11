import db from "../firebase/config";
import { getAuth } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore"; 
import FavouriteMovies from "./FavouriteMovies";

const FavMovie = () => {
  const [favmovies, setFavMovies] = useState([]);
  const fetchMovies = async () => {
    // const docRef = doc(db, "users", "harsh");
    // const docSnap = await getDoc(docRef);
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userId = user.uid;
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      setFavMovies(data.favourite || []);
    } else {
      console.log("No such document!");
    }
  } else {
    console.log("No user is signed in");
  }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return <FavouriteMovies movies={favmovies} />;
};

export default FavMovie;
