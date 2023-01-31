import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./Register";
import React from 'react';

describe('Register tests', () => {
    test('given submitted form, invokes handleRegister', async () => {
        const user = userEvent.setup();
        const mockHandleRegister = jest.fn();
        const mockValues = {
            email: 'john@mail.com',
            password: '123',
        };

        render(<Register handleRegister={mockHandleRegister} />);

        const emailInput = screen.getByLabelText('Email Address');
        const passwordInput = screen.getByLabelText('Create Password');
        const submitButton = screen.getByRole('button', { name: /submit/i });

        await user.type(emailInput, mockValues.email);
        await user.type(passwordInput, mockValues.password);
        await user.click(submitButton);

        expect(mockHandleRegister).toHaveBeenCalledTimes(1);
        expect(mockHandleRegister).toHaveBeenCalledWith(mockValues);
    });
})