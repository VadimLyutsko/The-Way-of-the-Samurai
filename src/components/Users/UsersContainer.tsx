import React from 'react';
import {connect} from 'react-redux';
import {UserType} from '../../redux/Types';
import {
    followUser,
    setCurrentPage,
    setFetchingPreloader,
    setTotalUserCount,
    setUsers,
    unFollowUser,
} from '../../redux/users-Reducer';
import {StateType} from '../../redux/redux-store';
import {Users} from './Users/Users';
import {usersAPI} from '../../api/api';

type UsersContainerType = {
    users: UserType[]
    setTotalUserCount: (totalUsersCount: number) => void
    setFetchingPreloader: (isFetching: boolean) => void
    setCurrentPage: (currentPage: number) => void
    unFollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    followUser: (userId: number) => void
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    pageSize: number
}

export class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.setFetchingPreloader(true);
        setTimeout(() => {
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                    this.props.setFetchingPreloader(false);
                    this.props.setTotalUserCount(data.totalCount);
                    this.props.setUsers(data.items);
                });
        }, 2000);
    }

    currentPageHAndler = (currentPage: number) => {
        this.props.setFetchingPreloader(true);
        this.props.setCurrentPage(currentPage);
        setTimeout(() => {
            usersAPI.getUsers(currentPage, this.props.pageSize)
                .then(response => {
                    this.props.setFetchingPreloader(false);
                    this.props.setUsers(response.items);
                });
        }, 2000);
    };

    render() {
        return (
            <Users
                currentPageHAndler={this.currentPageHAndler}
                totalUsersCount={this.props.totalUsersCount}
                unFollowUser={this.props.unFollowUser}
                currentPage={this.props.currentPage}
                followUser={this.props.followUser}
                isFetching={this.props.isFetching}
                pageSize={this.props.pageSize}
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