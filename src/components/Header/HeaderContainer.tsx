import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import axios from 'axios';
import {StateType} from '../../redux/redux-store';
import {setAuthData} from '../../redux/auth-Reducer';
import {AuthData} from '../../redux/Types';

type HeaderContainerType = {
    setAuthData: (data: AuthData) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            response.data.resultCode === 0 && this.props.setAuthData(response.data);
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