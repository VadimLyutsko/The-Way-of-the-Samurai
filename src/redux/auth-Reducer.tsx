import React from 'react';
import {ActionType, AuthData, InitialAuthDataType, SetAuthDataAT} from './Types';

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

export default AuthReducer;