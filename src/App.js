import './App.css';
import React, {PureComponent} from 'react';
import HomePage from './Components/Pages/HomePage/HomePage';
import LoginPage from './Components/Pages/LoginPage/LoginPage';
import {Spin} from 'antd';
import FirebaseContext from "./Context/FirebaseContext";
import {BrowserRouter, Route} from "react-router-dom";


class App extends PureComponent {
	state = {
		user: null
	}

	componentDidMount() {
		const {auth, setUserId} = this.context;
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUserId(user.uid);
				this.setState({user});
			} else {
				setUserId(null);
				this.setState({user: false});
			}
		})
	}

	render() {
		const {user} = this.state;
		if (user === null) {
			return (
					<div className="spinner">
						<Spin size="large"/>
					</div>
			);
		}

		return (
				<BrowserRouter>
					<Route path="/" exact component={HomePage}/>
					<Route path="/login" component={LoginPage}/>
					<Route path="/settings" render={() => <h1>Settings...</h1>}/>


					{/*<div className="App">*/}
					{/*{user ? <HomePage user={user}/> : <LoginPage/>}*/}
					{/*</div>*/}
				</BrowserRouter>
		)
	}
}

App.contextType = FirebaseContext;
export default App;
