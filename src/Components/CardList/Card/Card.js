import React, {Component} from 'react';
import s from './Card.module.css';
import cn from 'classnames'
import {CheckSquareOutlined, DeleteOutlined} from "@ant-design/icons/es/icons/index";


class Card extends Component {
	state = {
		done: false,
		isRemembered: false
	}

	onCardClick = () => {
		this.setState(({done}) => {   //используем в SetState функцию, потому то новое состояние зависит от предыдущего состояния стейта (с деструктуризацией).
			return {
				done: !done
			};
		});
	}

	onIsRememberedClick = () => {
		this.setState((state) => {
			return {
				isRemembered: !state.isRemembered
			};
		});
		//используем в SetState функцию, потому то новое состояние заиситот предыдущего состояния стейта.
	}

	onDeletedClick = () => {
		this.props.onDeleted();
	}

	render() {
		const {eng, rus} = this.props;
		const {done, isRemembered} = this.state;


		return (
				<div className={s.root}>
					<div className={cn(s.card, {
						[s.done]: done,
						[s.isRemembered]: isRemembered
					})}
							 onClick={this.onCardClick}>

						<div className={s.cardInner}>
							<div className={s.cardFront}>
								{eng}
							</div>
							<div className={s.cardBack}>
								{rus}
							</div>
						</div>
					</div>
					<div className={s.icons}>
						<CheckSquareOutlined onClick={this.onIsRememberedClick}/>
					</div>
					<div className={s.icons}>
						<DeleteOutlined onClick={this.onDeletedClick}/>
					</div>

				</div>
		);
	}
}

export default Card;