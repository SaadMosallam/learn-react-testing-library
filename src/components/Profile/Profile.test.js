import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Profile from "./Profile";

describe("Profile tests", () => {
  test("Profile page renders correctly", () => {
    const userTestData = {
      name: "John Doe",
      title: "Software Engineer",
      details: "I love developing Apps using React",
    };
    render(<Profile {...userTestData} />);

    const profilePicture = screen.getByRole("img", { name: /Profile/i });
    const name = screen.getByRole("heading", { name: userTestData.name });
    const title = screen.getByText(userTestData.title);
    const details = screen.getByText(/i love developing apps using react/i);
    const detailsButton = screen.getByRole("button", { name: /hide details/i });

    expect(profilePicture).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(details).toBeInTheDocument();
    expect(detailsButton).toBeInTheDocument();
  });

  test("Profile Hide details button test", async () => {
    const user = userEvent.setup();
    const userTestData = {
      name: "John Doe",
      title: "Software Engineer",
      details: "I love developing Apps using React",
    };
    render(<Profile {...userTestData} />);

    const details = screen.getByText(/i love developing apps using react/i);
    const hideDetailsButton = screen.getByRole("button", {
      name: /hide details/i,
    });

    expect(hideDetailsButton).toBeInTheDocument();
    expect(details).toBeInTheDocument();

    await user.click(hideDetailsButton);

    const displayDetailsButton = screen.getByRole("button", {
      name: /display details/i,
    });
    expect(displayDetailsButton).toBeInTheDocument();
    expect(details).not.toBeInTheDocument();
  });
});
