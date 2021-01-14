import React, {PureComponent} from "react";
import HeaderBlock from "../../HeaderBlock/HeaderBlock";
import CardList from "../../CardList/CardList";
import Footer from "../../Footer/Footer";
import FirebaseContext from "../../../Context/FirebaseContext";


class HomePage extends PureComponent {
	state = {
		wordArr: []
	}

	componentDidMount() {
		const { getUserCards } = this.context;
		getUserCards().on('value', res => {
			this.setState({
				wordArr: res.val() || []
			});
		});
	}

	setNewWord = (rus, eng) => {
		const { getUserCards } = this.context;
		const { wordArr } = this.state;
		getUserCards().set([...wordArr, {
			eng: rus,
			id: +new Date(),
			rus: eng
		}]);
	}

	onDeletedItem = (id) => {
		const { getUserCards } = this.context;
		const { wordArr } = this.state;
		const newWordArr = wordArr.filter(el => el.id !== id)
		getUserCards().set(newWordArr);
	}

	render() {
		const {wordArr} = this.state
		return (
				<>
					<header className="headerWrap">
						<HeaderBlock/>
						<CardList wordsList={wordArr}
											onDeletedItem={this.onDeletedItem}
											setNewWord={this.setNewWord}/>
					</header>
					<Footer/>
				</>
		)
	}
}

HomePage.contextType = FirebaseContext;
export default HomePage;