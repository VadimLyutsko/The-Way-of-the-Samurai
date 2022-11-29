import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPostContainer/MyPostContainer';
import {UserProfileType} from '../../redux/Types';

type ProfileType = {
    // updateProfileData: (profile: UserProfileType) => void
    profileDate:UserProfileType
}

export const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo profileDate={props.profileDate} />
            <MyPostsContainer/>
            {/*<MyPostsContainer newPostText={newPostText} postsData={postsData} dispatch={dispatch}/>*/}
        </div>
    );
};