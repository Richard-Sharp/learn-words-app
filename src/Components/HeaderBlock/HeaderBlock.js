import React from "react";
import style from "./Header.module.css";


const HeaderBlock = () => {
	return (
			<div className={style.cover}>
				<div className={style.wrap}>
					<h1 className={style.header}>Учите слова онлайн</h1>
					<p className={style.description}>Воспользуйтесь карточками для запоминания и пополнения активныйх словарных запасов</p>
				</div>
			</div>
	)
}

export default HeaderBlock;