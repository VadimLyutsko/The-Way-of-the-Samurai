import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

import {MyPostsContainer} from './MyPostContainer/MyPostContainer';
import {ActionType, PostType} from '../../redux/Types';


type ProfilePropsType = {
    postsData: PostType[]
    dispatch: (action: ActionType) => void
    newPostText: string

}


export const Profile: React.FC<ProfilePropsType> = (
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