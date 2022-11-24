import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {DialogsContainer} from './components/DialogsContainer/DialogsContainer';
import {StateType} from './redux/redux-store';
import {ActionType} from './redux/Types';


type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}


const App: React.FC<AppPropsType> = ({state, dispatch}) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route path="/profile"
                       render={() => <Profile newPostText={state.profilePage.newPostText}
                                              postsData={state.profilePage.postsData} dispatch={dispatch}/>}/>
                <Route path="/dialogs"
                       render={() => <DialogsContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
};

export default App;

