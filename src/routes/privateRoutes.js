import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticatedFn = () =>{
  const isValidUser = localStorage.getItem("isValidUser");
  return isValidUser;
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticatedFn() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

