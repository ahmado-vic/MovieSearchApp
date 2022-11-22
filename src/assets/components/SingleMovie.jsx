import React from 'react';

function SingleMovie({ singleMovie }) {
  const url = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${singleMovie?.poster_path}`;

  return (
    <section>
      <h3 className="title font-bold mb-4 text-pink-900">
        {singleMovie.title}
      </h3>
      <img
        src={url}
        alt={singleMovie.title}
        className="title inline-block w-60"
      />
      <p className="release-date mt-4 font-bold text-xs text-pink-900">
        Release date: {singleMovie.release_date}
      </p>
      <span className="movie-rate text-xs font-bold text-pink-900">
        Rate: {singleMovie.vote_average}/10 from {singleMovie.vote_count} votes
      </span>
      <p className="overview mt-5 text-sm leading-6 font-semibold">
        {singleMovie.overview}
      </p>
    </section>
  );
}

export default SingleMovie;
