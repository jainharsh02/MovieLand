import React from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import db from "../firebase/config"; // Adjust the import based on your project structure

const FavouriteMovieCard = ({ movie, onRemove }) => {
  const handleRemove = async () => {
    const docRef = doc(db, "Fav", "aditya");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const currentFavourites = docSnap.data().favourite || [];
      const updatedFavourites = currentFavourites.filter(
        (favMovie) => favMovie.imdbID !== movie.imdbID
      );

      await setDoc(docRef, { favourite: updatedFavourites }, { merge: true });
      onRemove(updatedFavourites);
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
      <div className="movie-details">
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
        <button onClick={handleRemove}>
          <h4>Remove from favourites</h4>
        </button>
      </div>
    </div>
  );
};

export default FavouriteMovieCard;
