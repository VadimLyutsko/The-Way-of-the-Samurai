import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <nav className={style.nav}>

            <div className={style.item}>
                <NavLink to="/profile/*" activeClassName={style.active}>Profile</NavLink>
            </div>

            <div className={`${style.item} ${style.active}`}>
                <NavLink to="/dialogs/*" activeClassName={style.active}>Dialogs</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/news/*" activeClassName={style.active}>News</NavLink>
            </div>

            <div className={style.item}>
                <NavLink exact strict sensitive to="/music"
                         activeClassName={style.active}>Music</NavLink> {/*exact strict*/}
            </div>

            <div className={style.item}>
                <NavLink exact to="/users" activeClassName={style.active}>Users</NavLink> {/*exact */}
            </div>

            <div className={style.item}>
                <NavLink exact to="/settings" activeClassName={style.active}>Settings</NavLink> {/*exact */}
            </div>

        </nav>
    );
};