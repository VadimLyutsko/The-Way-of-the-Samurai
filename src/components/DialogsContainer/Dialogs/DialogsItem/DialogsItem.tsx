import React from 'react';
import styles from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {DialogPropsType} from '../../../../App';

export const DialogItem: React.FC<DialogPropsType> = (props) => {
    return (
            <div className={styles.dialog}>

                <NavLink to={`/dialogs/${props.id}`}><img src={props.imgAddress} alt=""/> {props.name}</NavLink></div>
    );
};