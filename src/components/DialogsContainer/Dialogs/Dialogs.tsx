import React from 'react';
import styles from './Dialogs.module.css';
import SuperButton from '../../SuperComponents/SuperButton/SuperButton';


type DialogsPropsType = {
    dialogsElements: JSX.Element[]
    messageElements: JSX.Element[]
    addMessage: (newMessageText: string) => void
    onChangeMessageValue: (changeNewMessageText: string) => void
    newDialogMessageText: string
}


export const Dialogs: React.FC<DialogsPropsType> = ({
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
                        type={'Evil'}
                        title={'Add'}
                        callBack={onClickButtonHandler}/>
                </div>
            </div>

        </div>
    );
};




