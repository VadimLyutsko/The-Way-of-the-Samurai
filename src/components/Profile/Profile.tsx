import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPostContainer/MyPostContainer';
import {UserProfileType} from '../../redux/Types';
import preloaderImage from '../SuperComponents/SuperPreloader/Preloader.gif';

type ProfileType = {
    profileDate: UserProfileType
}

export const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo preloaderImage={preloaderImage} profileDate={props.profileDate}/>
            <MyPostsContainer/>
            {/*<MyPostsContainer newPostText={newPostText} postsData={postsData} dispatch={dispatch}/>*/}
        </div>
    );
};