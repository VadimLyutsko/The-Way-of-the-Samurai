import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfileData} from '../../redux/profile-Reducer';
import {StateType} from '../../redux/redux-store';
import {UserProfileType} from '../../redux/Types';

type ProfileContainerType = {
    setUserProfileData: (profile: UserProfileType) => void
    profileDate:UserProfileType
}

class ProfileAPI extends React.Component<ProfileContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`).then(response => {

            this.props.setUserProfileData(response.data);
        });
    }

    render() {

        return (
            <Profile

                profileDate={this.props.profileDate}
            />
        );
    }
}

let mapStateToProps = (state: StateType) => {
    return {
        profileDate:state.profilePage.profile
    };
};

export const ProfileContainer = connect(mapStateToProps, {setUserProfileData})(ProfileAPI);