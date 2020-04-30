import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import {UserContext} from '../contexts/userContext';
import {MoviesContext} from '../contexts/moviesContext';
import RegisterForm from "../components/registerForm";
import GoogleLogin from 'react-google-login';


const RegisterPage = (props) => {
  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);
  const context = useContext(UserContext);
  const moviesContext = useContext(MoviesContext);

  const register = (data) => {
    console.log(data);
    context.register(data, (status, err) => {
        if (!status && err) {
            setError(err);
        } else {
            setRegistered(status);
            moviesContext.setAuthenticated(status);
        }
    }
    );
  };

  const responseGoogle = (response) => {
    console.log(response);
    register({"username":response.profileObj.email,"password":"null","confirmPassword":"null"});
  }

  const { from } = props.location.state || { from: { pathname: "/" } };
  if (registered) {
    return <Redirect to={from} />;
  }

  return (
    <div className="row">
      <div className="card col-md-6 mx-auto my-5">
        <div className="card-body">
          <RegisterForm action={register}/>
          <p className="text-danger">{error}</p>
        </div>
        <div style={{textAlign:"center",paddingBottom: "13px"}}><div>OR</div>
          <GoogleLogin
              clientId="241314629573-0vrt4oack9eqphtc1q9gt61fl9mtlqiv.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
          >
          <span> Sign up with Google</span>
          </GoogleLogin>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;