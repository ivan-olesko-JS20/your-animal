import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function HomeRoute({ children, ...rest }) {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  return <Route {...rest}>
    {
      isAuthenticated
        ? children
        : <Redirect to="/login" />
    }
  </Route>
}

export default HomeRoute;
