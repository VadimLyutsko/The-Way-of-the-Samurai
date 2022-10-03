import React from 'react';
import style from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostDataType} from '../Profile';


export const MyPosts: React.FC<PostDataType> = ({postsData}) => {


    const postsElements = postsData.map(item => <Post id={item.id} message={item.message} likeCount={item.likeCount}
                                                      imgAddress={item.imgAddress}/>);

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
                {postsElements}
            </div>

        </div>
    );
};