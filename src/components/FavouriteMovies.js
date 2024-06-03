import React, { Fragment } from "react";
import FavouriteMovieCard from "./FavouriteMovieCard"; // Adjust the import based on your project structure

const FavouriteMovies = ({ movies, setMovies }) => {
  const handleRemove = (updatedFavourites) => {
    // setMovies(updatedFavourites);
  };

  return (
    <Fragment>
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <FavouriteMovieCard
            key={movie.imdbID}
            movie={movie}
            onRemove={handleRemove}
          />
        ))
      ) : (
        <div className="empty">
          <h2>No movies found.</h2>
        </div>
      )}
    </Fragment>
  );
};

export default FavouriteMovies;
