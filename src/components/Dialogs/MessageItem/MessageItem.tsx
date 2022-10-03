import React from 'react';
import {MessageProps} from '../../../App';
import styles from '../Dialogs.module.css';

export const Message: React.FC<MessageProps> = (props) => {
    return (
        <div className={styles.message}> {props.message}</div>
    );
};