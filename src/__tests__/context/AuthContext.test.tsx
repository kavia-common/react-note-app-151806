import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {AuthConsumer, AuthProvider} from '../../context/AuthContext';
import {MOCK_AUTH_CONTEXT_VALUE} from '../../mocks/index';

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
                ...MOCK_AUTH_CONTEXT_VALUE,
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
