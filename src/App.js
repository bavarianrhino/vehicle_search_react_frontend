import React, { Component } from "react";
import SignUp from "./Login_SignupPages/SignUp";
import Login from "./Login_SignupPages/Login";
import LandingSearchPage from './LandingSearchPage/Containers/LandingSearchPage';
import Favorites from './FavoritesPage/Containers/Favorites';

import { connect } from 'react-redux';
import { setPosition } from './Actions/UserActions';

// import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
// https://bavarianrhino.github.io/vehicle_search_react_frontend/

class App extends Component {

    componentDidMount () {
        this.warmUpHeroku()
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

    warmUpHeroku = () => {
        const Http = new XMLHttpRequest();
        const apiurl = 'https://autopasture.herokuapp.com/users'

        Http.onreadystatechange = (e) => {
            if(this.readyState === 4 && this.status === 200){
                console.log(Http.responseText)
            } else {
                console.log("Warming up Heroku Backend")
            }
        }

        Http.open("GET", apiurl)
        Http.send();
    }

    render() {
        window.localStorage.clear()
        return (
			<div id='app-container'>
				<Router>
                    <Switch>
                        <Route exact path='/' render={(props) => (localStorage.getItem('token') ? <LandingSearchPage {...props} /> : <Redirect to='/login' />)} />
                        <Route exact path='/favorites' render={(props) => (localStorage.getItem('token') ? <Favorites {...props} /> : <Redirect to='/login' />)} />
                        <Route exact path='/login' render={(props) => (!localStorage.getItem('token') ? <Login {...props} /> : <Redirect to='/' />)} />
                        <Route exact path='/signup' render={(props) => (!localStorage.getItem('token') ? <SignUp {...props} /> : <Redirect to='/' />)} />
                    </Switch>
				</Router>
			</div>
		);
    }
}

export default connect(null, {setPosition})(App);
