import React from 'react';
import styles from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogPropsType = {
    id: string
    name: string
    imgAddress: string
}

export const DialogItem: React.FC<DialogPropsType> = (props) => {
    return (
        <div className={styles.dialog}>
            <NavLink to={`/dialogs/${props.id}`}><img src={props.imgAddress} alt=""/> {props.name}</NavLink>
        </div>
    );
};