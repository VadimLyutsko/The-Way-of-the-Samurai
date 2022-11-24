import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {
    addNewPostActionCreator,
    deletePostActionCreator,
    updatePostTextActionCreator
} from '../../../redux/profile-Reducer';
import {Post} from './MyPosts/Post/Post';
import {v1} from 'uuid';
import {ActionType, PostType} from '../../../redux/Types';

type MyPostsContainerType = {
    postsData: PostType[]
    dispatch: (action: ActionType) => void
    newPostText: string
}

export const MyPostsContainer: React.FC<MyPostsContainerType> = ({
                                                                     postsData,
                                                                     newPostText, dispatch
                                                                 }) => {

    const postsElements = postsData.map(item => <Post key={v1()} id={item.id} message={item.message}
                                                      likeCount={item.likeCount}
                                                      imgAddress={item.imgAddress}/>);

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
        <MyPosts addPost={addPost} deletePost={deletePost} onPostChange={onPostChange} postsElements={postsElements}
                 newPostText={newPostText}/>
    );
};