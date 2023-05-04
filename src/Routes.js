import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {SigninPage} from './auth';
import {CreateGroupPage,GroupPage,GroupsListPage} from './groups';
import { NavBar } from './navigation';
const routes = [{
    path: '/',
    exact: true,
    Component: GroupsListPage
},{
    path: '/groups/:id',
    Component: GroupPage
},{
    path: '/sign-in',
    Component: SigninPage
},{
    path: '/create-group',
    Component: CreateGroupPage
}];


export const Routes = () => (
    <Router>
        <NavBar />
        <Switch>
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
            >
                <route.Component />
            </Route>
        ))}
        </Switch>
    </Router>
)