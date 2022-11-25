import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {Users} from './Users/Users';
import {ActionType, UserType} from '../../redux/Types';
import {FollowUserAC, SetUserAC, UnFollowUserAC} from '../../redux/users-Reducer';
import {StateType} from '../../redux/redux-store';


let mapStateToProps = (state: StateType) => {
    return {
        users: state.userPage.UsersData
    };
};

let mapDispatchToProps = (dispatch: Dispatch<ActionType>) => {
    return {
        followUser: (userId: string) => {
            dispatch(FollowUserAC(userId));
        },
        unFollowUser: (userId: string) => {
            dispatch(UnFollowUserAC(userId));
        },
        setUsers: (users: UserType[]) => {
            dispatch(SetUserAC(users));
        }
    };
};


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);