import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {StateType} from '../../redux/redux-store';
import {initializeAppTC} from '../../redux/auth-Reducer';

type HeaderContainerType = {
    getAuthUserData: () => void
    login: string | null
    isInitialized: boolean
}

// class HeaderContainer extends React.Component<HeaderContainerType> {
//
//     componentDidMount() {
//         this.props.getAuthUserData();
//     }
//
//     render() {
//         return (
//             <Header
//                 login={this.props.login}
//                 isAuth={this.props.isInitialized}/>
//         );
//     }
// }

export const HContainer = () => {
    return <Header
        // login={this.props.login}
        // isAuth={this.props.isInitialized}
    />

}

// let mapStateToProps = (state: StateType) => {
//
//     return {
//         isAuth: state.auth.isInitialized,
//         login: state.auth.data.login
//     };
// };
//
// export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);