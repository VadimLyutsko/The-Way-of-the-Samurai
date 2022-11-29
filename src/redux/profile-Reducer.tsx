import React from 'react';
import {v1} from 'uuid';
import {ActionType, AddNewPostAT, DeletePostTextAT, InitialProfileReducerType, UpdateNewPostTextAT} from './Types';

const ADD_NEW_POST = 'ADD-NEW-POST';
const DELETE_LAST_POST = 'DELETE-LAST-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {
            id: '1',
            message: 'Hello, my friends',
            likeCount: 1,
            imgAddress: 'https://r3.mt.ru/r4/photo8EBF/20750698803-0/jpeg/bp.jpeg'
        },
        {
            id: '2',
            message: 'My brother',
            likeCount: 17,
            imgAddress: 'https://yt3.ggpht.com/a/AATXAJyxyzVyRlYVGXRHd157SIfb7B5eK0oIjJHAKRohsw=s900-c-k-c0xffffffff-no-rj-mo'
        },
        {
            id: '3',
            message: 'My Valeria',
            likeCount: 175,
            imgAddress: 'https://yt3.ggpht.com/a/AGF-l78SDKUTFWu93u84ILpJMBiA0safKfEX2blQVQ=s900-c-k-c0xffffffff-no-rj-mo'
        }
    ],
    newPostText: '',
};

const ProfileReducer = (state: InitialProfileReducerType = initialState, action: ActionType): InitialProfileReducerType => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let newPost = {
                id: v1(),
                message: action.mewPostMessage,
                likeCount: 0,
                imgAddress: 'https://termosfera.su/wp-content/uploads/2022/04/2816616767_vubrbej.jpg'
            };
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.mewPostText
            };
        }
        case DELETE_LAST_POST: {
            return {
                ...state,
                ...state.postsData.pop()
            };
        }
        default:
            return state;
    }
};

export const addNewPost = (mewPostMessage: string): AddNewPostAT => {
    return {
        type: ADD_NEW_POST,
        mewPostMessage
    };
};


export const deletePost = (): DeletePostTextAT => {
    return {
        type: DELETE_LAST_POST,
    };
};

export const updatePostText = (mewPostText: string): UpdateNewPostTextAT => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        mewPostText
    };
};

export default ProfileReducer;