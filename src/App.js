import React, { Component } from "react";
import SignUp from "./Login_SignupPages/SignUp";
import Login from "./Login_SignupPages/Login";
import LandingSearchPage from './LandingSearchPage/Containers/LandingSearchPage';
import Favorites from './FavortiesPage/Containers/Favorites';

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/login' render={(props) => {return !localStorage.getItem('token') ? <Login {...props} /> : <Redirect to='/' /> }} />
                    <Route exact path='/signup' render={(props) => {return !localStorage.getItem('token') ? <SignUp {...props} /> : <Redirect to='/' /> }} />
                    <Route exact path='/' render={(props) => {return localStorage.getItem('token') ? <LandingSearchPage {...props} /> : <Redirect to='/login' /> }} />
                    <Route exact path='/favorites' render={(props) => {return localStorage.getItem('token') ? <Favorites {...props} /> : <Redirect to='/login' /> }} />
                </Switch>
            </Router>
        );
    }
}

export default App;
