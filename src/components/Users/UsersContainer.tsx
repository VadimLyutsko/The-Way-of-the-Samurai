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
import {Users} from './Users/Users';


let mapStateToProps = (state: StateType) => {
    return {
        users: state.userPage.UsersData,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage
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


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);