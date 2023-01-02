import {applyMiddleware, combineReducers, createStore} from 'redux';
import ProfileReducer from './profile-Reducer';
import DialogsReducer from './dialogs-Reducer';
import UsersReducer from './users-Reducer';
import AuthReducer from './auth-Reducer';
import thunkMiddleware from 'redux-thunk';



export type StateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    userPage: UsersReducer,
    auth: AuthReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;