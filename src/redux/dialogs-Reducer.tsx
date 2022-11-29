import React from 'react';
import {ActionType, AddNewDialogMessageAT, InitialDialogsReducerType, UpdateDialogsMessageAT} from './Types';


const ADD_NEW_DIALOG_MESSAGE = 'ADD-NEW-DIALOG-MESSAGE';
const UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE';

let initialState = {
    dialogsData: [
        {
            id: '1',
            name: 'Vadim',
            imgAddress: 'https://library.kissclipart.com/20191017/rtw/kissclipart-suit-white-collar-worker-official-formal-wear-busi-066d43efeda2e974.png'
        },
        {
            id: '2',
            name: 'Ivan',
            imgAddress: 'https://library.kissclipart.com/20191017/rtw/kissclipart-suit-white-collar-worker-official-formal-wear-busi-066d43efeda2e974.png'
        },
        {
            id: '3',
            name: 'Vadim',
            imgAddress: 'https://library.kissclipart.com/20191017/rtw/kissclipart-suit-white-collar-worker-official-formal-wear-busi-066d43efeda2e974.png'
        },
        {
            id: '4',
            name: 'Andrey',
            imgAddress: 'https://library.kissclipart.com/20191017/rtw/kissclipart-suit-white-collar-worker-official-formal-wear-busi-066d43efeda2e974.png'
        },
        {
            id: '5',
            name: 'Valera',
            imgAddress: 'https://library.kissclipart.com/20191017/rtw/kissclipart-suit-white-collar-worker-official-formal-wear-busi-066d43efeda2e974.png'
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
            return {
                ...state,
                messagesData: [...state.messagesData, newDialogMessage],
                newDialogMessageText: ''  // Зануляем введенный текст
            };
        }
        case UPDATE_DIALOG_MESSAGE : {
            return {
                ...state,
                dialogsData: [...state.dialogsData],
                newDialogMessageText: action.mewMessageText   // Изменяем введенный текст
            };
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