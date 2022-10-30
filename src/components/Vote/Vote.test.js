import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Vote from './Vote';

describe('Vote tests', () => {
    test('Vote component renders correctly', () => {
        render(<Vote totalGlobalLikes={10} />);
        const noteText = screen.getByText(/Note: You are not allowed to change your vote once selected!/i);
        const likeVoteButton = screen.getByRole('button', { name: /thumbs up/i });
        const dislikeVoteButton = screen.getByRole('button', { name: /thumbs down/i });
        const voteCount = screen.getByText(/10/i);

        expect(noteText).toBeInTheDocument();
        expect(likeVoteButton).toBeInTheDocument();
        expect(dislikeVoteButton).toBeInTheDocument();
        expect(voteCount).toBeInTheDocument();
        expect(likeVoteButton).toBeEnabled();
        expect(dislikeVoteButton).toBeEnabled();
    });

    test('vote button gets disabled after voting', () => {
        render(<Vote totalGlobalLikes={10} />);
        const likeVoteButton = screen.getByRole('button', { name: /thumbs up/i });
        const dislikeVoteButton = screen.getByRole('button', { name: /thumbs down/i });

        expect(likeVoteButton).toBeEnabled();
        expect(dislikeVoteButton).toBeEnabled();

        fireEvent.click(likeVoteButton);
        expect(likeVoteButton).toBeDisabled();
        expect(dislikeVoteButton).toBeDisabled();
    });

    test('vote like increases vote count', () => {
        render(<Vote totalGlobalLikes={10} />);
        const likeVoteButton = screen.getByRole('button', { name: /thumbs up/i });
        const dislikeVoteButton = screen.getByRole('button', { name: /thumbs down/i });
        const voteCount = screen.getByText(/10/i);

        expect(voteCount).toBeInTheDocument();
        fireEvent.click(likeVoteButton);
        const increasedVoteCount = screen.getByText(/11/i);

        expect(increasedVoteCount).toBeInTheDocument();
        expect(dislikeVoteButton).toBeDisabled();
        expect(likeVoteButton).toBeDisabled();
        expect(likeVoteButton).toHaveStyle({ background: 'green' });
    });

    test('vote dislike decrease vote count', () => {
        render(<Vote totalGlobalLikes={10} />);
        const dislikeVoteButton = screen.getByRole('button', { name: /thumbs down/i });
        const likeVoteButton = screen.getByRole('button', { name: /thumbs up/i });
        const voteCount = screen.getByText(/10/i);

        expect(voteCount).toBeInTheDocument();
        fireEvent.click(dislikeVoteButton);
        const decreasedVoteCount = screen.getByText(/9/i);

        expect(decreasedVoteCount).toBeInTheDocument();
        expect(dislikeVoteButton).toBeDisabled();
        expect(likeVoteButton).toBeDisabled();
        expect(dislikeVoteButton).toHaveStyle({ background: 'red' });
    });
});