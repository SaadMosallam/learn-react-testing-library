import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import VoteBtn from "./VoteBtn";
import userEvent from "@testing-library/user-event";
import { hasVotedEnum, altTextEnum } from "./Vote2";

describe("VoteBtn tests", () => {
  test("vote Button handles event handler correctly", () => {
    const stubHandleVote = jest.fn();
    render(
      <VoteBtn
        handleVote={stubHandleVote}
        hasVoted={hasVotedEnum.noVote}
        imgSrc="test"
        altText={altTextEnum.like}
      />
    );
    const voteButton = screen.getByRole("button", { name: altTextEnum.like });
    const voteButtonImg = screen.getByRole("img", { name: altTextEnum.like });

    expect(voteButtonImg).toBeInTheDocument();
    expect(voteButton).toBeInTheDocument();
    expect(voteButton).toBeEnabled();

    fireEvent.click(voteButton);
    expect(stubHandleVote).toHaveBeenCalled();
    expect(stubHandleVote).toHaveBeenCalledTimes(1);
  });

  test("given clicked button, invokes handle vote", async () => {
    const user = userEvent.setup();

    const stubHandleVote = jest.fn();
    render(
      <VoteBtn
        handleVote={stubHandleVote}
        hasVoted={hasVotedEnum.noVote}
        imgSrc="test"
        altText={altTextEnum.like}
      />
    );
    const voteButton = screen.getByRole("button", { name: altTextEnum.like });

    await user.click(voteButton);
    expect(stubHandleVote).toHaveBeenCalled();
    expect(stubHandleVote).toHaveBeenCalledTimes(1);
  });
});
