import React from 'react';
import AppHeader from '../../components/AppHeader';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter} from 'react-router-dom';

test('AppHeader renders default links correctly', () => {
    const {getByText} = render(
        <BrowserRouter>
            <AppHeader />
        </BrowserRouter>,
    );
    expect(getByText(/^Login/).textContent).toBe('Login');
    expect(getByText(/^Register/).textContent).toBe('Register');
});
