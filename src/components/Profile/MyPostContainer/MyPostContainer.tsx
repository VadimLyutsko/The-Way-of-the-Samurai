import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {
    addNewPostActionCreator,
    deletePostActionCreator,
    updatePostTextActionCreator
} from '../../../redux/profile-Reducer';
import {PostDataType} from '../Profile';


export const MyPostsContainer: React.FC<PostDataType> = ({
                                                             postsData,
                                                             newPostText, dispatch
                                                         }) => {

    const addPost = (text: string) => {
        text ? dispatch(addNewPostActionCreator(text)) : alert('Введите хоть что-нибудь...');
    };

    const deletePost = () => {
        dispatch(deletePostActionCreator());
    };

    const onPostChange = (newPostElement: string) => {
        newPostElement && dispatch(updatePostTextActionCreator(newPostElement));
    };


    return (
        <MyPosts addPost={addPost} deletePost={deletePost} onPostChange={onPostChange} postsData={postsData}
                 newPostText={newPostText}/>
    );
};