import React from "react";
import "./movieCard.css";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieCard = ({movie, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/movies/${movie.id}`}>
        <img
          className="card-img-tag center "
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./fallback.png"
          }
        />
        </Link>
        <div className="card-body">
          <div className="titleDiv">
            <h4 className="card-title">{movie.title}</h4>
            <span className="flashtitle">{movie.title}</span>
          </div>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {movie.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {movie.vote_average}</span>
          </p>
        </div>
        <div className="card-footer">
           {action(movie)}
        </div>
      </div>
    </div>
  );
};

export default MovieCard ;
