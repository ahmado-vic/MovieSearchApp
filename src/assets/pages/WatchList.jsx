import React, { useContext, useEffect } from 'react';
import WatchListMovie from '../components/WatchListMovie';
import { MovieContext } from '../MoviesContext';

function WatchList() {
  const { watchList } = useContext(MovieContext);

  const watchListElements = watchList?.map(movie => (
    <WatchListMovie movie={movie} key={movie.id} />
  ));

  return (
    <section
      className={`container mx-auto px-3  sm:grid-cols-3 ${
        watchList.length > 0 ? 'grid-cols-4 grid gap-4 ' : ''
      }`}
    >
      {watchList.length > 0 ? (
        watchListElements
      ) : (
        <h1 className="font-bold text-pink-900 text-2xl text-center">
          There's no movies yet !!
        </h1>
      )}
    </section>
  );
}

export default WatchList;
