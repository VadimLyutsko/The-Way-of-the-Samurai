import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostPropsType} from '../../App';

export type PostDataType = {
    postsData: Array<PostPropsType>
}

export const Profile: React.FC<PostDataType> = (
    {
        postsData,
    }) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    );
};