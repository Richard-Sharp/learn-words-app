import React, {PureComponent} from "react";
import HeaderBlock from "../../HeaderBlock/HeaderBlock";
import CardList from "../../CardList/CardList";
import FirebaseContext from "../../../Context/FirebaseContext";
import {cardListAction, cardListRejectAction, cardListResolveAction} from "../../../Redux/actions/cardListAction";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';



class HomePage extends PureComponent {
	// state = {
	// 	wordArr: []
	// };

	componentDidMount() {
		const { getUserCards } = this.context;
		const {
			fetchCardList,
			fetchCardListResolve,
			fetchCardRejectList,
		} = this.props;

		fetchCardList();
		// getUserCards().on('value', res => {
		getUserCards().once('value').then(res => {
			fetchCardListResolve(res.val());
			// this.setState({
			// 	wordArr: res.val()
			// });
		}).catch(err => {
			fetchCardRejectList(err);
		});
	}

	setNewWord = (rus, eng) => {
		const { getUserCards } = this.context;
		const { wordArr } = this.props;
		getUserCards().set([...wordArr, {
			eng: rus,
			id: +new Date(),
			rus: eng
		}]);
	};

	onDeletedItem = (id) => {
		const { getUserCards } = this.context;
		const { wordArr } = this.props;
		const newWordArr = wordArr.filter(el => el.id !== id);
		getUserCards().set(newWordArr);
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
		fetchCardList: cardListAction,
		fetchCardListResolve: cardListResolveAction,
		fetchCardRejectList: cardListRejectAction,
	}, dispatch)
};
export default connect(mapState, mapDispatch)(HomePage);