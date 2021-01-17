import React from "react";
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './index.css';
import App from './App';
import Firebase from "./DAL/Firebase";
import FirebaseContext from './Context/FirebaseContext';
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
		<FirebaseContext.Provider value={new Firebase()}>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</FirebaseContext.Provider>,
		document.getElementById('root')
);

