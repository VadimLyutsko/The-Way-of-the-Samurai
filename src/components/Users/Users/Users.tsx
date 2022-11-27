import React from 'react';
import {UserType} from '../../../redux/Types';
import styles from './Users.module.css';
import SuperButton from '../../SuperComponents/SuperButton/SuperButton';

type UsersType = {
    users: UserType[]
    currentPageHAndler: (currentPage: number) => void
    currentPage: number
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
}

export const Users: React.FC<UsersType> = (props) => {

    let pagesCount = Math.ceil(15);  //hardCode for normal UI
    // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (<div>

        <div>
            {pages.map(p => {
                return <span onClick={() => {
                    props.currentPageHAndler(p);
                }}
                             className={props.currentPage === p ? styles.selectedPageNow : styles.selectedPage}>{p}</span>;
            })}
            ... and others
        </div>

        {
            props.users.map(user => <div key={user.id}>

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
                                props.unFollowUser(user.id);
                            }}></SuperButton> :

                            <SuperButton type={'Goodness'} title={'Follow'} callBack={() => {
                                props.followUser(user.id);
                            }}></SuperButton>}

                        </div>
                    </div>
                </div>
            )}
    </div>);
};

