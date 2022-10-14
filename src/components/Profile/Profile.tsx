import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostPropsType} from '../../App';

export type PostDataType = {
    postsData: Array<PostPropsType>
    addNewPost:(mewPostMessage:string)=>void
}

export const Profile: React.FC<PostDataType> = (
    {
        postsData,
        addNewPost
    }) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts addNewPost={addNewPost} postsData={postsData}/>
        </div>
    );
};