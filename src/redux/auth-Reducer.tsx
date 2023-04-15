import React from 'react';
import {ActionType, Result_Code} from './Types';
import {authAPI} from '../api/api';
import {Dispatch} from 'redux';
import {FormDataType} from '../components/Login/Login';


const initialState = {
    isInitialized: false,  //инициальзация (Я ли)
    isLoggedIn: false       // Залогинен ли Я
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        case 'login/SET-IS-INITIALIZED':
            return {...state, isInitialized: action.value}
        default:
            return state
    }
}

// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

export const setIsInitializedAC = (value: boolean) =>
    ({type: 'login/SET-IS-INITIALIZED', value} as const)


export const initializeAppTC = () => async (dispatch: Dispatch) => {

    let res = await authAPI.me()

    if (res.data.resultCode === Result_Code.Ok) {
        dispatch(setIsLoggedInAC(true));
        dispatch(setIsInitializedAC(true))
    } else {
        dispatch(setIsInitializedAC(true))
    }
};

export const logInTC = (data: FormDataType) => async (dispatch: Dispatch<ActionType>) => {
    try {
        const res = await authAPI.login(data)
        if (res.data.resultCode === Result_Code.Ok) {
            dispatch(setIsLoggedInAC(true))
        } else {
            console.log(res.data.messages + 'handleServerAppError')
        }
    } catch (err: any) {  //заглушка, чтобы не фонило
        console.log('err' + err)
    }
}

export const logOutTC = () => (dispatch: Dispatch<ActionType>) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === Result_Code.Ok) {
                dispatch(setIsLoggedInAC(false))
            } else {
                console.log(res.data.messages + 'handleServerAppError')
            }
        })
        .catch((err) => {
            console.log('handleServerNetworkError' + err)
        })
}