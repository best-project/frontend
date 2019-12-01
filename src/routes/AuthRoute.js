import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../services';

const AuthRoute = ({ path, component }) =>
    !authService.currentUserValue() ? (
        <Redirect to="/" />
    ) : (
        <Route exact path={path} component={component} />
    );

export default AuthRoute;
