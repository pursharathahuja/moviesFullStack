import React, { useState } from "react";
import {loginUser, signUp} from '../api/tmdb-api';

export const AuthContext = React.createContext(null)

const AuthContextProvider = props => {
  const existingToken = localStorage.getItem("token");
  const existingUser = localStorage.getItem("user");
  const [authToken, setAuthToken] = useState(existingToken);
  const [user, setAuthUser] = useState(existingUser);
  const setToken = (data) => {
    localStorage.setItem('token', data);
    setAuthToken(data);
  }

  const setUser = (user) => {
    localStorage.setItem('user', user);
    setAuthUser(user);
  }

  const authenticate = (user, cb) => {
    loginUser(user).then(result => {
      if (!result.success) {
        cb && cb(false, result.msg || "User could not be authenticated!")
      } else {
        setToken(result.token)
        setUser(user.username);
        cb && cb(true, "User athenticated successfully")
      }
    });
  } 

  const register = (newUser, cb) => {
    if (newUser.password !== newUser.confirmPassword) {
      return cb(false, "Please make sure the passwords match!");
    }
    signUp(newUser).then(result => {
      if (result.code && result.code === 201) {
        authenticate(newUser, success => {
          if (success) cb && cb (success, "New user created and authenticated");
          else cb && cb (false, result.msg || "New user created but could not be authenticated");
        });
      } else {
        cb && cb(false, result.msg || "New user could not be created");
      }
    });
  }

  const signOut = cb => {
      setToken(undefined);
      setUser(undefined);
      localStorage.clear();
  }

  return (
    <AuthContext.Provider
      value={{
        user: user,
        authToken: authToken,
        authenticate: authenticate,
        register: register,
        signOut: signOut
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider