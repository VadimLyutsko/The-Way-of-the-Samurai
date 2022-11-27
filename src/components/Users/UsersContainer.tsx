import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {ActionType, UserType} from '../../redux/Types';
import {
    followUserAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUserAC,
    unFollowUserAC
} from '../../redux/users-Reducer';
import {StateType} from '../../redux/redux-store';
import axios from 'axios';
import {Users} from './Users/Users';

type UsersContainerType = {
    users: UserType[]
    setTotalUserCount: (totalUsersCount: number) => void
    setCurrentPage: (currentPage: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    followUser: (userId: number) => void
    totalUsersCount: number
    currentPage: number
    pageSize: number
}

export class UsersAPI extends React.Component<UsersContainerType> {

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
        return (
            <Users
                currentPageHAndler={this.currentPageHAndler}
                unFollowUser={this.props.unFollowUser}
                currentPage={this.props.currentPage}
                followUser={this.props.followUser}
                users={this.props.users}
            />
        );
    }
}


let mapStateToProps = (state: StateType) => {
    return {
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        pageSize: state.userPage.pageSize,
        users: state.userPage.UsersData,
    };
};

let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        followUser: (userId: number) => {
            dispatch(followUserAC(userId));
        },
        unFollowUser: (userId: number) => {
            dispatch(unFollowUserAC(userId));
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUserAC(users));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUserCount: (totalUsersCount: number) => {
            dispatch(setTotalUserCountAC(totalUsersCount));
        }
    };
};


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);