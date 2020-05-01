import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";
import "./siteHeader.css";
import {AuthContext} from '../../contexts/authContext';

const SiteHeader = () => {
  const context = useContext(AuthContext);

  const logOut = () => {
    context.signOut();
    return <Redirect to="/"/>
  };

  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Movies
        </Link>
      </nav>

      <Link className="headerlinks text-white" to="/movies">
        <FontAwesomeIcon
          className="headerIcons navbar-text text-light"
          icon={["fas", "video"]}
          size="3x"
        />
        <p>Top Movies</p>
      </Link>


      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>

      <Link className="headerlinks text-white" to="/tickets">
        <FontAwesomeIcon
          className="headerIcons navbar-text text-light"
          icon={["fas", "film"]}
          size="3x"
        />
        <p>Book Tickets</p>
      </Link>

      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          {context.user && <li className="">
            <Link className="nav-item nav-link text-white cursor-pointer" to="/profile">
              My profile
            </Link>
          </li>}
          {context.user && <li className="nav-item nav-link text-white cursor-pointer" onClick={() => logOut()}>
              Logout
          </li>}
      </ul>
    </nav>
  </nav>
);
};

export default SiteHeader;