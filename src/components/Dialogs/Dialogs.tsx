import React from 'react';
import styles from './Dialogs.module.css';
import {DialogItem} from './DialogsItem/DialogsItem';
import {Message} from './MessageItem/MessageItem';
import {DialogPropsType, MessageProps} from '../../App';
import SuperButton from '../SuperComponents/SuperButton/SuperButton';
import {ActionType} from '../../index';
import {addNewDialogsMessageActionCreator, updateDialogsMessageActionCreator} from '../../redux/dialogs-Reducer';


type DialogsDataType = {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessageProps>
    newDialogMessageText: string
    dispatch: (action: ActionType) => void
}

export const Dialogs: React.FC<DialogsDataType> = ({dialogsData, messagesData, newDialogMessageText, dispatch}) => {
    const dialogsElements = dialogsData.map(item => <DialogItem id={item.id} name={item.name}
                                                                imgAddress={item.imgAddress}/>);
    const messageElements = messagesData.map(item => <Message message={item.message}/>);

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    const onClickButtonHandler = () => {
        newMessageElement.current?.value ? dispatch(addNewDialogsMessageActionCreator(newMessageElement.current?.value)) : alert('Введи хоть что-нибудь, умник...');
    };

    const onChangeTextAreaValue = () => {
        newMessageElement.current?.value && dispatch(updateDialogsMessageActionCreator(newMessageElement.current?.value));
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




