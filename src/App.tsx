import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {ActionType} from './index';
import {AppStateType} from './redux/redux-store';
import {DialogsContainer} from './components/DialogsContainer/DialogsContainer';


export type StatePropsType = {                  //for All state
    state: AppStateType
    dispatch: (action: ActionType) => void
}

export type StateDataPropsType = {
    profilePage: DialogsDataType
    messagePage: MessagesDataType
}

export type  DialogsDataType = {
    dialogsData: Array<DialogPropsType>
    messagesData: Array<MessageProps>
    newDialogMessageText: string
}

export type MessagesDataType = {
    postsData: Array<PostPropsType>
    newPostText: string
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
    id: string
    message: string
    likeCount: number
    imgAddress: string
}


const App: React.FC<StatePropsType> = ({state, dispatch}) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile"
                       render={() => <Profile newPostText={state.profilePage.newPostText}
                                              postsData={state.profilePage.postsData} dispatch={dispatch}/>}/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer messagesData={state.dialogsPage.messagesData} newDialogMessageText={state.dialogsPage.newDialogMessageText}
                                              dialogsData={state.dialogsPage.dialogsData}
                                              dispatch={dispatch}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
};

export default App;

