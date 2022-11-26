import React from 'react';
import style from './Header.module.css'


export const Header: React.FC = () => {
    return (
        <header className={style.header}><img
            src="https://trebiti.ru/upload/iblock/516/516f97a737eee7348dddd34e2c976d92.jpg"
            alt=""/></header>
    )
}