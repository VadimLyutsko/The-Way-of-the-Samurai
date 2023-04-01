import React from 'react';
import {useAppSelector} from '../../redux/redux-store';
import {Navigate} from 'react-router-dom';

export const Settings: React.FC = () => {

    const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn)


    if(!isLoggedIn){
        return <Navigate to={'/login'}/>
    }

    return (
        <div>
            Settings
        </div>
    );
};