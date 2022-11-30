import React from 'react';
import {UserType} from '../../../redux/Types';
import styles from './Users.module.css';
import SuperButton from '../../SuperComponents/SuperButton/SuperButton';
import SuperPreloader from '../../SuperComponents/SuperPreloader/SuperPreloader';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type UsersType = {
    users: UserType[]
    currentPageHAndler: (currentPage: number) => void
    unFollowUser: (userId: number) => void
    followUser: (userId: number) => void
    preloaderImage: string
    isFetching: boolean
    currentPage: number
}

export const Users: React.FC<UsersType> = ({
                                               currentPageHAndler,
                                               unFollowUser,
                                               currentPage,
                                               isFetching,
                                               preloaderImage,
                                               followUser,
                                               users,
                                           }) => {

    let pagesCount = Math.ceil(15);  //hardCode for normal UI
    // let pagesCount = Math.ceil(this.totalUsersCount / this.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        {
            isFetching ? <SuperPreloader preloaderImage={preloaderImage}/> : null
        }

        <div>
            {
                pages.map((p, i) => {
                    return <span key={i} onClick={() => {
                        currentPageHAndler(p);
                    }}
                                 className={currentPage === p ? styles.selectedPageNow : styles.selectedPage}>{p}</span>;
                })
            }
            ... and others
        </div>

        {
            users.map(user => <div key={user.id}>

                    <div className={styles.usersContent}>
                        <div className={styles.userPhoto}>
                            <NavLink to={'profile/' + user.id}>
                                <img
                                    src={user.photos.small === null ? 'https://i.stack.imgur.com/zJGYX.png?s=192&g=1' : user.photos.small}
                                    alt=""/>
                            </NavLink>
                        </div>

                        <div>{user.name}</div>

                        <span>{!user.uniqueUrlName ? `NoUniqueName${user.id}` : user.uniqueUrlName}</span>

                        <div>
                            {user.followed ?
                                <SuperButton type={'Evil'} title={'Unfollow'} callBack={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers: {'API-KEY': '1e09ab9f-6c75-4b1b-b630-54d8c35cb68b'}
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                unFollowUser(user.id);
                                            }
                                        });
                                }}/>
                                :
                                <SuperButton type={'Goodness'} title={'Follow'} callBack={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers: {'API-KEY': '1e09ab9f-6c75-4b1b-b630-54d8c35cb68b'}
                                    }).then(response => {
                                        if (response.data.resultCode === 0) {
                                            followUser(user.id);
                                        }
                                    });
                                }}/>}

                        </div>
                    </div>
                </div>
            )
        }
    </div>);
};

