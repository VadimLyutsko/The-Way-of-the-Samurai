import React from "react"
import style from './Profile.module.css'

export const Profile: React.FC = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://st16.stpulscen.ru/images/product/443/107/594_big.jpg" alt=""/>
            </div>
            <div>ava + description

                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div className={style.posts}>
                        <div className={style.item}>
                            post1
                        </div>
                        <div className={style.item}>
                            post2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}