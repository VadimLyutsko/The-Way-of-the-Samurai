import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPostContainer/MyPostContainer';
import {UserProfileType} from '../../redux/Types';

type ProfileType = {
    updateUserStatus: (status: string) => void
    profileDate: UserProfileType
    status: string
}

export const Profile: React.FC<ProfileType> = ({profileDate, updateUserStatus, status}) => {

    return (
        <div>
            <ProfileInfo
                profileDate={profileDate}
                status={status}
                updateUserStatus={updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    );
};