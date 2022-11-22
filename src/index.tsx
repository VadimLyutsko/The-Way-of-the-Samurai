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
    updateNewPostText: (mewPostText: string) => void
    addNewPost: (mewPostMessage: string) => void
    deleteLastPost: () => void
    _renderEntireThree: (state: StateDataPropsType) => void
}


export let renderEntireThree = (store: StoreType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addNewPost={store.addNewPost.bind(store)}
                deleteLastPost={store.deleteLastPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
};


store.subscribe(() => renderEntireThree(store));

renderEntireThree(store);