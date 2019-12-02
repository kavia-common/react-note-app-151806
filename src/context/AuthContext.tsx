import React, {createContext, useState, useReducer} from 'react';
import {IUser} from '../types/index';
import asyncReducer, {IAsyncReducer, AsyncReducerActionTypes} from '../reducers/asyncReducer';
import axios from 'axios';

export interface IAuthContext extends IAsyncReducer {
    user: null | IUser;
    setUser: (user: IUser) => void;
    logoutUser: () => void;
    login: (username: string, password: string) => void;
    register: (username: string, password: string) => void;
    getCurrentUser: () => void;
    message: string;
}

const AuthContext = createContext<IAuthContext>({
    user: null,
    setUser: () => {
        return;
    },
    logoutUser: () => {
        return;
    },
    login: () => {
        return;
    },
    register: () => {
        return;
    },
    getCurrentUser: () => {
        return;
    },
    loading: false,
    success: false,
    error: false,
    message: '',
});

export const useAuthState = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const [message, setMessage] = useState('');
    const [{loading, success, error}, dispatch] = useReducer(asyncReducer, {
        loading: false,
        success: false,
        error: false,
    });

    const setCurrentUser = (u: IUser) => setUser(u);

    const logoutUser = () => setUser(null);

    const login = async (username: string, password: string) => {
        setMessage('');
        dispatch({type: AsyncReducerActionTypes.loading});
        try {
            const req = await axios.post('http://localhost:8080/api/auth/login', {
                username,
                password,
            });
            const {data} = req;
            if (data) {
                setCurrentUser(data.data);
                dispatch({type: AsyncReducerActionTypes.success});
                return;
            }
            setMessage('Wrong username/password');
            dispatch({type: AsyncReducerActionTypes.error});
        } catch (error) {
            setMessage('Error logging in');
            dispatch({type: AsyncReducerActionTypes.error});
        }
    };

    const register = async (username: string, password: string) => {
        setMessage('');
        dispatch({type: AsyncReducerActionTypes.loading});
        try {
            const req = await axios.post('http://localhost:8080/api/auth/register', {
                username,
                password,
            });
            const {data} = req;
            if (data) {
                setCurrentUser(data.data);
                dispatch({type: AsyncReducerActionTypes.success});
                return;
            }
            setMessage('Username is taken!');
            dispatch({type: AsyncReducerActionTypes.error});
        } catch (error) {
            setMessage('Error registering user');
            dispatch({type: AsyncReducerActionTypes.error});
        }
    };

    const getCurrentUser = async () => {
        const req = await axios.get('http://localhost:8080/api/auth/current_user');
        const {data} = req;
        if (data.data) {
            setCurrentUser(data.data);
        }
    };

    return {
        user,
        setUser: setCurrentUser,
        logoutUser,
        loading,
        success,
        error,
        message,
        login,
        register,
        getCurrentUser,
    };
};

export const AuthProvider = AuthContext.Provider;

export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;
