import React, { useState, useEffect, useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
//import {getUpcomingMovies} from "../api/tmdb-api";
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from "../components/buttons/addToWatchList";

const UpcomingMoviesPage = props => {
  const context = useContext(MoviesContext);
    const upcomingMovies = context.movies.filter((m) => {
        return !("watchList" in m);
    });



  return (
      <PageTemplate
        title='Upcoming Movies'
        movies={upcomingMovies}
        action={(movie) => {
            return <AddToWatchListButton movie={movie} />;
          }}
      />
  );
}; 
export default UpcomingMoviesPage;