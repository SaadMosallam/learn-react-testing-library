import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "./Home";

describe("Home page tests", () => {
  test("Home page renders correctly", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /Learn React Testing Library!/i,
    });
    expect(heading).toBeInTheDocument();
    expect(
      screen.getByText(
        /Learn how to test React components using React Testing Library./i
      )
    ).toBeInTheDocument();
  });
});
