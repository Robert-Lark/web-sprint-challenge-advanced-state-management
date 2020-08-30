import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import Reducer from './Redux/Reducer'
import "./index.css";
import App from "./components/App";

const store = createStore(Reducer, applyMiddleware(thunk, logger));


ReactDOM.render(
<Provider store = {store}>
<App />, 
</Provider>,
document.getElementById("root"));
