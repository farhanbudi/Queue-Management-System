import React from 'react'
import { Redirect, Route } from 'react-router';

export const DashboardRoute = ({children, ...rest}) => {
  return(
    <Route {...rest} render={()=>{
      return localStorage.getItem('user') ? children : <Redirect to='/' />
    }} / >
  ); 
};



