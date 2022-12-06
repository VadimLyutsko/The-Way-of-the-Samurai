import React from 'react';
import sound from './sound.mp3';
import SuperButton from '../SuperComponents/SuperButton/SuperButton';

export const Music: React.FC = () => {

    function play() {
        alert('Отвали ❌');
        new Audio(sound).play();
    }

    let musicStyle = {
        justifyContent: 'center',
        marginTop: '50px',
        display: 'flex'
    };

    return (
        <div style={musicStyle}>
            <SuperButton type={'Evil'} title={'Touch me!'} callBack={play}></SuperButton>&#128529;
        </div>
    );
};