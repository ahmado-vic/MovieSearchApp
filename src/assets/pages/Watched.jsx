import React, { useContext } from 'react';
import WatchedMovie from '../components/WatchedMovie';
import { MovieContext } from '../MoviesContext';

function Watched() {
  const { watched } = useContext(MovieContext);

  const watchedElements = watched?.map(movie => (
    <WatchedMovie movie={movie} key={movie.id} />
  ));

  return (
    <section
      className={`container mx-auto px-3  sm:grid-cols-3 ${
        watched.length > 0 ? 'grid-cols-4 grid gap-4 ' : ''
      }`}
    >
      {watchedElements.length > 0 ? (
        watchedElements
      ) : (
        <h1 className="font-bold text-pink-900 text-2xl text-center">
          There's no movies yet !!
        </h1>
      )}
    </section>
  );
}

export default Watched;
