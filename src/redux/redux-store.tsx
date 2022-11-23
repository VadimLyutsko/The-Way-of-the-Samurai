import {combineReducers, createStore} from 'redux';
import ProfileReducer from './profile-Reducer';
import DialogsReducer from './dialogs-Reducer';

// export type  storeType = typeof store;

export type RootReducerType = typeof reducers;

export type AppStateType = ReturnType<RootReducerType>

let reducers = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer
});

let store = createStore(reducers);

export default store;