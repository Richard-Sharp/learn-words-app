import './App.css';
import React, {PureComponent} from 'react';
import HomePage from './Components/Pages/HomePage/HomePage';
import LoginPage from './Components/Pages/LoginPage/LoginPage';
import {Layout, Spin, Menu} from 'antd';
import FirebaseContext from "./Context/FirebaseContext";
import {BrowserRouter, Link, NavLink, Route} from "react-router-dom";

const { Header } = Layout;


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
					<Route path="/login" component={LoginPage}/>
					<Route render={(props) => {
						const {history: {push}} = props;
						return (
								<Layout>
									<Header>
										<Menu theme="dark" mode="horizontal">
											<Menu.Item key="1">
												<Link to="/">Home</Link>
											</Menu.Item>
											<Menu.Item key="2">
												<Link to="/about">About</Link>
											</Menu.Item>
											<Menu.Item key="3" onClick={() => push("/contact")}>Contact
												{/*<NavLink to="/contact">Contact</NavLink>*/}
											</Menu.Item>
										</Menu>
									</Header>
								</Layout>
						)
					}}/>

					<Route path="/" exact component={HomePage}/>
					<Route path="/about" render={() => <h1>About app...</h1>}/>
					<Route path="/contact" render={() => <h1>Contact me...</h1>}/>


					{/*<div className="App">*/}
					{/*{user ? <HomePage user={user}/> : <LoginPage/>}*/}
					{/*</div>*/}
				</BrowserRouter>
		)
	}
}

App.contextType = FirebaseContext;
export default App;
