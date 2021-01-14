import React from 'react';
import s from './Section.module.css';

const Section = ({ children }) => {
    return (
        <section className={s.root}>
            <div className={s.wrap}>
                { children }
            </div>
        </section>
    );
};

export default Section;
//
