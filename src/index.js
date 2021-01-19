import React from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './index.css';
import App from './App';
import Firebase from "./DAL/Firebase";
import FirebaseContext from './Context/FirebaseContext';
import {BrowserRouter} from "react-router-dom";
import rootReducer from './Redux/reducers'
import {applyMiddleware, createStore} from 'redux';
import {logger} from "redux-logger/src";
import {Provider} from "react-redux";

// const store = new createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = new createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
		<Provider store={store}>
		<FirebaseContext.Provider value={new Firebase()}>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</FirebaseContext.Provider>
		</Provider>,
		document.getElementById('root')
);

