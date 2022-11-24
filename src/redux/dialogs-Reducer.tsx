import React from 'react';
import {ActionType, AddNewDialogMessageAT, InitialDialogsReducerType, UpdateDialogsMessageAT} from './Types';


const ADD_NEW_DIALOG_MESSAGE = 'ADD-NEW-DIALOG-MESSAGE';
const UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE';

let initialState = {
    dialogsData: [
        {
            id: '1',
            name: 'Vadim',
            imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
        },
        {
            id: '2',
            name: 'Ivan',
            imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
        },
        {
            id: '3',
            name: 'Vadim',
            imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
        },
        {
            id: '4',
            name: 'Andrey',
            imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
        },
        {
            id: '5',
            name: 'Valera',
            imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
        },

    ],
    messagesData: [
        {message: 'Hello!!!'},
        {message: 'How are you???'},
        {message: 'Privet'},
        {message: 'Yoo'},
        {message: 'Yoo'}
    ],
    newDialogMessageText: '',
};

const DialogsReducer = (state: InitialDialogsReducerType = initialState, action: ActionType): InitialDialogsReducerType => {

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