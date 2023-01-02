import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPostContainer/MyPostContainer';
import {UserProfileType} from '../../redux/Types';

type ProfileType = {
    profileDate: UserProfileType
}

export const Profile: React.FC<ProfileType> = ({profileDate}) => {

    return (
        <div>
            <ProfileInfo  profileDate={profileDate}/>
            <MyPostsContainer/>
        </div>
    );
};