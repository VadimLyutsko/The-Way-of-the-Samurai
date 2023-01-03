import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getData} from '../../redux/profile-Reducer';
import {StateType} from '../../redux/redux-store';
import {UserProfileType} from '../../redux/Types';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {widthAuthRedirect} from '../hoc/widthRedirect';


type ProfileContainerType = {
    getData: (userId: string) => void
    profileDate: UserProfileType
}


type MatchParams = {
    userId: string
}


class ProfileContainer extends React.Component<ProfileContainerType & RouteComponentProps<MatchParams>> {

    componentDidMount() {
        this.props.getData(this.props.match.params.userId);
    }

    render() {
        return (<Profile profileDate={this.props.profileDate}/>);
    }
}

let AuthRedirectComponent = widthAuthRedirect(ProfileContainer);   //widthAuthRedirect - мой HOC для авторизации и редиректа

let mapStateToProps = (state: StateType) => {
    return {
        profileDate: state.profilePage.profile
    };
};

let WidthURLProfileContainerComponent = withRouter(AuthRedirectComponent);   //withRouter указывает реакту на текущий URL

export default connect(mapStateToProps, {getData})(WidthURLProfileContainerComponent);