import React from 'react';
import AppFooter from '../../components/AppFooter';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('AppFooter renders correctly', () => {
    const {getByTestId} = render(<AppFooter />);
    expect(getByTestId('footer')).toBeTruthy();
});

test('AppFooter displays proper text', () => {
    const {} = render(<AppFooter />);
});
