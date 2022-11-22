import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import UseLocalStorage from './CustomHooks/UseLocalStorage';

export const MovieContext = createContext('');

function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = UseLocalStorage(
    'LOCAL_STORAGE_WATCHLIST_MOVIES',
    () => []
  );
  const [watched, setWatched] = UseLocalStorage(
    'LOCAL_STORAGE_WATCHED_MOVIES',
    () => []
  );

  //fetching movies data from API
  const fetchMoviesData = async (query = '') => {
    const response = axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=8755fedcece47d65a95be73a68e94e73&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const movie = await response;

    setMovies(prev => {
      return {
        results: movie.data.results.map(elm => {
          return {
            ...elm,
            watched: false,
            watchList: false,
          };
        }),
      };
    });
  };

  //add watchList
  const addWatchList = id => {
    setWatchList(prev => {
      const movie = movies.results.find(movie => movie.id === +id);
      return [...prev, { ...movie, watchList: !movie.watchList }];
    });
  };

  //add watched
  const addWatched = id => {
    setWatched(prev => {
      const movie = movies.results.find(movie => movie.id === +id);
      return [...prev, { ...movie, watched: !movie.watched }];
    });
  };

  return (
    <>
      <MovieContext.Provider
        value={{
          fetchMoviesData,
          movies,
          setMovies,
          addWatchList,
          addWatched,
          watchList,
          watched,
          setWatchList,
          setWatched,
        }}
      >
        {children}
      </MovieContext.Provider>
    </>
  );
}

export default MoviesContextProvider;
