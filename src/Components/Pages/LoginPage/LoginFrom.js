import React from "react";
import {Form, Input, Button} from 'antd';
import style from "./LoginPage.module.css";


const LoginForm = (props) => {

const layout = {
	labelCol: {span: 6}, // def: 8
	wrapperCol: {span: 18}, // def: 16
};
const tailLayout = {
	wrapperCol: {offset: 6, span: 18}, // def: 8, 16
};

const onFinish = ({email, password}) => {
	const { history } = props;
	props.logInUser (email, password)
			.then(res => {
				console.log("###: user: ", res);
				history.push("/")
			})
};

const onFinishFailed = (errorInfo) => {
	console.log('Failed:', errorInfo);
};


	return (
			<div className={style.formWrap}>
				<Form
						{...layout}
						name="login"
						initialValues={{remember: true}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}>
					<Form.Item
							label="Username"
							name="email"
							rules={[{required: true,
								message: 'Please input your email!'}]}>
						<Input/>
					</Form.Item>

					<Form.Item
							label="Password"
							name="password"
							rules={[{required: true,
								message: 'Please input your password!'}]}>
						<Input.Password/>
					</Form.Item>


					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>

	)
}

export default LoginForm;