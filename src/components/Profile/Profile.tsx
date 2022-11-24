import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPostContainer/MyPostContainer';


export const Profile: React.FC = (
   ) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
            {/*<MyPostsContainer newPostText={newPostText} postsData={postsData} dispatch={dispatch}/>*/}
                    </div>
    );
};