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

export class Users extends React.Component<UsersType> {

        componentDidMount() {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger
                this.props.setUsers(response.data.items);
            });
        }


    render() {
        return (
            <div>
                {this.props.users.map(user => <div key={user.id}>

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
