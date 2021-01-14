import React from 'react';
import s from './Button.module.css';

const Button = ({children}) => {
    return (
        <button className={s.root}>
            { children }
        </button>
    );
};

export default Button;