import {MessageType} from '../../../../redux/Types';
import styles from '../Dialogs.module.css';
import React from 'react';


export const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    );
};