import _ from "lodash";
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {UserContext} from "./contexts/userContext";

export function excerpt(string) {
  const truncate = _.truncate;
  return truncate(string, {
    length: 200, // maximum 200 characters
    separator: /,?\.* +/ // separate by spaces, including preceding commas and periods
  });
}

export const PrivateRoute = props => {
  const context = useContext(UserContext);
  const { component: Component, ...rest } = props;
  return context.user ? (
    <Route {...rest} render={props => <Component {...props} />} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: props.location }
      }}
    />
  );
};