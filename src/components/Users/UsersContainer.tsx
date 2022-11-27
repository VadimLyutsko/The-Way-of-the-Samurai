import React, {Dispatch} from 'react';
import {connect} from 'react-redux';
import {ActionType, UserType} from '../../redux/Types';
import {
    followUserAC,
    setCurrentPageAC, setFetchingPreloaderAC,
    setTotalUserCountAC,
    setUserAC,
    unFollowUserAC
} from '../../redux/users-Reducer';
import {StateType} from '../../redux/redux-store';
import axios from 'axios';
import {Users} from './Users/Users';
import preloaderImage from '../SuperComponents/SuperPreloader/Preloader.gif';

type UsersContainerType = {
    users: UserType[]
    setTotalUserCount: (totalUsersCount: number) => void
    setFetchingPreloader: (isFetching: boolean) => void
    setCurrentPage: (currentPage: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    followUser: (userId: number) => void
    isFetching: boolean
    totalUsersCount: number
    currentPage: number
    pageSize: number
}

export class UsersAPI extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.setFetchingPreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setFetchingPreloader(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
        });
    }

    currentPageHAndler = (currentPage: number) => {
        this.props.setCurrentPage(currentPage);
        this.props.setFetchingPreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setFetchingPreloader(false);
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
                isFetching={this.props.isFetching}
                preloaderImage={preloaderImage}
                users={this.props.users}
            />
        );
    }
}


let mapStateToProps = (state: StateType) => {
    return {
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
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
        },
        setFetchingPreloader: (isFetching: boolean) => {
            dispatch(setFetchingPreloaderAC(isFetching));
        }
    };
};


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);