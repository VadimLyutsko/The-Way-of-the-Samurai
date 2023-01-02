import React from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getData} from '../../redux/profile-Reducer';
import {StateType} from '../../redux/redux-store';
import {UserProfileType} from '../../redux/Types';
import {RouteComponentProps, withRouter} from 'react-router-dom';


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

        // profileAPI.getData(this.props.match.params.userId)
        //     .then(response => {
        //         this.props.setUserProfileData(response.data);
        //     });
    }

    render() {
        return (<Profile profileDate={this.props.profileDate}/>);
    }
}


let mapStateToProps = (state: StateType) => {
    return {
        profileDate: state.profilePage.profile
    };
};

let WidthURLProfileContainerComponent = withRouter(ProfileContainer);   //withRouter указывает реакту на текущий URL

export default connect(mapStateToProps, {getData})(WidthURLProfileContainerComponent);