import React, { useCallback, useContext, useEffect, useState } from 'react';
import Movie from '../components/Movie';
import { MovieContext } from '../MoviesContext';
import { debounce } from '../utils/utils';

function Add() {
  const [query, setQuery] = useState('');
  const { fetchMoviesData, movies, setMovies, watched, watchList } =
    useContext(MovieContext);

  const updateQuery = e => setQuery(e.target.value);
  const debouncedQuery = useCallback(debounce(updateQuery, 500), []);

  useEffect(() => {
    try {
      if (query) {
        fetchMoviesData(query);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  const moviesList = movies?.results
    ?.filter(elm => elm.poster_path)
    .map(movie => <Movie movie={movie} key={movie.id} />);

  return (
    <section className="container mx-auto flex flex-col px-3">
      <input
        type="text"
        placeholder="i.e Vikings"
        className="px-5 py-2 bg-pink-900 rounded-xl border-1 text-white font-bold mb-12"
        onChange={debouncedQuery}
        query={query}
      />
      {moviesList}
    </section>
  );
}

export default Add;
