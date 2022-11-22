import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {StateDataPropsType} from './App';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/State';


export type StoreType = {
    _state: StateDataPropsType
    getState: () => StateDataPropsType
    subscribe: (observer: () => void) => void
    _updateNewPostText: (mewPostText: string) => void
    _renderEntireThree: (state: StateDataPropsType) => void
    dispatch: (action: ActionType) => void
}

export type ActionType = AddNewPostAT | UpdateNewPostTextAT | DeletePostTextAT

export type AddNewPostAT = {
    type: 'ADD-NEW-POST'
    mewPostMessage: string
}

export type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    mewPostText: string
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
                // addNewPost={store.addNewPost.bind(store)}
                // deleteLastPost={store.deleteLastPost.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
};


store.subscribe(() => renderEntireThree(store));

renderEntireThree(store);