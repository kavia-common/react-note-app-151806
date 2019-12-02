import {IUser} from '../types/index';
import {IAuthContext} from '../context/AuthContext';

export const MOCK_USER: IUser = {
    user_id: 'cookiemonster',
    username: 'Xavier91',
    id: 1,
    note_score: 1,
};

export const MOCK_AUTH_CONTEXT_VALUE: IAuthContext = {
    user: MOCK_USER,
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
};
