import React , { useContext }from "react";
import { Link } from "react-router-dom";
import {MoviesContext} from "../../contexts/moviesContext";



const ReviewButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const removefromfav = e => {
    e.preventDefault();
    context.removeFavsFromMovies(movie.id);
  };
  return (
    <React.Fragment>
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/reviews/form`,
        state: {
          movie: movie
        }
      }}
    >
      Write a Review
    </Link>
    <button
      type="button"
      style={{marginTop: 2 + '%'}}
      className="btn w-100 btn-primary"
      onClick={removefromfav}
    >
      Remove from Favourites
    </button>
    </React.Fragment>
  );
};

export default ReviewButton;