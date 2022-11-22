import React, { useContext } from 'react';
import { MovieContext } from '../MoviesContext';

function Movie({ movie }) {
  const url = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie?.poster_path}`;

  const { addWatchList, addWatched, watchList, watched } =
    useContext(MovieContext);

  const watchlistMovie = watchList.find(item => item.id === movie.id);
  const watchedMovie = watched.find(item => item.id === movie.id);

  let disapledWatchListBTN =
    watchlistMovie || watchedMovie?.watchList ? true : false;
  let disapledWatchedtBTN = watchedMovie ? true : false;

  return (
    <section className="movie flex mb-4 ">
      <div className="movie-img w-28">
        <img src={movie.poster_path ? url : ''} alt={movie.title} />
      </div>
      <div className="movie-data ml-4 flex flex-col justify-between">
        <div className="header">
          <h6 className="title">{movie.title}</h6>
          <small className="date block font-bold text-gray-500">
            {movie.release_date?.slice(0, 4)}
          </small>
        </div>

        <div className="content-end text-xs text-white font-bold">
          <button
            className={`watchlist-btn px-4 py-2 rounded-lg mr-4 ${
              disapledWatchListBTN ? 'bg-pink-900 opacity-70' : ' bg-pink-900'
            }`}
            onClick={() => addWatchList(movie.id)}
            disabled={disapledWatchListBTN}
          >
            {disapledWatchListBTN ? (
              'Watchlisted'
            ) : (
              <>
                <i className="ri-add-line"></i> Watchlist
              </>
            )}
          </button>

          <button
            className={`watchlist-btn px-4 py-2 rounded-lg ${
              disapledWatchedtBTN ? 'bg-pink-900 opacity-70' : ' bg-pink-900'
            }`}
            onClick={() => addWatched(movie.id)}
            disabled={disapledWatchedtBTN}
          >
            {disapledWatchedtBTN ? (
              'Watched'
            ) : (
              <>
                <i className="ri-add-line"></i> Watched
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Movie;
