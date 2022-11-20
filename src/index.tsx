import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {StateDataPropsType} from './App';
import {BrowserRouter} from 'react-router-dom';
import {addNewPost, deleteLastPost, state, subscribe, updateNewPostText} from './redux/State';


export let renderEntireThree = (state:StateDataPropsType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addNewPost={addNewPost}
                deleteLastPost={deleteLastPost}
            updateNewPostText={updateNewPostText}
                // postsData={postsData}
                //  dialogsData={dialogsData}
                // messagesData={messagesData}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
};


subscribe(renderEntireThree)

renderEntireThree(state)