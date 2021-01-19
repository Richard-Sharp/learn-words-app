import './App.css';
import React, {PureComponent} from 'react';
import HomePage from './Components/Pages/HomePage/HomePage';
import LoginPage from './Components/Pages/LoginPage/LoginPage';
import {Layout, Spin, Menu} from 'antd';
import FirebaseContext from "./Context/FirebaseContext";
import {Link, Route, Switch} from "react-router-dom";
import {PrivateRoute} from "./utils/privateRoute";
import CurrentWord from "./Components/Pages/CurrentWord/CurrentWord";
import FooterBlock from "./Components/FooterBlock/FooterBlock";
import CounterPage from "./Components/Pages/CounterPage/CounterPage";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {addUserAction} from "./Redux/actions/userAction";

const {Header, Content} = Layout;


class App extends PureComponent {
	// state = {
	// 	user: null
	// };

	componentDidMount() {
		const {auth, setUserId} = this.context;
		const {addUser} = this.props;
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUserId(user.uid);
				localStorage.setItem('user', JSON.stringify(user.uid));
				addUser(user);
				// this.setState({user});
			} else {
				setUserId(null);
				localStorage.removeItem('user');
				// this.setState({user: false});
			}
		});
	}
	// componentDidUpdate(prevProps) {
	// 	const {addUser, user} = this.props;
	// 	if(prevProps !== this.props) {
	// 	 addUser(user);
	// 	}
	// }


	logOutUser = () => {
		const {loginOut} = this.context;
		loginOut();
	};

	render() {
		// const {user} = this.state;
debugger
		const {userId} = this.props;
		if (userId === null) {
			return (
					<div className="spinner">
						<Spin size="large"/>
					</div>
			);
		}

		return (
				<>
					<Switch>
						<Route path="/login" exact component={LoginPage}/>
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
												<Menu.Item key="4">
													<Link to='/counter'>Counter</Link>
												</Menu.Item>
												<Menu.Item key="5">
													<div className="logout"
															 onClick={this.logOutUser}>LogOut
													</div>
												</Menu.Item>
											</Menu>
										</Header>

										<Content>
											<Switch>
												<PrivateRoute path="/" exact
																			component={HomePage}/>
												<PrivateRoute path="/home/:id?/:isDone?"
																			component={HomePage}/>
												<PrivateRoute path="/word/:id?"
																			component={CurrentWord}/>
												<PrivateRoute path="/counter"
																			component={CounterPage}/>
												<Route path="/about"
															 render={() => <h1>About app...</h1>}/>
												<Route path="/contact"
															 render={() => <h1>Contact me...</h1>}/>
												<Route render={() => "[404]: Page not found..."}/>
											</Switch>
										</Content>
										<FooterBlock/>
									</Layout>
							)
						}}/>
					</Switch>
				</>
		)
	}
}

App.contextType = FirebaseContext;

const mapState = (state) => {
	return {
		userId: state.user.userId,
		userEmail: state.user.email,
	}
};
const mapDispatch = (dispatch) => {
	return bindActionCreators({
		addUser: addUserAction,
	}, dispatch);
};
export default connect(mapState, mapDispatch)(App);
