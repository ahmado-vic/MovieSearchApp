import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../MoviesContext';

function WatchListMovie({ movie }) {
  const url = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie?.poster_path}`;
  const { watchList, setWatchList, setWatched } = useContext(MovieContext);
  const [hovered, setHovered] = useState(false);

  const sendToWatched = id => {
    const selectedMovie = watchList.find(item => item.id === id);
    setWatched(prev => [
      ...prev,
      { ...selectedMovie, watched: true, watchList: true },
    ]);
    setWatchList(prev => prev.filter(movie => movie.id !== id));
  };

  return (
    <div>
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered ? (
          <i
            className="ri-eye-line cursor-pointer absolute inline-block z-10 right-0 bg-red-900 text-white p-1"
            onClick={() => sendToWatched(movie.id)}
          ></i>
        ) : (
          ''
        )}
        <img src={url} alt={movie.title} />
      </div>
      <Link to={`/watchlist/${movie.id}`}>
        <small className="text-xs font-bold text-pink-900">Read more</small>
      </Link>
    </div>
  );
}

export default WatchListMovie;
