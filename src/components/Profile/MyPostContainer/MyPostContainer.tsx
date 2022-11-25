import React, {Dispatch} from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {Post} from './MyPosts/Post/Post';
import {v1} from 'uuid';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/redux-store';
import {ActionType} from '../../../redux/Types';
import {
    addNewPostActionCreator,
    deletePostActionCreator,
    updatePostTextActionCreator
} from '../../../redux/profile-Reducer';


const mapStateToProps = (state: StateType) => {
    return {
        postsElements: state.profilePage.postsData.map(item => <Post imgAddress={item.imgAddress}
                                                                     likeCount={item.likeCount}
                                                                     message={item.message}
                                                                     id={item.id}
                                                                     key={v1()}
        />),
        newPostText: state.profilePage.newPostText
    };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        addPost: (text: string) => {
            text ? dispatch(addNewPostActionCreator(text)) : alert('Введите хоть что-нибудь...');
        },
        onPostChange: (newPostElement: string) => {
            newPostElement && dispatch(updatePostTextActionCreator(newPostElement));
        },
        deletePost: () => dispatch(deletePostActionCreator())
    };
};


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);