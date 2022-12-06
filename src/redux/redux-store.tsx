import {combineReducers, createStore} from 'redux';
import ProfileReducer from './profile-Reducer';
import DialogsReducer from './dialogs-Reducer';
import UsersReducer from './users-Reducer';
import AuthReducer from './auth-Reducer';


export type StateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    userPage: UsersReducer,
    auth: AuthReducer
});

let store = createStore(reducers);

export default store;