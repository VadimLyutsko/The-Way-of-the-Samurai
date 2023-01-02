import React from 'react';
import {UserType} from '../../../redux/Types';
import styles from './Users.module.css';
import SuperButton from '../../SuperComponents/SuperButton/SuperButton';
import SuperPreloader from '../../SuperComponents/SuperPreloader/SuperPreloader';
import {NavLink} from 'react-router-dom';

type UsersType = {
    users: UserType[]
    currentPageHAndler: (currentPage: number) => void
    totalUsersCount: number
    isFetching: boolean
    currentPage: number
    pageSize: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users: React.FC<UsersType> = ({
                                               totalUsersCount,
                                               currentPageHAndler,
                                               currentPage,
                                               isFetching,
                                               pageSize,
                                               users,
                                               follow,
                                               unfollow
                                           }) => {

    // let pagesCount = Math.ceil(15);  //hardCode for normal UI
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>
        {
            isFetching ? <SuperPreloader/> : null
        }

        <div>
            {
                pages.slice(0, 15).map((p, i) => {   //slice(0, 15) -> Временно укоротил список
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
    </div>);
};

