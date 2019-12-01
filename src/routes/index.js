import React from 'react';
import { routes } from './routes';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from '../config/history';

export const Routes = () => (
    <Router history={history}>
        <Switch>
            {routes.map(route => (
                <Route exact key={route.path} path={route.path} component={route.component} />
            ))}
        </Switch>
    </Router>
);
