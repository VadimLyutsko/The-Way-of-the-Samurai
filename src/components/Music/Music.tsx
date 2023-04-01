import React from 'react';
import sound from './sound.mp3';
import SuperButton from '../SuperComponents/SuperButton/SuperButton';
import {useAppSelector} from '../../redux/redux-store';
import {Navigate} from 'react-router-dom';

export const Music: React.FC = () => {

    const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn)




    function play() {
        alert('Отвали ❌');
        new Audio(sound).play();
    }

    let musicStyle = {
        justifyContent: 'center',
        marginTop: '50px',
        display: 'flex'
    };

    if(!isLoggedIn){
        return <Navigate to={'/login'}/>
    }

    return (
        <div style={musicStyle}>
            <SuperButton type={'Evil'} title={'Touch me!'} callBack={play}></SuperButton>&#128529;
        </div>
    );
};