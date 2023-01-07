import React from 'react';
import styles from './ProfileInfo.module.css';
import {UserProfileType} from '../../../redux/Types';
import SuperPreloader from '../../SuperComponents/SuperPreloader/SuperPreloader';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

type ProfileInfoType = {
    updateUserStatus: (status: string) => void
    profileDate: UserProfileType
    status: string
}

export const ProfileInfo: React.FC<ProfileInfoType> = ({profileDate, status,updateUserStatus}) => {

    if (!profileDate) {
        return <SuperPreloader/>;
    }

    return (
        <div>
            <div>
                <img
                    src="https://pbs.twimg.com/profile_banners/557861893/1497433330/1500x500"
                    alt=""/>
            </div>

            <div className={styles.userLargeImage}>
                <img
                    src={profileDate.photos.large ? profileDate.photos.large : 'https://pbs.twimg.com/media/EYJZQ-eWkAAOMGd?format=jpg&name=medium'}
                    alt=""/>
            </div>
            <div className={styles.description}>
                {/*<div> {profileDate?.aboutMe}</div>*/}
                {/*<div> {profileDate?.contacts.vk}</div>*/}
                {/*<div>   {profileDate?.lookingForAJobDescription}</div>*/}
                <div>{profileDate?.fullName}</div>
                <ProfileStatus status  = {status} updateUserStatus={updateUserStatus}/>

            </div>
        </div>
    );
};