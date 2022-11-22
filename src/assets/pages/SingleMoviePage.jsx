import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import SingleMovie from '../components/SingleMovie';
import { MovieContext } from '../MoviesContext';

function SingleMoviePage() {
  const { watchList, watched } = useContext(MovieContext);
  const { id } = useParams();
  let singleMovieElement;

  if (location.pathname === `/watched/${id}`) {
    singleMovieElement = watched.find(movie => movie.id === +id);
  }

  if (location.pathname === `/watchlist/${id}`) {
    singleMovieElement = watchList.find(movie => movie.id === +id);
  }

  return (
    <div className="container mx-auto px-3">
      <SingleMovie singleMovie={singleMovieElement} />
    </div>
  );
}

export default SingleMoviePage;
