import React from 'react';
import styles from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemProps = {
    name: string
    id: string
}

export const DialogItem: React.FC<DialogItemProps> = (props) => {
    return (
        <div className={styles.dialog}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></div>
    );
};