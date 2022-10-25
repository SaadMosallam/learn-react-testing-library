import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../../App';
import '@testing-library/jest-dom';
import {
    MemoryRouter,
} from "react-router-dom";

describe('Error Page tests', () => {
    test('landing on a bad page', () => {
        const badRoute = '/some/bad/route'

        // use <MemoryRouter> when you want to manually control the history
        render(
            <MemoryRouter initialEntries={[badRoute]}>
                <App />
            </MemoryRouter>,
        )
        // verify navigation to "Sorry, an unexpected error has occurred." route
        expect(screen.getByText(/Sorry, an unexpected error has occurred./i)).toBeInTheDocument()
    });
});