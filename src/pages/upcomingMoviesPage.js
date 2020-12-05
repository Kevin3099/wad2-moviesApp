import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {getUpcomingMovies} from "../api/tmdb-api";
import AddToWatchListButton from "../components/buttons/addToWatchList";

const UpcomingMoviesPage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getUpcomingMovies().then(movies => {
        setMovies(movies);
        });
    }, []);

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies} 
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMoviesPage;