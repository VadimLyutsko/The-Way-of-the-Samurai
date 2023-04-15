import React from 'react';
import styles from './User.module.css';
import {NavLink} from 'react-router-dom';
import SuperButton from '../../../SuperComponents/SuperButton/SuperButton';
import {UserType} from '../../../../redux/Types';

type UserPropsType = {
    user:UserType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const User:React.FC<UserPropsType> = ({user, follow, unfollow}) => {
    return (
        <div key={user.id}>

            <div className={styles.usersContent}>
                <div className={styles.userPhoto}>
                    <NavLink to={'profile/' + user.id}>
                        <img
                            src={user.photos.small === null ? 'https://i.stack.imgur.com/zJGYX.png?s=192&g=1' : user.photos.small}
                            alt=""/>
                    </NavLink>
                </div>

                <div>{user.name}</div>

                <span>{!user.uniqueUrlName ? `NoName № ${user.id}` : user.uniqueUrlName}</span>

                <div>
                    {user.followed ?
                        <SuperButton
                            type={'Evil'}
                            title={'Unfollow'}
                            callBack={() => {
                                unfollow(user.id);
                            }}/>
                        :
                        <SuperButton type={'Goodness'}
                                     title={'Follow'}
                                     callBack={() => {
                                         follow(user.id);
                                     }}/>}
                </div>
            </div>
        </div>
    )
}


export default User;