import React, { useEffect, useState } from "react";
import { API_URL } from "../config";
import SearchBar from "./SearchBar";

import "../css/App.css";
import Movies from "./Movies";
import FavMovie from "./FavMovie";
const Home = () =>{
    const [movies, setMovies] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
  
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
  
    return(
        <div className="app">
      <h1 className="brand">MovieLand</h1>

      <SearchBar
        onSearchChange={setSearchTitle}
        onSearch={searchMovies}
        value={searchTitle}
      />
      <div className="row" >
        <Movies movies={movies} 
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