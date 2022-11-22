import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostPropsType} from '../../App';
import {ActionType} from '../../index';

export type PostDataType = {
    postsData: Array<PostPropsType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const Profile: React.FC<PostDataType> = (
    {
        postsData,
        newPostText, dispatch
    }) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostText={newPostText} postsData={postsData} dispatch={dispatch}/>
        </div>
    );
};