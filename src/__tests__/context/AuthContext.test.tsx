import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthContext, {AuthConsumer, AuthProvider} from '../../context/AuthContext';
import {IUser} from '../../types/index';

const MOCK_USER: IUser = {
    user_id: 'cookiemonster',
    username: 'Xavier91',
    id: 1,
    note_score: 1,
};

test('AuthConsumer shows default user value', () => {
    const tree = (
        <AuthConsumer>
            {({user}) => {
                if (user) {
                    return <div>User</div>;
                }
                return <div>None</div>;
            }}
        </AuthConsumer>
    );
    const {getByText} = render(tree);
    expect(getByText('None').textContent).toBe('None');
});

test('AuthProvider passes user value correctly', () => {
    const tree = (
        <AuthProvider
            value={{
                user: MOCK_USER,
                logoutUser: () => {
                    return;
                },
                setUser: () => {
                    return;
                },
            }}
        >
            <AuthConsumer>
                {({user}) => {
                    if (user) {
                        return <div>User: {user.username}</div>;
                    }
                    return <div>None</div>;
                }}
            </AuthConsumer>
        </AuthProvider>
    );
    const {getByText} = render(tree);
    expect(getByText(/^User:/).textContent).toBe('User: Xavier91');
});
