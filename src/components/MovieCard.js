import React from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import db from "../firebase/config";

const MovieCard = ({ movie }) => {
  const handlefavourites = async () => {
    // const docRef = doc(db, "users", "harsh");
    // const docSnap = await getDoc(docRef);
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userId = user.uid;
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const currentFavourites = docSnap.data().favourite || [];
      
      const updatedFavourites = [...currentFavourites, movie];
      
      await setDoc(docRef, { favourite: updatedFavourites }, { merge: true });
    } else {
      await setDoc(docRef, { favourite: [movie] }, { merge: true });
    }
  } else {
      console.log("No user is signed in");
    }
  };
  
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
        <button onClick={handlefavourites}>
          <h4>Add to favourites</h4>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
