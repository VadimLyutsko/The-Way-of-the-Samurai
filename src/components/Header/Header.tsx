import React from 'react';
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {AuthData} from '../../redux/Types';

type HeaderType = {
    setAuthData: (data: AuthData) => void
    isAuth: boolean
    login: string | null
}

export const Header: React.FC<HeaderType> = ({isAuth, login}) => {


    return (
        <header className={style.header}><img
            src="https://static.wixstatic.com/media/a98964_afbd628840d940e682d66f6ba062351a.png/v1/fill/w_1680,h_263,al_c,lg_1,q_90,enc_auto/a98964_afbd628840d940e682d66f6ba062351a.png"
            alt=""/>
            <span
                style={{position: 'absolute', marginTop: '10px', marginLeft: '15px', fontWeight: 'bold'}}>
                <NavLink to={'/login'}>{login}{isAuth ? login : 'Log in'}</NavLink>
            </span>
        </header>
    );
};