import React from 'react';
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';

type HeaderType = {
    login: string | null
    isAuth: boolean
}

export const Header: React.FC<HeaderType> = ({isAuth, login}) => {

    return (
        <header className={style.header}>
            <img
                src="https://static.wixstatic.com/media/a98964_afbd628840d940e682d66f6ba062351a.png/v1/fill/w_1680,h_263,al_c,lg_1,q_90,enc_auto/a98964_afbd628840d940e682d66f6ba062351a.png"
                alt=""
            />
            <span className={style.logIn}>
                <NavLink to={'/profile/21989'}>{isAuth ? login?.slice(0, 12) : 'Log in'}</NavLink>
            </span>
        </header>
    );
};