import React from 'react';
import {UserType} from '../../../redux/Types';
import styles from './Users.module.css';
import SuperButton from '../../SuperComponents/SuperButton/SuperButton';
import axios from 'axios';

type UsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalUsersCount: number) => void

}

export class Users extends React.Component<UsersType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
        });
    }

    currentPageHAndler = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    };

    render() {

        let pagesCount = Math.ceil(15);  //hardCode for normal UI
        // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return (
            <div>

                <div>
                    {pages.map(p => {
                        return <span onClick={() => {
                            this.currentPageHAndler(p);
                        }}
                                     className={this.props.currentPage === p ? styles.selectedPageNow : styles.selectedPage}>{p}</span>;
                    })}
                    ... and others
                </div>

                {
                    this.props.users.map(user => <div key={user.id}>

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
                                        this.props.unFollowUser(user.id);
                                    }}></SuperButton> :

                                    <SuperButton type={'Goodness'} title={'Follow'} callBack={() => {
                                        this.props.followUser(user.id);
                                    }}></SuperButton>}

                                </div>
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}
