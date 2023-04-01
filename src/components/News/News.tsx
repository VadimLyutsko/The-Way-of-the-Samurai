import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../redux/redux-store';

export const News: React.FC = () => {

    const isLoggedIn = useAppSelector<boolean>((state) => state.auth.isLoggedIn)


    if(!isLoggedIn){
        return <Navigate to={'/login'}/>
    }
    return (
        <div>
            News
        </div>
    );
};