import { render, screen } from '@testing-library/react';
import React from 'react';
import Table from './Table';
import { employees } from '../../utils';

describe('Table tests', () => {
    test('Table component rendered correctly', () => {
        render(<Table employees={employees} />);
        
        expect(screen.getByRole('cell', { name: /John Doe/i })).toBeInTheDocument();
        expect(screen.getByRole('cell', { name: /Christina Smith/i })).toBeInTheDocument();
        const roleCells = screen.getAllByRole('cell', { name: /Frontend/i });
        const departmentCells = screen.getAllByRole('cell', { name: /Engineering/i });
        expect(roleCells.length).toBe(2);
        expect(departmentCells.length).toBe(4);
    });

    test('Table component styled correctly', () => {
        render(<Table employees={employees} />);
        
        const table = screen.getByRole('table');
        expect(table).toHaveAttribute('class', 'w-50 table table-striped');
    });
});