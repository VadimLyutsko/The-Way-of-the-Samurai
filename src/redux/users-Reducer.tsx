import React from 'react';
import {
    ActionType,
    FollowUserAT,
    InitialUsersReducerType, SetCurrentPageAT,
    SetTotalUserCountAT,
    SetUserAT,
    UnFollowUserAT,
    UserType
} from './Types';

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USER = 'SET-USER';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';
const SET_USER_CURRENT_PAGE = 'SET-USER-CURRENT-PAGE';

// let initialState = {
//     UsersData: [
//         {
//             id: '1',
//             name: 'Vadim',
//             location: {country: 'Belarus', city: 'Kopyl'},
//             follow: true,
//             userPhoto: 'https://yt3.ggpht.com/ytc/AKedOLRAVID-MTG8mna_7U1E4o2_3GANNg6fVfKKGp5r=s900-c-k-c0x00ffffff-no-rj'
//         },
//         {
//             id: '2',
//             name: 'Vadim',
//             location: {country: 'Belarus', city: 'Kopyl'},
//             follow: true,
//             userPhoto: 'https://yt3.ggpht.com/ytc/AKedOLRAVID-MTG8mna_7U1E4o2_3GANNg6fVfKKGp5r=s900-c-k-c0x00ffffff-no-rj'
//         },
//         {
//             id: '3',
//             name: 'Vadim',
//             location: {country: 'Belarus', city: 'Kopyl'},
//             follow: true,
//             userPhoto: 'https://yt3.ggpht.com/ytc/AKedOLRAVID-MTG8mna_7U1E4o2_3GANNg6fVfKKGp5r=s900-c-k-c0x00ffffff-no-rj'
//         }
//     ]
// };
let initialState = {
    UsersData: [],
    totalUsersCount: 10,
    pageSize: 10,
    currentPage: 1
};

const UsersReducer = (state: InitialUsersReducerType = initialState, action: ActionType): InitialUsersReducerType => {
    switch (action.type) {
        case FOLLOW_USER: {
            return {
                ...state,
                UsersData: state.UsersData.map(user => user.id === action.userId ? {...user, follow: true} : user)
            };
        }
        case UNFOLLOW_USER: {
            return {
                ...state,
                UsersData: state.UsersData.map(user => user.id === action.userId ? {...user, follow: false} : user)
            };
        }
        case SET_USER: {
            return {
                ...state,
                UsersData: [ ...action.users]
            };
        }
        case SET_TOTAL_USER_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        }
        case SET_USER_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }
        default:
            return state;
    }
};


export const followUserAC = (userId: number): FollowUserAT => {
    return {
        type: FOLLOW_USER,
        userId
    };
};

export const unFollowUserAC = (userId: number): UnFollowUserAT => {
    return {
        type: UNFOLLOW_USER,
        userId
    };
};

export const setUserAC = (users: UserType[]): SetUserAT => {
    return {
        type: SET_USER,
        users
    };
};

export const setCurrentPageAC=(currentPage:number):SetCurrentPageAT=>{
    return{
        type:SET_USER_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUserCountAC = (totalUsersCount:number): SetTotalUserCountAT => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalUsersCount
    };
};




export default UsersReducer;