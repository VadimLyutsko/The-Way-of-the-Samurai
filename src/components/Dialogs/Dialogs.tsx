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
    const dialogsElements = dialogsData.map(item => <DialogItem id={item.id} name={item.name}
                                                                imgAddress={item.imgAddress}/>);
    const messageElements = messagesData.map(item => <Message message={item.message}/>);

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    const onClickButtonHandler = () => {
        newMessageElement.current?.value ? alert(newMessageElement.current?.value) : alert('Введи хоть что-нибудь, умник...');
    };

    return (
        <div className={styles.dialogs}>

            <div className={styles.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={styles.messagesItem}>
                {messageElements}
                <div className={styles.inpNewMessage}>
                    <textarea
                        ref={newMessageElement}
                        // onChange={onChangeTextAreaValue}
                    >
                </textarea>
                    <button onClick={onClickButtonHandler}>+</button>
                </div>
            </div>

        </div>
    );
};




