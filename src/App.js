import './App.css';
import React, {PureComponent} from 'react';
import HomePage from './Components/Pages/HomePage/HomePage';
import LoginPage from './Components/Pages/LoginPage/LoginPage';
import {Spin} from 'antd';
import FirebaseContext from "./Context/FirebaseContext";


class App extends PureComponent {
	state = {
		user: null
	}

	componentDidMount() {
		console.log('###: ', this.context);

		const { auth, setUserId } = this.context;
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
				<>
					<div className="App">
						{user ? <HomePage user={user}/> : <LoginPage/>}
					</div>
				</>
		)
	}
}

App.contextType = FirebaseContext;
export default App;
