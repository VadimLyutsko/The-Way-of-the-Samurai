import React from 'react';
import style from './Post.module.css';

type PestProps = {
    imgAddress: string
    likeCount: number
    message: string
    id: string

}

export const Post: React.FC<PestProps> = ({message, likeCount, imgAddress}) => {

    return (
        <div className={style.item}>
            <img
                src={imgAddress}
                alt=""/>
            <div className={style.message}>{message}</div>
            <div><span> Likes: {likeCount}</span></div>
        </div>
    );
};