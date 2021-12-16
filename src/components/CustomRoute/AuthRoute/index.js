import React from 'react'
import { Redirect, Route } from 'react-router';

export const AuthRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return localStorage.getItem("user_id") ? <Redirect to="/beranda" /> : children;
      }}
    />
  );
};

