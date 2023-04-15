import React from 'react';
import s from './Error404.module.css';
import error404 from './404.svg';

export const Error404 = () => {
    return (
        < >
            {/*<Header/>*/}
            <div className={s.wrapper}>
                <img src={error404} alt={'404'} className={s.error404}/>
            </div>
        </>
    )
}

