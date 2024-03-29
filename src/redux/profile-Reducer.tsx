import React, {Dispatch} from 'react';
import {v1} from 'uuid';
import {
    InitialProfileReducerType,
    UpdateUserProfileDataAT,
    UpdateNewPostTextAT,
    DeletePostTextAT,
    UserProfileType,
    AddNewPostAT,
    ActionType, GetUserProfileStatusAT,
} from './Types';
import {profileAPI} from '../api/api';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_PROFILE = 'UPDATE-NEW-PROFILE';
const DELETE_LAST_POST = 'DELETE-LAST-POST';
const ADD_NEW_POST = 'ADD-NEW-POST';
const SET_STATUS = 'SET-STATUS';


let initialState = {
    profile: null,
    postsData: [
        {
            id: '1',
            message: 'Hello, my friends',
            likeCount: 1,
            imgAddress: 'https://r3.mt.ru/r4/photo8EBF/20750698803-0/jpeg/bp.jpeg'
            // https://yandex.by/images/search?from=tabbar&text=avatar%20img&pos=6&img_url=http%3A%2F%2Fr3.mt.ru%2Fr4%2Fphoto8EBF%2F20750698803-0%2Fjpeg%2Fbp.jpeg&rpt=simage&lr=102200&rlt_url=https%3A%2F%2Fyt3.ggpht.com%2FHI4NXsPYEuFVGoX8AVWgRoZ28Eqb-WA0l-6tFea-w-KGt4ro_FpAbWR5FV-646gyYdnM2prbnA%3Ds900-c-k-c0x00ffffff-no-rj&ogl_url=http%3A%2F%2Fr3.mt.ru%2Fr4%2Fphoto8EBF%2F20750698803-0%2Fjpeg%2Fbp.jpeg
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
    status: '',
};

const ProfileReducer = (state: InitialProfileReducerType = initialState, action: ActionType): InitialProfileReducerType => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let newPost = {
                id: v1(),
                message: action.mewPostMessage,
                likeCount: 0,
                imgAddress: 'https://avatars.mds.yandex.net/i?id=5a44e6ef4e7f150d81516c99712730c41b082b18-7043984-images-thumbs&ref=rim&n=33&w=165&h=165'
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
        case UPDATE_NEW_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
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

export const setUserProfileData = (profile: UserProfileType): UpdateUserProfileDataAT => {
    return {
        type: UPDATE_NEW_PROFILE,
        profile
    };
};

export const setUserStatus = (status: string): GetUserProfileStatusAT => {
    return {
        type: SET_STATUS,
        status
    };
};

export const getDataTC = (userId: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        profileAPI.getData(userId)
            .then(response => {
                dispatch(setUserProfileData(response.data));
            });
    };
};

export const getUserStatus = (userId: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        profileAPI.getUserStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response.data));
            });
    };
};

export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        profileAPI.updateUserStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserStatus(status));
                }
            });
    };
};

export default ProfileReducer;