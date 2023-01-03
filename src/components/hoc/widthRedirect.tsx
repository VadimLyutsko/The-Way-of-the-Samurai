import React from 'react';
import {Redirect} from 'react-router-dom';
import {StateType} from '../../redux/redux-store';
import {connect} from 'react-redux';


type MapStatePropsType = {
    isAuth:boolean
}

let mapStateToPropsForRedirect = (state: StateType):MapStatePropsType => ({
    isAuth: state.auth.isAuth
});

export function  widthAuthRedirect  <T>(Component: React.ComponentType<T>)  {

    const RedirectComponent = (props: MapStatePropsType) => {

        let {isAuth, ...restProps} = props

        if (isAuth) return <Redirect to={'/login'}/>;

        return <Component {...restProps as T} />;
    };

    // let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    // return ConnectedAuthRedirectComponent

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
};

// let mapStateToPropsForRedirect = (state: StateType)=>({
//     isAuth: state.auth.isAuth
// })
//
// export const widthAuthRedirect = (Component:any) => {
//
//     class RedirectComponent extends  React.Component<any, any> {
//         render() {
//             if(!this.props.isAuth) return <Redirect to={"/login"}/>
//
//             return <Component {...this.props} />
//         }
//     }
//
//     return connect(mapStateToPropsForRedirect)(RedirectComponent)
//
// };
