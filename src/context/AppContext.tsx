import React from 'react';
import {AuthProvider, useAuthState} from './AuthContext';

const AppContext: React.FC = ({children}) => {
    const auth = useAuthState();
    return <AuthProvider value={{...auth}}>{children}</AuthProvider>;
};

export default AppContext;
