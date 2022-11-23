import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {StateDataPropsType} from './App';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/State';



export type StoreType = {
    _state: StateDataPropsType
    getState: () => StateDataPropsType
    dispatch: (action: ActionType) => void
    subscribe: (observer: () => void) => void
    _renderEntireThree: (state: StateDataPropsType) => void
}

export type ActionType =
    AddNewPostAT
    | UpdateNewPostTextAT
    | DeletePostTextAT
    | AddNewDialogMessageAT
    | UpdateDialogsMessageAT

export type AddNewPostAT = {
    type: 'ADD-NEW-POST'
    mewPostMessage: string
}

export type AddNewDialogMessageAT = {
    type: 'ADD-NEW-DIALOG-MESSAGE'
    mewMessage: string
}

export type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    mewPostText: string
}

export type UpdateDialogsMessageAT = {
    type: 'UPDATE-DIALOG-MESSAGE'
    mewMessageText: string
}

export type DeletePostTextAT = {
    type: 'DELETE-LAST-POST'
}

export let renderEntireThree = (store: StoreType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

store.subscribe(() => renderEntireThree(store));

renderEntireThree(store);