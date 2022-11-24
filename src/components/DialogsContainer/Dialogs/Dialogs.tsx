import React from 'react';
import styles from './Dialogs.module.css';
import SuperButton from '../../SuperComponents/SuperButton/SuperButton';


type DialogsDataType = {
    dialogsElements: JSX.Element[]
    messageElements: JSX.Element[]
    newDialogMessageText: string
    addMessage: (newMessageText: string) => void
    onChangeMessageValue: (changeNewMessageText: string) => void
}

export const Dialogs: React.FC<DialogsDataType> = ({
                                                       dialogsElements,
                                                       messageElements,
                                                       newDialogMessageText,
                                                       addMessage,
                                                       onChangeMessageValue
                                                   }) => {


    const onClickButtonHandler = () => {
        newMessageElement.current?.value ? addMessage(newMessageElement.current?.value) : alert('Введи хоть что-нибудь, умник...');
    };

    const onChangeTextAreaValue = () => {
        newMessageElement.current?.value && onChangeMessageValue(newMessageElement.current?.value);
    };

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

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
                        value={newDialogMessageText}
                        onChange={onChangeTextAreaValue}
                        placeholder={'Enter your message'}
                    />

                    <SuperButton
                        title={'Add'}
                        callBack={onClickButtonHandler}/>
                </div>
            </div>

        </div>
    );
};




