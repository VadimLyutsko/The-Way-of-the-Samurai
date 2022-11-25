import React from 'react';
import {ActionType, FollowUserAT, InitialUsersReducerType, SetUserAT, UnFollowUserAT, UserType} from './Types';

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USER = 'SET-USER';

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
let   initialState= {UsersData:[]}

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
        case SET_USER:{
            return {
                ...state,
                UsersData:[...state.UsersData, ...action.users]
            }
        }
        default:
            return state;
    }
};


export const FollowUserAC = (userId: string): FollowUserAT => {
    return {
        type: FOLLOW_USER,
        userId
    };
};

export const UnFollowUserAC = (userId: string): UnFollowUserAT => {
    return {
        type: UNFOLLOW_USER,
        userId
    };
};

export const SetUserAC = (users: UserType[]): SetUserAT => {
    return {
        type: SET_USER,
        users
    };
};



export default UsersReducer;