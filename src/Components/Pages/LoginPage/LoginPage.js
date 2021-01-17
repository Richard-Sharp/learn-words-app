import React, {PureComponent} from "react";
import {Layout} from 'antd';
import style from "./LoginPage.module.css";
import FirebaseContext from "../../../Context/FirebaseContext";
import LoginForm from "./LoginFrom";

const {Content} = Layout;


class LoginPage extends PureComponent {
	render() {
		return (
				<>
					<Layout>
						<Content>
							<div className={style.main}>
								<LoginForm logInUser={this.context.logInUser}
													 setUserId={this.context.setUserId}
													 {...this.props}/>
							</div>
						</Content>
					</Layout>
				</>
		)
	}
}

LoginPage.contextType = FirebaseContext;
export default LoginPage;