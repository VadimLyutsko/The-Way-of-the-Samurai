import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostPropsType} from '../../App';
import {ActionType} from '../../index';
import {MyPostsContainer} from './MyPostContainer/MyPostContainer';

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
            <MyPostsContainer newPostText={newPostText} postsData={postsData} dispatch={dispatch}/>
        </div>
    );
};