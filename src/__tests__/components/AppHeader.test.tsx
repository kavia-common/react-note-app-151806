import React from 'react';
import AppHeader from '../../components/AppHeader';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter} from 'react-router-dom';
import {MOCK_AUTH_CONTEXT_VALUE} from '../../mocks/index';
import {AuthProvider} from '../../context/AuthContext';

test('AppHeader renders default links correctly', () => {
    const {getByText} = render(
        <BrowserRouter>
            <AppHeader />
        </BrowserRouter>,
    );
    expect(getByText(/^Login/).textContent).toBe('Login');
    expect(getByText(/^Register/).textContent).toBe('Register');
});

test('AppHeader shows appropiate links for logged in users', () => {
    const {getByText} = render(
        <BrowserRouter>
            <AuthProvider value={{...MOCK_AUTH_CONTEXT_VALUE}}>
                <AppHeader />
            </AuthProvider>
        </BrowserRouter>,
    );

    expect(getByText(/^Logout/).textContent).toBe('Logout');
});
