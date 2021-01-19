import React, {PureComponent} from "react";
import style from "./CounterPage.module.css";
import {Button, Typography} from "antd";
import { bindActionCreators } from 'redux';
import * as actions from '../../../Redux/actions';
import { connect } from 'react-redux';
import {plusAction} from "../../../Redux/actions";
import {minusAction} from "../../../Redux/actions";

const {Title} = Typography;

class CounterPage extends PureComponent {
	componentDidMount() {
	}

	render() {
		const { countNumber, plus, minus } = this.props;

		return (
				<div className={style.root}>
					<Title>
						{countNumber}
					</Title>
						<Button onClick={() => plus(1)}>PLUS</Button>
						<Button onClick={() => minus(1)}>MINUS</Button>
				</div>
		);
	}
}
const mapState = (state) => {
	return {
		countNumber: state.counter.count
	};
};

const mapDispatch = (dispatch) => {
	return bindActionCreators({
		plus: plusAction,
		minus: minusAction
	}, dispatch);
};

export default connect(mapState, mapDispatch)(CounterPage);