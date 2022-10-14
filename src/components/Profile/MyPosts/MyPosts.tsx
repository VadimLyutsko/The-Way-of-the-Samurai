import React, {useState} from 'react';
import style from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostDataType} from '../Profile';
import {v1} from 'uuid';


export const MyPosts: React.FC<PostDataType> = ({postsData, addNewPost, updateNewPostText, newPostText}) => {


    const postsElements = postsData.map(item => <Post key={v1()} id={item.id} message={item.message}
                                                      likeCount={item.likeCount}
                                                      imgAddress={item.imgAddress}/>);

    const addPost = () => {
        addNewPost(newPostText);
    };

    const onPostChange = () => {
        newPostElement.current?.value && updateNewPostText(newPostElement.current?.value);
    };

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    return (
        <div className={style.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div><textarea
                    ref={newPostElement}
                    placeholder="type some text"
                    onChange={onPostChange}
                    value={newPostText}
                />
                </div>
                <div>
                    <button
                        onClick={addPost}
                    >Add post
                    </button>
                </div>
            </div>

            <div className={style.posts}>
                {postsElements}
            </div>

        </div>
    );
};