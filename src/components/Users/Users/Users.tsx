import React from 'react';
import {UserType} from '../../../redux/Types';
import SuperPreloader from '../../SuperComponents/SuperPreloader/SuperPreloader';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../../redux/redux-store';
import User from './User/User';
import {SuperPagination} from '../../SuperComponents/Pagination/Pagination';

type UsersType = {
    users: UserType[]
    currentPageHAndler: (currentPage: number) => void
    totalUsersCount: number
    isFetching: boolean
    pageSize: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export const Users: React.FC<UsersType> = ({
                                               totalUsersCount,
                                               currentPageHAndler,
                                               isFetching,
                                               pageSize,
                                               users,
                                               follow,
                                               unfollow
                                           }) => {

    const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to={'/login'}/>
    }

    return (<>
        {isFetching ? <SuperPreloader/> : null}

        <SuperPagination
            totalItemsCount={totalUsersCount}
            currentPageHAndler={currentPageHAndler}
            pageSize={pageSize}
        />


        {
            users.map(user =>
                <User user={user} follow={follow} unfollow={unfollow}/>)
        }
    </>)
}

