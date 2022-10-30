import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import VoteBtn from './VoteBtn';

describe('VoteBtn tests', () => {
    test('vote Button handles event handler correctly', () => {
        const handleVote = jest.fn();
        render(<VoteBtn handleVote={handleVote} hasVoted={false} imgSrc="test" altText="vote like" />);
        const voteButton = screen.getByRole('button', { name: /vote like/i });

        expect(voteButton).toBeInTheDocument();
        expect(voteButton).toBeEnabled();

        fireEvent.click(voteButton);
        expect(handleVote).toHaveBeenCalled();
    });
});