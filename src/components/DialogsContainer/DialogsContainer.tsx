import React from 'react';

import {Dialogs} from './Dialogs/Dialogs';
import {addNewDialogsMessageActionCreator, updateDialogsMessageActionCreator} from '../../redux/dialogs-Reducer';
import {ActionType} from '../../index';
import {DialogPropsType, MessageProps} from '../../App';
import {Message} from './Dialogs/MessageItem/MessageItem';
import {DialogItem} from './Dialogs/DialogsItem/DialogsItem';


type DialogsContainerType = {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessageProps>
    newDialogMessageText: string
    dispatch: (action: ActionType) => void
}


export const DialogsContainer: React.FC<DialogsContainerType> = ({
                                                                     dialogsData,
                                                                     messagesData,
                                                                     newDialogMessageText,
                                                                     dispatch
                                                                 }) => {

    const dialogsElements = dialogsData.map(item => <DialogItem id={item.id} name={item.name}
                                                                imgAddress={item.imgAddress}/>);

    const messageElements = messagesData.map(item => <Message message={item.message}/>);

    const addMessage = (newMessageText: string) => {
        newMessageText ? dispatch(addNewDialogsMessageActionCreator(newMessageText)) : alert('Введи хоть что-нибудь, умник...');
    };

    const onChangeMessageValue = (changeNewMessageText: string) => {
        changeNewMessageText && dispatch(updateDialogsMessageActionCreator(changeNewMessageText));
    };

    return (
        <Dialogs messageElements={messageElements} newDialogMessageText={newDialogMessageText}
                 dialogsElements={dialogsElements} addMessage={addMessage} onChangeMessageValue={onChangeMessageValue}/>
    );
};




