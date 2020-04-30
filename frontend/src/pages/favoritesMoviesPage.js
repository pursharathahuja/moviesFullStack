import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext';

const FavoriteMoviesPage = props => {

  const context = useContext(MoviesContext);

  return (
    <PageTemplate
      movies={context.favMovies}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie}/>}
    />
  );
};

export default FavoriteMoviesPage;