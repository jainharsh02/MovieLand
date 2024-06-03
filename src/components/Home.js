import React, { useEffect, useState } from "react";
import { API_URL } from "../config";
import SearchBar from "./SearchBar";
// import MovieListHeading from './components/MovieListHeading';
// import MovieList from './MovieList';
// import RemoveFavourites from './RemoveFavourites';
import AddFavourites from './AddFavourites';
// import Notification from "./components/Notification";

import "../css/App.css";
import Movies from "./Movies";
import FavMovie from "./FavMovie";
const Home = () =>{
    const [movies, setMovies] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
  
    // const [favourites, setFavourites] = useState([]);
  
    useEffect(() => {
      searchMovies(searchTitle);
    }, [searchTitle]);
  
    const searchMovies = async (title) => {
      try {
        const apiEndpoint = `${API_URL}&s=${title.trim()}`;
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setMovies(data.Search);
      } catch (ex) {
        setMovies([]);
        console.log(ex.message);
      }
    };
  
  
  
    // useEffect(() => {
    //       const movieFavourites = JSON.parse(
    //           localStorage.getItem('react-movie-app-favourites')
    //       );
  
    //       if (movieFavourites) {
    //           setFavourites(movieFavourites);
    //       }
    //   }, []);
  
    //   const saveToLocalStorage = (items) => {
    //       localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    //   };
  
    //   const addFavouriteMovie = (movie) => {
    //       const newFavouriteList = [...favourites, movie];
    //       setFavourites(newFavouriteList);
    //     //   saveToLocalStorage(newFavouriteList);
    //   };
  
    //   const removeFavouriteMovie = (movie) => {
    //       const newFavouriteList = favourites.filter(
    //           (favourite) => favourite.imdbID !== movie.imdbID
    //       );
  
    //       setFavourites(newFavouriteList);
    //       saveToLocalStorage(newFavouriteList);
    //   };
  
    return(
        <div className="app">
      <h1 className="brand">MovieLand</h1>
      {/* <Notification text="Made With ❤️ By " linkText="Samer A." /> */}

      <SearchBar
        onSearchChange={setSearchTitle}
        onSearch={searchMovies}
        value={searchTitle}
      />
      <div className="row" >
        <Movies movies={movies} 
        // handleFavouritesClick={addFavouriteMovie}
        favouriteComponent={AddFavourites}
        />
      </div>


			<div className='row d-flex align-items-center mt-4 mb-4'>
            <h1>Favourites</h1>
            </div>
            <div className="row">
				<FavMovie />
			</div>


    </div>
    )
}
export default Home