import fetch from 'node-fetch';


export const getMovies = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&page=1`);
  return await res.json();
};

export const getMovie = async id => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&page=1`);
  return await res.json();
};

export const getGenres = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&page=1`);
  return await res.json();
};

export const getLatestMovies = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`);
  return await res.json();
};

export const getMovieReviews = async id => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&page=1`);
  return await res.json();
};

export const getMovieCredits = async id => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&page=1`);
  return await res.json();
};
