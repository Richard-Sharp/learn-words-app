import React, {PureComponent} from "react";
import style from "./CounterPage.module.css";
import {Button, Typography} from "antd";
import { bindActionCreators } from 'redux';
import * as actions from '../../../Redux/actions';
import { connect } from 'react-redux';

const {Title} = Typography;


class CounterPage extends PureComponent {

	componentDidMount() {
	}

	render() {
		const { countNumber, plusAction, minusAction } = this.props;

		return (
				<div className={style.root}>
					<Title>
						{countNumber}
					</Title>
						<Button onClick={() => plusAction(1)}>PLUS</Button>
						<Button onClick={() => minusAction(1)}>MINUS</Button>
				</div>
		);
	}
}
const mapState = (state) => {
	return {
		countNumber: state.count
	};
}

const mapDispatch = (dispatch) => {
	return bindActionCreators(actions, dispatch);
}

export default connect(mapState, mapDispatch)(CounterPage);