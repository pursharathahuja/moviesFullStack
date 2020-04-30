import React from "react";
import { Link } from "react-router-dom";

const removeFavButton = ({ movie }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/reviews/form`,
        state: {
          movie: movie
        }
      }}
    >
      Remove from favourites
    </Link>
  );
};

export default removeFavButton;