import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {getAuthUserData} from '../../redux/auth-Reducer';

type HeaderContainerType = {
    getAuthUserData: () => void
    login: string | null
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Header
                login={this.props.login}
                isAuth={this.props.isAuth}/>
        );
    }
}

let mapStateToProps = (state: StateType) => {

    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    };
};

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);