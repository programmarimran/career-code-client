import React, { use } from 'react';
import AuthContext from '../contexts/AuthContexts';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    const locatin=useLocation()
    // console.log(locatin.pathname)
    const {user,loading}=use(AuthContext)
    if(loading){
        return <p className='  text-center'>loading ........</p>
    }
    else if(!user){
        return <Navigate to={"/login"} state={locatin.pathname}></Navigate>
    }
    return children
};

export default PrivateRouter;