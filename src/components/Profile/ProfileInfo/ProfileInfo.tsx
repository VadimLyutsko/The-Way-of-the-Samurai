import React from 'react';
import styles from './ProfileInfo.module.css';
import {UserProfileType} from '../../../redux/Types';

type ProfileInfoType = {
    profileDate: UserProfileType
}

export const ProfileInfo: React.FC<ProfileInfoType> = ({profileDate}) => {
    return (
        <div>

            <div>
                <img
                    src="https://pbs.twimg.com/profile_banners/557861893/1497433330/1500x500"
                    alt=""/>
            </div>

            <div className={styles.userLargeImage}>
                <img
                    src={profileDate?.photos.large}
                    alt=""/>
            </div>

            <div className={styles.description}>
                <div> {profileDate?.aboutMe}</div>
                <div> {profileDate?.contacts.vk}</div>
                <div>   {profileDate?.lookingForAJobDescription}</div>
                <div>{profileDate?.fullName}</div>
            </div>
        </div>
    );
};