import React from 'react';
import {connect} from 'react-redux';
import {UserType} from '../../redux/Types';
import {
    followUser,
    setCurrentPage,
    setFetchingPreloader,
    setTotalUserCount,
    setUsers,
    unFollowUser
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

export class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.setFetchingPreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials: true,
        }).then(response => {
            this.props.setFetchingPreloader(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
        });
    }

    currentPageHAndler = (currentPage: number) => {

        this.props.setCurrentPage(currentPage);
        this.props.setFetchingPreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`,{
            withCredentials: true,
        }).then(response => {
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

export default connect(mapStateToProps, {
    setFetchingPreloader,
    setTotalUserCount,
    setCurrentPage,
    unFollowUser,
    followUser,
    setUsers,
})(UsersContainer);