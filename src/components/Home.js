import React, { useEffect, useState } from "react";
import { API_URL } from "../config";
import SearchBar from "./SearchBar";
import "../css/App.css";
import Movies from "./Movies";
import FavMovie from "./FavMovie";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const { isAuthenticated, logout } = useAuth({ loginURL: "/gigs", logoutURL: "/login" });
  const navigate = useNavigate();

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

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();
      navigate("/gigs");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="app">
      <div className="login-btn-container">
          <button className="btn" onClick={handleAuthAction}>
            {isAuthenticated ? "Logout" : "Login"}
          </button>
        </div>
      <div className="header">
        <h1 className="brand">MovieLand</h1>
        
      </div>

      <SearchBar
        onSearchChange={setSearchTitle}
        onSearch={searchMovies}
        value={searchTitle}
      />
      <div className="row">
        <Movies movies={movies} />
      </div>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <h1>Favourites</h1>
      </div>
      <div className="row">
        {isAuthenticated ? <FavMovie /> : <p>Please log in to view your favourites.</p>}
      </div>
    </div>
  );
};

export default Home;