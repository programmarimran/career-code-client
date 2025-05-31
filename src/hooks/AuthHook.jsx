import React, { use } from 'react';
import AuthContext from '../contexts/AuthContexts';

const AuthHook = () => {
    const auth=use(AuthContext)
    return auth

};

export default AuthHook;