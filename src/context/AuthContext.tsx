import React from 'react';
import { IUser } from '../types/index';

interface IAuthContext {
    user: null | IUser;
    setUser: (user: IUser) => void;
    logoutUser: () => void;
}

const AuthContext = React.createContext<IAuthContext>({
    user: null,
    setUser: () => { return; },
    logoutUser: () => { return; }
});

export const useAuthState = () => {
    const [ user, setUser ] = React.useState<IUser | null>(null);

    const setCurrentUser = (u: IUser) => setUser(u);
    const logoutUser = () => setUser(null);

    return { user, setUser: setCurrentUser, logoutUser };
};

export const AuthProvider = AuthContext.Provider;

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
