import React from 'react';
import styles from './Dialogs.module.css';


export const Dialog: React.FC = () => {
    return (
        <div className={styles.dialogsItem}>
            <div className={styles.dialog}>Vasilisa</div>
            <div className={styles.dialog}>Ivan</div>
            <div className={styles.dialog}>Vadim</div>
            <div className={styles.dialog}>Andrey</div>
            <div className={styles.dialog}>Nastya</div>
        </div>
    );
};

export const Message: React.FC = () => {
    return (
        <div className={styles.messagesItem}>
            <div className={styles.message}> Hello!!</div>
            <div className={styles.message}>How are you???</div>
            <div className={styles.message}>Privett</div>
            <div className={styles.message}>Yoo</div>
            <div className={styles.message}>Yoo!!</div>
        </div>
    );
};

export const Dialogs: React.FC = () => {

    return (
        <div className={styles.dialogs}>
            <Dialog/>
            <Message/>
        </div>
    );
};