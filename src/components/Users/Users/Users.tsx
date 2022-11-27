import React from 'react';
import {UserType} from '../../../redux/Types';
import styles from './Users.module.css';
import SuperButton from '../../SuperComponents/SuperButton/SuperButton';

type UsersType = {
    users: UserType[]
    currentPageHAndler: (currentPage: number) => void
    unFollowUser: (userId: number) => void
    followUser: (userId: number) => void
    currentPage: number
}

export const Users: React.FC<UsersType> = ({users, unFollowUser, followUser, currentPageHAndler, currentPage}) => {

    let pagesCount = Math.ceil(15);  //hardCode for normal UI
    // let pagesCount = Math.ceil(this.totalUsersCount / this.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>

        <div>
            {
                pages.map(p => {
                    return <span onClick={() => {
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
            )
        }
    </div>);
};

