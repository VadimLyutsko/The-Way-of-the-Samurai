import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostPropsType} from '../../App';

export type PostDataType = {
    postsData: Array<PostPropsType>
    addNewPost:(mewPostMessage:string)=>void
    updateNewPostText:(mewPostText:string)=>void
    newPostText:string
}

export const Profile: React.FC<PostDataType> = (
    {
        postsData,
        addNewPost,
        updateNewPostText,
        newPostText
    }) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostText={newPostText} updateNewPostText={updateNewPostText} addNewPost={addNewPost} postsData={postsData}/>
        </div>
    );
};