import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';


export const Profile: React.FC = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>

        </div>
    );
};