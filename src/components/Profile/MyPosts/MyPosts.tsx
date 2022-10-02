import React from 'react';
import style from './MyPosts.module.css';
import {Post} from './Post/Post';



export const MyPosts: React.FC = () => {

    const postsData = [
        {
            id:1,
            message:'Hello, my friends',
            likeCount:1,
            imgAddress:"https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"
        },
        {
            id:2,
            message:'My brotherrr',
            likeCount:17,
            imgAddress:"https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"
        },
        {
            id:3,
            message:'My Valeria',
            likeCount:175,
            imgAddress:'https://sun9-east.userapi.com/sun9-57/s/v1/if1/ui9oE3EzH6YEB2J10w21pACDlkm7bnoct0OdnZbPi6gmSyBwCN8PASYgycQHAOZl-lG8A0vd.jpg?size=2449x1633&quality=96&type=album'
        }
    ]

    const postsElements = postsData.map(item=><Post id={item.id} message={item.message} likeCount={item.likeCount} imgAddress={item.imgAddress}/>)
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