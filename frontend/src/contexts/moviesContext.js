import React, { useState, useEffect} from "react";
import { getMovies, addFavorite, getFavourites, removeFavourite } from "../api/tmdb-api";

export const MoviesContext = React.createContext(null)

const MoviesContextProvider = props => {
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  const addToFavorites = movieId => {
    setMovies(movies => {
      const index = movies.map(m => m.id).indexOf(movieId);
      addFavorite(movies[index], localStorage.getItem('user'));
      favMovies.push(movies[index]);
      movies.splice(index, 1);
      return [...movies];
    });
  };

  const removeFavsFromMovies  = movieId => {
    setFavMovies(favMovies => {
      const index = favMovies.map(m => m.id).indexOf(movieId);
      removeFavourite(favMovies[index], localStorage.getItem('user'));
      movies.push(favMovies[index]);
      favMovies.splice(index, 1);
      return [...favMovies];
    });
  };

  useEffect(() => {
    getMovies().then(movies => {
      getFavourites(localStorage.getItem('user')).then(favMovies => {
        setFavMovies(favMovies);
        favMovies.forEach(favMovie => {
          const index = movies.map(m => m.id).indexOf(favMovie.id);
          movies.splice(index, 1);
        });
        setMovies(movies);
      });
    });
  }, [authenticated]);

  return (
    <MoviesContext.Provider
      value={{
        movies: movies,
        favMovies: favMovies,
        setAuthenticated: setAuthenticated,
        addToFavorites: addToFavorites,
        removeFavsFromMovies: removeFavsFromMovies,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider