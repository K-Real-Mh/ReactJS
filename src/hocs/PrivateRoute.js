import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthedNameSelector } from '../store/profile/selectors';

function PrivateRoute({...rest}) {
    const authenticated = useSelector(isAuthedNameSelector);

    return authenticated ? (
        <Route {...rest}/>
    ) : (
        <Redirect to={{pathname:'/login'}} />
    );
}

export default PrivateRoute;
