import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {setAuthData} from '../../redux/auth-Reducer';
import {AuthData} from '../../redux/Types';
import {authAPI} from '../../api/api';

type HeaderContainerType = {
    setAuthData: (data: AuthData) => void
    login: string | null
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        authAPI.getAuthApi().then(data => {
            data.resultCode === 0 && this.props.setAuthData(data);
        });
    }

    render() {
        return (
            <Header
                {...this.props}
            />
        );
    }
}

let mapStateToProps = (state: StateType) => {

    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    };
};

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);