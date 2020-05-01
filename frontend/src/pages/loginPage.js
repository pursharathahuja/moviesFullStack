import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import {AuthContext} from '../contexts/authContext';
import {MoviesContext} from '../contexts/moviesContext';
import LoginForm from "../components/loginForm";
import GoogleLogin from 'react-google-login';


const LoginPage = props => {
  const [error, setError] = useState("");
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const context = useContext(AuthContext);
  const moviesContext = useContext(MoviesContext);

  const login = (data) => {
    context.authenticate(data, (status, err) => {
      if (!status && err) {
        setError(err);
      } else {
        setLoggedInStatus(status);
        moviesContext.setAuthenticated(status);
      }
    });
  };

  const responseGoogle = (response) => {
    console.log(response);
    login({"username":response.profileObj.email,"password":"null","confirmPassword":"null"});
  }

  const { from } = { from: { pathname: "/" } };
  if (loggedInStatus) {
    return <Redirect to={from} />;
  }

  return (
    <div className="row">
      <div className="card col-md-6 mx-auto my-5">
        <div className="card-body">
          <LoginForm action={login} redirect={from}/>
          <p className="text-danger">{error}</p>
        </div>
        <div style={{textAlign:"center",paddingBottom: "13px"}}><div>OR</div>
        <div className="customGoogleButton">
          <GoogleLogin
              clientId="241314629573-0vrt4oack9eqphtc1q9gt61fl9mtlqiv.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
          >
          <span> Sign in with Google</span>
          </GoogleLogin>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;