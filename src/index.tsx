import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import store, {StateType} from './redux/redux-store';
import App from './App';
import {Provider} from 'react-redux';


export let renderEntireThree = (state: StateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
};


renderEntireThree(store.getState());

store.subscribe(() => {
    renderEntireThree(store.getState());
});

