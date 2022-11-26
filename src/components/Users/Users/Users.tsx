import React from 'react';
import {UserType} from '../../../redux/Types';
import styles from './Users.module.css';
import SuperButton from '../../SuperComponents/SuperButton/SuperButton';
import axios from 'axios';

type UsersType = {
    users: UserType[]
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export const Users: React.FC<UsersType> = ({users, setUsers, unFollowUser, followUser}) => {

    if (users.length === 0) {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            setUsers(response.data.items);
        });
    }

    return (
        <div>
            {users.map(user => <div key={user.id}>

                    <div className={styles.usersContent}>
                        <div className={styles.userPhoto}>
                            <img
                                src={user.photos.small === null ? 'https://i.stack.imgur.com/zJGYX.png?s=192&g=1' : user.photos.small}
                                alt=""/>
                        </div>

                        <div>{user.name}</div>

                        <span>{!user.uniqueUrlName ? `NoUniqueName${user.id}` : user.uniqueUrlName}</span>

                        <div>{user.followed ?

                            <SuperButton type={'Evil'} title={'Unfollow'} callBack={() => {
                                unFollowUser(user.id);
                            }}></SuperButton> :

                            <SuperButton type={'Goodness'} title={'Follow'} callBack={() => {
                                followUser(user.id);
                            }}></SuperButton>}

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};