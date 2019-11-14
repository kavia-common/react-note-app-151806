import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthContext, {AuthConsumer, AuthProvider, useAuthState} from '../../context/AuthContext';

test('AuthConsumer shows value from provider', () => {
    const tree = (
        <AuthProvider value={{user: null, logoutUser: () => { return; }, setUser: () => { return; }}}>
            <AuthConsumer>
                {({user}) => {
                    if (user) {
                        return <div>User</div>;
                    }
                    return <div>None</div>;
                }}
            </AuthConsumer>
        </AuthProvider>
    );
    const {getByText, getByDisplayValue} = render(tree);
    expect(getByText(/^None:/)).toBe('None');
});
