import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {Dialogs} from './components/Dialogs/Dialogs';


type StatePropsType = {                  //for All state
    state: StateDataPropsType
}

type StateDataPropsType = {
    profilePage: DialogsDataType
    messagePage: MessagesDataType
}

type  DialogsDataType = {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessageProps>
}

type MessagesDataType = {
    postsData: Array<PostPropsType>
}

export type DialogPropsType = {
    id: string
    name: string
    imgAddress: string
}

export type MessageProps = {
    message: string
}

export type PostPropsType = {
    id: number
    message: string
    likeCount: number
    imgAddress: string
}


const App: React.FC<StatePropsType> = ({state}) => {

    const {
        messagePage: {
            postsData: [...postsData
            ]
        },
        profilePage: {
            dialogsData: [...dialogsData],
            messagesData: [...messagesData]
        }
    } = state;


    return (


        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile postsData={postsData}/>}/>
                <Route path="/dialogs" render={() => <Dialogs messagesData={messagesData}
                                                              dialogsData={dialogsData}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
};

export default App;

