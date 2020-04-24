export const getMovies = () => {
  console.log(process.env.REACT_APP_KEY);
  console.log(process.env.REACT_APP_BACKEND_HOST+process.env.REACT_APP_BACKEND_PORT);
  console.log(process.env.REACT_APP_BACKEND_PORT);

    return fetch(
      `${process.env.REACT_APP_BACKEND_HOST+process.env.REACT_APP_BACKEND_PORT}/movies/`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
  };
  
  export const getGenres = () => {
    return fetch(
      `${process.env.REACT_APP_BACKEND_HOST+process.env.REACT_APP_BACKEND_PORT}/movies/genre/`
    )
      .then(res => res.json())
      .then(json => json.genres);
  };

  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };