import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import Button from '@mui/material/Button';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {useAppDispatch, useAppSelector} from './redux/redux-store';
import {initializeAppTC, logOutTC} from './redux/auth-Reducer';
import {AppBar, CircularProgress, IconButton, Toolbar} from '@mui/material';
import Typography from '@mui/material/Typography';
import logo from './components/Header/logo.png';
import {Login} from './components/Login/Login';
import {Error404} from './components/Error/Error404';
import {ProfileContainer} from './components/Profile/ProfileContainer';


const App: React.FC = () => {
    const isInitialized = useAppSelector<boolean>((state) => state.auth.isInitialized)
    const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()

    const logOutHandler = () => {
        dispatch(logOutTC())
    }

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }

    return (<>
            {
                isLoggedIn ?
                    <div className="app-wrapper">
                        <AppBar sx={{boxShadow: 0}} color="myColor" position="absolute">
                            <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{mr: 5}}
                                >
                                    {isLoggedIn &&
                                        <img style={{width: '40px', borderRadius: '25px'}} src={logo} alt=""/>}
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                    My network
                                </Typography>
                                {isLoggedIn && <Button style={{backgroundColor: '#455a64'}} onClick={logOutHandler}
                                                       color="myColor">Log out</Button>}
                            </Toolbar>
                        </AppBar>

                        <Navbar/>
                        <div className="app-wrapper-content">
                            <Routes>
                                <Route path={'/'} element={<DialogsContainer/>}/>
                                <Route path={'login'} element={<Login/>}/>
                                <Route path={'/profile'} element={<ProfileContainer/>}/>
                                <Route path={'/dialogs'} element={<DialogsContainer/>}/>
                                <Route path={'/news'} element={<News/>}/>
                                <Route path={'/music'} element={<Music/>}/>
                                <Route path={'/settings'} element={<Settings/>}/>
                                <Route path={'/users'} element={<UsersContainer/>}/>
                                <Route path={'/404'} element={<Error404/>}/>
                                <Route path="*" element={<Navigate to={'404'}/>}/>

                                {/*<Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>*/}
                                {/*<Route path="/dialogs" render={() => <DialogsContainer/>}/>*/}
                                {/*<Route path="/news" render={() => <News/>}/>*/}
                                {/*<Route path="/music" render={() => <Music/>}/>*/}
                                {/*<Route path="/settings" render={() => <Settings/>}/>*/}
                                {/*<Route path="/users" render={() => <UsersContainer/>}/>*/}

                            </Routes>
                        </div>
                    </div>
                    :
                    <Login/>
            }
        </>
    );
};

export default App;

