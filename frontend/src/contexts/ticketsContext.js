import React, { useState, useEffect} from "react";
import { getLatestMovies } from "../api/tmdb-api";

export const TicketsContext = React.createContext(null)

const TicketsContextProvider = props => {
  const [movies, setMovies] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getLatestMovies().then(movies => {
    setMovies(movies);
    });
  }, [authenticated]);

  return (
    <TicketsContext.Provider
      value={{
        movies: movies,
        setAuthenticated: setAuthenticated
      }}
    >
      {props.children}
    </TicketsContext.Provider>
  );
};

export default TicketsContextProvider