import React, {PureComponent} from "react";
import Card from "./Card/Card";
import style from './Card/Card.module.css';
import {Input} from 'antd';
import getTranslateWord from "../../DAL/translateWord";
import FirebaseContext from "../../Context/FirebaseContext";
import {Spin} from 'antd';


const {Search} = Input;

class CardList extends PureComponent {
	state = {
		inputValue: '',
		label: '',
		isLoading: false,
		inputWord: '',
		wordTranslate: ''
	}

	onInputChange = (e) => {
		this.setState({
			inputValue: e.target.value
		});
	}

	getTheWord = async () => {
		const getWord = await getTranslateWord(this.state.inputValue);
		this.setState(({inputValue}) => {
			return {
				label: `${inputValue} - ${getWord.translate}`,
				inputValue: '',
				isLoading: false,
				inputWord: inputValue,
				wordTranslate: getWord.translate
			}
		})
	}

	onSubmitForm = async () => {
		this.setState({
			isLoading: true
		}, this.getTheWord)
	}

	onAddNewWord = () => {
		const {inputWord, wordTranslate} = this.state;
		this.props.setNewWord(inputWord, wordTranslate);
		this.setState({
			inputWord: '',
			wordTranslate: '',
			label: ''
		})

	}

	render() {
		const {wordsList, onDeletedItem} = this.props;
		const {inputValue, label, isLoading, wordTranslate} = this.state;

		return (
				<>
					<div className={style.form}>
						<h3>Найти в словаре:</h3>

						<div className={style.searchWrap}>
							<Search
									placeholder="Введите слово"
									allowClear
									enterButton="Перевести слово"
									size="large"
									loading={isLoading}
									value={inputValue}
									onSearch={this.onSubmitForm}
									onChange={this.onInputChange}
							/>
						</div>

						{label !== '' &&
						<div className={style.labelWrap}>
							<div className={wordTranslate === undefined
									? style.labelErr
									: style.label}> {label} </div>
							<button disabled={wordTranslate === undefined}
											onClick={this.onAddNewWord}> Добавить слово
							</button>
						</div>}
					</div>

					<div className={style.cover}>
						{wordsList.length === 0
								? <div>
									<Spin size="large"/>
						</div>
								: wordsList.map((el, index) => (
								<Card key={el.id} eng={el.eng} rus={el.rus} index={index}
											onDeleted={() => {
												onDeletedItem(el.id)
											}}/>
						))}
					</div>
				</>
		)
	}
}

CardList.contextType = FirebaseContext;

export default CardList;