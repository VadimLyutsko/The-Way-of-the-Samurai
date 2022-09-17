import React from "react"
import style from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts: React.FC = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}