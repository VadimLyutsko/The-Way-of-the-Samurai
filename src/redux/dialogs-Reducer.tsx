import React from 'react';
import {ActionType, AddNewDialogMessageAT, UpdateDialogsMessageAT} from '../index';
import {DialogsDataType} from '../App';

const ADD_NEW_DIALOG_MESSAGE = 'ADD-NEW-DIALOG-MESSAGE';
const UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE';

const DialogsReducer = (state: DialogsDataType, action: ActionType): DialogsDataType => {

    switch (action.type) {
        case ADD_NEW_DIALOG_MESSAGE: {
            let newDialogMessage = {message: action.mewMessage};
            state.messagesData = [...state.messagesData, newDialogMessage];
            state.newDialogMessageText = '';
            return state;
        }
        case UPDATE_DIALOG_MESSAGE : {
            state.newDialogMessageText = action.mewMessageText;
            return state;
        }
        default:
            return state;
    }
};

export const addNewDialogsMessageActionCreator = (mewMessage: string): AddNewDialogMessageAT => {
    return {
        type: ADD_NEW_DIALOG_MESSAGE,
        mewMessage
    };
};

export const updateDialogsMessageActionCreator = (mewMessageText: string): UpdateDialogsMessageAT => {
    return {
        type: UPDATE_DIALOG_MESSAGE,
        mewMessageText
    };
};


export default DialogsReducer;