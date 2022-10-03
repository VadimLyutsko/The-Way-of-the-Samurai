import React from 'react';
import styles from './Dialogs.module.css';
import {DialogItem} from './DialogsItem/DialogsItem';
import {Message} from './MessageItem/MessageItem';
import {DialogPropsType, MessageProps} from '../../App';


type DialogsDataType = {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessageProps>
}

export const Dialogs: React.FC<DialogsDataType> = ({dialogsData, messagesData}) => {
    const dialogsElements = dialogsData.map(item => <DialogItem id={item.id} name={item.name}/>);
    const messageElements = messagesData.map(item => <Message message={item.message}/>);
    return (
        <div className={styles.dialogs}>

            <div className={styles.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={styles.messagesItem}>
                {messageElements}
            </div>
        </div>
    );
};




