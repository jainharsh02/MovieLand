import React from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import db from "../firebase/config";

const MovieCard = ({ movie }) => {
  const handlefavourites = async () => {
    const docRef = doc(db, "Fav", "harsh");
    
    // Get the current document data
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      // If the document exists, get the current favourites array
      const currentFavourites = docSnap.data().favourite || [];
      
      // Append the new movie to the current favourites
      const updatedFavourites = [...currentFavourites, movie];
      
      // Update the document with the new favourites array
      await setDoc(docRef, { favourite: updatedFavourites }, { merge: true });
    } else {
      // If the document does not exist, create it with the new movie as the first favourite
      await setDoc(docRef, { favourite: [movie] }, { merge: true });
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
