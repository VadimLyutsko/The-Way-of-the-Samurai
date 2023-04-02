import React, {useEffect} from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPostContainer/MyPostContainer';
import {UserProfileType} from '../../redux/Types';
import {useAppDispatch, useAppSelector} from '../../redux/redux-store';
import {getDataTC, getUserStatus} from '../../redux/profile-Reducer';

// type ProfileType = {
//     updateUserStatus: (status: string) => void
//     profileDate: UserProfileType
//     status: string
// }

type ProfileContainerType = {
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    getData: (userId: string) => void
    profileDate: UserProfileType
    status: string
}

export const ProfileContainer: React.FC = () => {


    const dispatch = useAppDispatch()
    useEffect(() => {
        // let userId = this.props.match.params.userId;
        // if (!userId) {
        //     userId = '2';
        // }
        //
        dispatch(getDataTC('21989'))
        dispatch(getUserStatus('21989'))
    }, [])

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};