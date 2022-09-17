import React from "react"
import style from "./Post.module.css"

 type PestProps = {
    message : string
}

export const Post: React.FC <PestProps>= ({message:message}) => {
    return (
        <div className={style.item}>
            <img
                src="https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png"
                alt=""/>
            {message}
            <div><span>Like</span></div>
        </div>
    )
}