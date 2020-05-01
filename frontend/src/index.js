import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import {PrivateRoute} from './utils';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import FavoriteMoviesPage from "./pages/favoritesMoviesPage";
import MovieDetailsPage from './pages/movieDetailsPage'
import BuyTicketspage from './pages/buyTicketspage'
import TicketsPage from './pages/ticketsPage'
import ProfilePage from './pages/profilePage'
import MovieReviewPage from './pages/movieReviewPage'
import AddMovieReviewPage from './pages/addMovieReviewPage'
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';
import SiteHeader from './components/siteHeader'
import AuthContextProvider from "./contexts/authContext"
import MoviesContextProvider from "./contexts/moviesContext"
import TicketsContextProvider from "./contexts/ticketsContext"
import GenresContextProvider from "./contexts/genresContext"

const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
      <div className="container-fluid">
        <AuthContextProvider>
          <SiteHeader/>
          <MoviesContextProvider>
            <TicketsContextProvider>
            <GenresContextProvider>
              <Switch>
                <Route path='/login' component={ LoginPage } />
                <Route path='/signup' component={ SignUpPage } />
                <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                <PrivateRoute exact path="/tickets" component={TicketsPage} />
                <PrivateRoute path="/movies/:id" component={MovieDetailsPage} />
                <PrivateRoute path="/buyTickets/:id" component={BuyTicketspage} />
                <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
                <PrivateRoute path="/movies" component={HomePage} />
                <PrivateRoute path="/profile" component={ProfilePage} />
                <Redirect from="*" to="/movies" />
              </Switch>
            </GenresContextProvider>
            </TicketsContextProvider>
          </MoviesContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));