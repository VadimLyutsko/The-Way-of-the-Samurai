import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from 'redux';
import ProfileReducer from './profile-Reducer';
import DialogsReducer from './dialogs-Reducer';
import UsersReducer from './users-Reducer';
import {authReducer} from './auth-Reducer';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';


export type StateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    userPage: UsersReducer,
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));


// непосредственно создаём store
// let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// создаем тип диспатча который принимает как AC так и TC
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export default store;