import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {me} from '../../redux/auth-Reducer';

type HeaderContainerType = {
    me: () => void
    login: string | null
    isAuth: boolean
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.me();
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

export default connect(mapStateToProps, {me})(HeaderContainer);