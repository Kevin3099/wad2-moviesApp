import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const TopRatedMovies = () => {
  const context = useContext(MoviesContext);
  const toprated = context.toprated.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="New Movies!"
      movies={toprated}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default TopRatedMovies;