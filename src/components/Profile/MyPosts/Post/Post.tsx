import React from "react"
import style from "./Post.module.css"

export const Post: React.FC = () => {
    return (
        <div className={style.item}>
            <img
                src="https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"
                alt=""/>
            post1
            <div><span>Like</span></div>
        </div>
    )
}