import React from 'react'
import { Redirect, Route } from 'react-router';

export const AuthRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return localStorage.getItem("user") ? <Redirect to="/beranda" /> : children;
      }}
    />
  );
};

