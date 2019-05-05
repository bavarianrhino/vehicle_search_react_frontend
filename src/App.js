import React, { Component } from "react";
import SignUp from "./Login_SignupPages/SignUp";
import Login from "./Login_SignupPages/Login";
import LandingSearchPage from './LandingSearchPage/Containers/LandingSearchPage';
import Favorites from './FavoritesPage/Containers/Favorites';

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";


class App extends Component {

    componentDidMount () {
        this.getLocation()
    }

    getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.logPosition)
        } else {
          console.log("Geolocation is not supported by this browser.")
        }
    }

    logPosition = (position) => {
        const location = {
			lat: position.coords.latitude,
			long: position.coords.longitude
		};
        console.log("Users Location:", `Longitude - ${location.long}`)
        console.log('               ', `Latitude - ${location.lat}`);
        this.props.setPosition(location)
    }

    render() {
        window.localStorage.clear()
        return (
            <div id='app-container'>
                <Router>
                    <Switch>
                        <Route exact path='/' render={(props) => localStorage.getItem('token') ? <LandingSearchPage {...props} /> : <Redirect to='/login' /> } />
                        <Route exact path='/favorites' render={(props) => localStorage.getItem('token') ? <Favorites {...props} /> : <Redirect to='/login' /> } />
                        <Route exact path='/login' render={(props) => !localStorage.getItem('token') ? <Login {...props} /> : <Redirect to='/' /> }/>
                        <Route exact path='/signup' render={(props) => !localStorage.getItem('token') ? <SignUp {...props} /> : <Redirect to='/' /> }/>
                    </Switch>
                </Router>
            </div>
        );
    }
}


export default App;
