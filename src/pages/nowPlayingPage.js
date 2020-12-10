import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const MoviesNowPlaying = () => {
  const context = useContext(MoviesContext);
  const nowplaying = context.nowplaying.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="New Movies!"
      movies={nowplaying}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default MoviesNowPlaying;
