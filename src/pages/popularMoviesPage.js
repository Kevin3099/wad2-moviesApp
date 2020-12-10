import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from "../components/buttons/addToWatchList";

const popularMoviesPage = () => {
  const context = useContext(MoviesContext);
    const popularMovies = context.popular.filter((m) => {
        return !("watchlist" in m)
    });

  return (
      <PageTemplate
        title='Popular Movies'
        movies={popularMovies}
        action={(movie) => {
            return <AddToWatchListButton movie={movie} />;
          }}
      />
  );
}; 
export default popularMoviesPage;