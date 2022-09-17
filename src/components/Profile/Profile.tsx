import React from "react"
import style from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile: React.FC = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://st16.stpulscen.ru/images/product/443/107/594_big.jpg" alt=""/>
            </div>
            <div>ava + description
                <MyPosts/>
            </div>
        </div>
    )
}