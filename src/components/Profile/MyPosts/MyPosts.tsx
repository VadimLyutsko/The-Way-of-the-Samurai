import React from 'react';
import style from './MyPosts.module.css';
import {Post} from './Post/Post';


export const MyPost: React.FC = () => {
    return (
        <div>

        </div>
    );
};

export const MyPosts: React.FC = () => {
    return (
        <div className={style.postsBlock}>
            <h3> My posts</h3>

            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={style.posts}>
                <Post message={'Hello, my friends'} likeCount={1}/>
                <Post message={'My brother'} likeCount={17}/>
            </div>

        </div>
    );
};