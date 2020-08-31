import React, { Component } from "react";
import "./App.css";
import SmurfVillage from "./SmurfVillage";
import ReactDOM from "react-dom";
import Profile  from './Profile'
import { BrowserRouter as Router } from "react-router-dom";
import {Route, Switch } from "react-router-dom";


class App extends Component {
  render() {
    return (
			<div className="App">
        <Router>
				<Switch>
					<Route exact path="/" component={SmurfVillage}>
					</Route>
					<Route path="/profile" component={Profile} />
				</Switch>
        </Router>
			</div>
		);
  }
}

export default App;
