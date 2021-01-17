import React, {PureComponent} from "react";
import style from "./CurrentWord.module.css";
import Card from "../../CardList/Card/Card";
import {Spin, Typography} from "antd";
import FirebaseContext from "../../../Context/FirebaseContext";

const {Title} = Typography;

class CurrentWord extends PureComponent {
	state = {
		word: {
			_id: 0,
			eng: '',
			rus: ''
		}
	};
	componentDidMount() {
		const { getUserCurrentPage } = this.context;
		const { match: {params}} = this.props;
		if (params.id) {
			getUserCurrentPage(params.id).once('value')
					.then(res => {
						this.setState({
							word: res.val()
						});
					})
		}
	}

render() {
		const { word: {eng, rus} } = this.state;
		if (eng === '' && rus === '') {
			return <div className={style.root}>
				<Spin />
			</div>
		}
		return (
				<div className={style.root}>
					<Title>
						Карточка слова - {eng}
					</Title>
					<Card eng={eng} rus={rus}/>
				</div>
		);
}
}
CurrentWord.contextType = FirebaseContext;
export default CurrentWord;
