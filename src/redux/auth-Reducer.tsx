import React, {Dispatch} from 'react';
import {ActionType, AuthData, InitialAuthDataType, SetAuthDataAT} from './Types';
import {authAPI} from '../api/api';

const SET_AUTH_DATA = 'SET-AUTH-DATA';


let initialState = {
    data: {
        UserId: null,
        email: null,
        login: null,
    },
    isAuth: false

};

const AuthReducer = (state: InitialAuthDataType = initialState, action: ActionType): InitialAuthDataType => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        }
        default:
            return state;
    }
};


export const setAuthData = (data: AuthData): SetAuthDataAT => {
    return {
        type: SET_AUTH_DATA,
        data
    };
};

export const me = () => {
    return (dispatch: Dispatch<ActionType>)=>{
        authAPI.getAuthApi().then(data => {
            data.resultCode === 0 &&  dispatch(setAuthData(data));
        });
    }
}

export default AuthReducer;