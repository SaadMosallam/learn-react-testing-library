import React from "react";
import VoteEnhanced, { altTextEnum } from "./Vote2";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Enhanced Vote tests", () => {
  test("Enhanced Vote renders correctly", () => {
    render(<VoteEnhanced totalGlobalLikes={10} />);

    const note = screen.getByText(
      /Note: You are not allowed to change your vote once selected!/i
    );
    const likeBtn = screen.getByRole("button", { name: altTextEnum.like });
    const dislikeBtn = screen.getByRole("button", {
      name: altTextEnum.dislike,
    });
    const voteCount = screen.getByText("10");

    expect(note).toBeInTheDocument();
    expect(likeBtn).toBeInTheDocument();
    expect(dislikeBtn).toBeInTheDocument();
    expect(voteCount).toBeInTheDocument();
  });

  test("clicking like vote button updates count, disables buttons and change button background", async () => {
    const user = userEvent.setup();

    render(<VoteEnhanced totalGlobalLikes={10} />);

    const likeBtn = screen.getByRole("button", { name: altTextEnum.like });
    const dislikeBtn = screen.getByRole("button", {
      name: altTextEnum.dislike,
    });
    const voteCount = screen.getByText("10");

    await user.click(likeBtn);

    expect(likeBtn).toBeDisabled();
    expect(dislikeBtn).toBeDisabled();
    expect(voteCount.textContent).toEqual("11");
    expect(likeBtn).toHaveStyle({ background: "green" });
  });

  test("clicking dislike vote button updates count, disables buttons and change button background", async () => {
    const user = userEvent.setup();

    render(<VoteEnhanced totalGlobalLikes={10} />);

    const likeBtn = screen.getByRole("button", { name: altTextEnum.like });
    const dislikeBtn = screen.getByRole("button", {
      name: altTextEnum.dislike,
    });
    const voteCount = screen.getByText("10");

    await user.click(dislikeBtn);

    expect(likeBtn).toBeDisabled();
    expect(dislikeBtn).toBeDisabled();
    expect(voteCount.textContent).toEqual("9");
    expect(dislikeBtn).toHaveStyle({ background: "red" });
  });
});
