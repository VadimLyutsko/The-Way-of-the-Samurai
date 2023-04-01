import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getData, getUserStatus, updateUserStatus} from '../../redux/profile-Reducer';
import {StateType, useAppSelector} from '../../redux/redux-store';
import {UserProfileType} from '../../redux/Types';
// import {RouteComponentProps, withRouter} from 'react-router-dom';
import {widthAuthRedirect} from '../hoc/widthRedirect';
import {compose} from 'redux';


type ProfileContainerType = {
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    getData: (userId: string) => void
    profileDate: UserProfileType
    status:string
}


type MatchParams = {
    userId: string
}


// class ProfileContainer extends React.Component<ProfileContainerType , any> {
//
//     componentDidMount() {
//         let userId = this.props.match.params.userId;
//         if (!userId) {
//             userId = '2';
//         }
//
//         this.props.getData(userId);
//         this.props.getUserStatus(userId);
//     }
//
//     // render() {
//     //     return (<Profile
//     //         profileDate={this.props.profileDate}
//     //         status={this.props.status}
//     //         updateUserStatus={this.props.updateUserStatus}
//     //     />);
//     // }
// }

export const ProfileContainer = ()=>{
const profileDate = useAppSelector(state => state.profilePage.profile)
const status = useAppSelector(state => state.profilePage.status)
    return (<Profile
        profileDate={profileDate}
        status={status}
        // updateUserStatus={this.props.updateUserStatus}
    />);
}

// let mapStateToProps = (state: StateType) => {
//     return {
//         profileDate: state.profilePage.profile,
//         status:state.profilePage.status
//     };
// };


// export default compose<React.ComponentType>(
//     connect(mapStateToProps, {getData, getUserStatus, updateUserStatus}),
//     withRouter,
//     // widthAuthRedirect
// )(ProfileContainer);