import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getData, getUserStatus, updateUserStatus} from '../../redux/profile-Reducer';
import {StateType} from '../../redux/redux-store';
import {UserProfileType} from '../../redux/Types';
import {RouteComponentProps, withRouter} from 'react-router-dom';
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


class ProfileContainer extends React.Component<ProfileContainerType & RouteComponentProps<MatchParams>> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }

        this.props.getData(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (<Profile
            profileDate={this.props.profileDate}
            status={this.props.status}
            updateUserStatus={this.props.updateUserStatus}
        />);
    }
}

let mapStateToProps = (state: StateType) => {
    return {
        profileDate: state.profilePage.profile,
        status:state.profilePage.status
    };
};

// let AuthRedirectComponent = widthAuthRedirect(ProfileContainer);   //widthAuthRedirect - мой HOC для авторизации и редиректа
//
// let WidthURLProfileContainerComponent = withRouter(AuthRedirectComponent);   //withRouter указывает реакту на текущий URL
//
// export default connect(mapStateToProps, {getData})(WidthURLProfileContainerComponent);

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getData, getUserStatus, updateUserStatus}),
    withRouter,
    // widthAuthRedirect
)(ProfileContainer);