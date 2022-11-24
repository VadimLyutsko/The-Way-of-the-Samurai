import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import store, {StateType} from './redux/redux-store';
import {Provider} from './Context';
import App from './App';


export let renderEntireThree = (state: StateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider value={store}>
                <App
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
};


renderEntireThree(store.getState());

store.subscribe(() => {
    renderEntireThree(store.getState());
});

