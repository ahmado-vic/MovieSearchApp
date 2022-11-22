import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../MoviesContext';

function WatchedMovie({ movie }) {
  const url = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie?.poster_path}`;
  const { watched, setWatched } = useContext(MovieContext);
  const [hovered, setHovered] = useState(false);

  const remove = id => {
    const selectedMovie = watched.find(item => item.id === id);
    const currentMovies = watched.filter(item => item.id !== selectedMovie.id);
    setWatched(currentMovies);
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
            className="ri-close-line cursor-pointer absolute inline-block z-10 right-0 bg-red-900 text-white p-1"
            onClick={() => remove(movie.id)}
          ></i>
        ) : (
          ''
        )}
        <img src={url} alt={movie.title} />
      </div>
      <Link to={`/watched/${movie.id}`}>
        <small className="text-xs font-bold text-pink-900">Read more</small>
      </Link>
    </div>
  );
}

export default WatchedMovie;
