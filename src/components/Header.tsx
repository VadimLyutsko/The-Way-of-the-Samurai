import React from 'react';
import style from './Header.module.css'


export const Header: React.FC = () => {
    return (
        <header className={style.header}><img
            src="https://avatars.mds.yandex.net/i?id=0ff1366b533e7174e3532a4eae741dc5-5869619-images-thumbs&n=13"
            alt=""/></header>
    )
}