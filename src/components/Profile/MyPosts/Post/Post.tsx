import React from 'react';
import style from './Post.module.css';

type PestProps = {
    message: string
    likeCount: number
    id: number
    imgAddress:string
}

export const Post: React.FC<PestProps> = ({message,  likeCount,id,imgAddress}) => {
    return (
        <div className={style.item}>
            <img
                src={imgAddress}
                alt=""/>
            {message}
            <div><span>{likeCount}</span></div>
        </div>
    );
};