import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostPropsType} from '../../App';

export type PostDataType = {
    postsData: Array<PostPropsType>
    addNewPost: (mewPostMessage: string) => void
    deleteLastPost: () => void
    updateNewPostText: (mewPostText: string) => void
    newPostText: string
}

export const Profile: React.FC<PostDataType> = (
    {
        postsData,
        addNewPost,
        deleteLastPost,
        updateNewPostText,
        newPostText
    }) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostText={newPostText} updateNewPostText={updateNewPostText} addNewPost={addNewPost}
                     deleteLastPost={deleteLastPost} postsData={postsData}/>
        </div>
    );
};