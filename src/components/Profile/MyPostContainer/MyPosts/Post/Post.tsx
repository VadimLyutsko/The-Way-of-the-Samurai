import React from 'react';
import style from './Post.module.css';

type PestProps = {
    message: string
    likeCount: number
    id: string
    imgAddress: string
}

export const Post: React.FC<PestProps> = ({message, likeCount, imgAddress}) => {
    return (
        <div className={style.item}>
            <img
                src={imgAddress}
                alt=""/>
            {message}
            <div><span> Likes: {likeCount}</span></div>
        </div>
    );
};