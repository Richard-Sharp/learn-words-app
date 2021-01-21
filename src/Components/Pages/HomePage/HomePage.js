import React, {PureComponent} from "react";
import HeaderBlock from "../../HeaderBlock/HeaderBlock";
import CardList from "../../CardList/CardList";
import FirebaseContext from "../../../Context/FirebaseContext";
import { fetchCardListTC } from "../../../Redux/actions/cardListAction";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';



class HomePage extends PureComponent {
	// state = {
	// 	wordArr: []
	// };

	componentDidMount() {
		const { getUserCards } = this.context;
		const { fetchCardList } = this.props;

		fetchCardList(getUserCards);
		// // getUserCards().on('value', res => {
		// getUserCards().once('value').then(res => {
		// 	fetchCardListResolve(res.val());
		// 	// this.setState({
		// 	// 	wordArr: res.val()
		// 	// });
		// }).catch(err => {
		// 	fetchCardRejectList(err);
		// });
	}

	setNewWord = (rus, eng) => {
		const { getUserCards } = this.context;
		const { wordArr } = this.props;
		getUserCards().set([...wordArr, {
			eng: rus,
			id: +new Date(),
			rus: eng
		}]);
		this.props.fetchCardList(getUserCards);
	};

	onDeletedItem = (id) => {
		const { getUserCards } = this.context;
		const { wordArr } = this.props;
		const newWordArr = wordArr.filter(el => el.id !== id);
		getUserCards().set(newWordArr);
		this.props.fetchCardList(getUserCards);
	};

	render() {
		const { wordArr, isBusy } = this.props;
		return (
				<>
					<header className="headerWrap">
						<HeaderBlock/>
						<CardList wordsList={wordArr}
											onDeletedItem={this.onDeletedItem}
											setNewWord={this.setNewWord}
											isBusy={isBusy}
						/>
					</header>
				</>
		)
	}
}

HomePage.contextType = FirebaseContext;

const mapState = (state) =>	{
	return {
		isBusy: state.cardList.isBusy,
		wordArr: state.cardList.payload
	};
};

const mapDispatch = (dispatch) => {
	return bindActionCreators({
		fetchCardList: fetchCardListTC,
	}, dispatch)
};
export default connect(mapState, mapDispatch)(HomePage);