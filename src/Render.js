import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addNewPost, state} from './redux/State';


export const renderEntireThree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addNewPost={addNewPost}
                // postsData={postsData}
                //  dialogsData={dialogsData}
                // messagesData={messagesData}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

