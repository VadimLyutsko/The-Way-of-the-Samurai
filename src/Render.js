import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addNewPost, state, updateNewPostText} from './redux/State';


export const renderEntireThree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addNewPost={addNewPost}
                updateNewPostText={updateNewPostText}
                // postsData={postsData}
                //  dialogsData={dialogsData}
                // messagesData={messagesData}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

