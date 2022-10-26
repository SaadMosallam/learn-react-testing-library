import { render } from '@testing-library/react';
import React from 'react';
import Travel from './Travel';

describe('Travel tests', () => {
    test('Travel component rendered correctly', () => {
        const { container } = render(<Travel />);
        // we can use either toMatchSnapshot or toMatchInlineSnapshot and provide the snapshot as text
        expect(container).toMatchSnapshot();
    });
});