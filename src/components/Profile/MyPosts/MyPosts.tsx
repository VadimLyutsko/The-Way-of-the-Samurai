import React, {useState} from 'react';
import style from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostDataType} from '../Profile';
import {v1} from 'uuid';
import {deleteLastPost} from '../../../redux/State';
import SuperButton from '../../SuperComponents/SuperButton/SuperButton';


export const MyPosts: React.FC<PostDataType> = ({
                                                    postsData,
                                                    addNewPost,
                                                    deleteLastPost,
                                                    updateNewPostText,
                                                    newPostText
                                                }) => {


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
                < ><textarea
                    style={{minWidth:'245px'}}
                    ref={newPostElement}
                    placeholder="type some text"
                    onChange={onPostChange}
                    value={newPostText}
                />
                </>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '250px',
                    margin: '15px 0'
                }}>
                    <SuperButton
                        title={'Add post'}
                        callBack={addPost}
                    />

                    <SuperButton
                        title={'Delete post'}
                        callBack={deleteLastPost}
                    />

                </div>
            </div>

            <div className={style.posts}>
                {postsElements}
            </div>

        </div>
    );
};