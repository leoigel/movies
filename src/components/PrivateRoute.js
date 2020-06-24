import React from 'react';
import { isLogged } from '../utlits/isLogged';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = (props) =>
  isLogged() ? <Route {...props} /> : <Redirect to="/login" />;

export default PrivateRoute;
