import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// import GameLoader from "./containers/GameLoader";
// import CarCreatorContainer from "./containers/CarCreatorContainer";
// import GameContainer from "./containers/GameContainer";
import './App.css';

function App() {
	return (
		<div className='App'>
			<Login />
			<SignUp />
		</div>
	);
}

export default App;

// import React, { Component } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch
// } from "react-router-dom";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import GameLoader from "./containers/GameLoader";
// import CarCreatorContainer from "./containers/CarCreatorContainer";
// import GameContainer from "./containers/GameContainer";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route
//             exact
//             path="/login"
//             render={props => {
//               return !localStorage.getItem("token") ? (
//                 <Login {...props} />
//               ) : (
//                 <Redirect to="/" />
//               );
//             }}
//           />
//           <Route
//             exact
//             path="/signup"
//             render={props => {
//               return !localStorage.getItem("token") ? (
//                 <SignUp {...props} />
//               ) : (
//                 <Redirect to="/" />
//               );
//             }}
//           />
//           <Route
//             exact
//             path="/"
//             render={props => {
//               return localStorage.getItem("token") ? (
//                 <GameLoader {...props} />
//               ) : (
//                 <Redirect to="/login" />
//               );
//             }}
//           />
//           <Route
//             exact
//             path="/create"
//             render={props => {
//               return localStorage.getItem("token") ? (
//                 <CarCreatorContainer {...props} />
//               ) : (
//                 <Redirect to="/login" />
//               );
//             }}
//           />
//           <Route
//             exact
//             path="/game"
//             render={props => {
//               return localStorage.getItem("car") ? (
//                 <GameContainer {...props} />
//               ) : (
//                 <Redirect to="/" />
//               );
//             }}
//           />
//         </Switch>
//       </Router>
//     );
//   }
// }

// export default App;
