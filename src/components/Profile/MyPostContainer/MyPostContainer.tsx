import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {Post} from './MyPosts/Post/Post';
import {v1} from 'uuid';
import {connect} from 'react-redux';
import {StateType} from '../../../redux/redux-store';
import {addNewPost, deletePost, updatePostText} from '../../../redux/profile-Reducer';


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


export const MyPostsContainer = connect(mapStateToProps, {
    updatePostText,
    addNewPost,
    deletePost
})(MyPosts);