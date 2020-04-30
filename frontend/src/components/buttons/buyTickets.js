import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { Link } from 'react-router-dom';


const BuyTicketsButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  return (
    <Link to={`/buyTickets/${movie.id}`}>
    <button
      type="button"
      className="btn w-100 btn-primary"
    >
      Buy Tickets
    </button>
    </Link>
  );
};

export default BuyTicketsButton;