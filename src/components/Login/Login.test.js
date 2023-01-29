import { render, screen } from "@testing-library/react";
import React from "react";
import Login from "./Login";
import userEvent from "@testing-library/user-event";

describe("Login page tests", () => {
  test("Login page renders correctly", () => {
    render(<Login />);

    const userNameField = screen.getByRole("textbox", { name: "Username" });
    const passwordField = screen.getByLabelText("Password");
    // For checkbox, to be able to have a name for it, I added aria-label attribute with 'rememberMe' name
    const checkbox = screen.getByRole("checkbox", { name: "rememberMe" });
    const LoginButton = screen.getByRole("button", { name: "Login" });

    // we can also use debug to print the component to the console
    // screen.debug();
    // or debug a part of the component using
    // screen.debug(checkbox);

    expect(userNameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
    expect(LoginButton).toBeInTheDocument();
    expect(LoginButton).toBeDisabled();
  });

  test("Login button is enabled after filling userName and password fields", async () => {
    const user = userEvent.setup();
    render(<Login />);

    const userNameField = screen.getByRole("textbox", { name: "Username" });
    const passwordField = screen.getByLabelText("Password");
    const LoginButton = screen.getByRole("button", { name: "Login" });

    expect(LoginButton).toBeDisabled();
    await user.type(userNameField, "test");
    await user.type(passwordField, "test");
    expect(LoginButton).toBeEnabled();
  });

  test("remember me checkbox can be checked from label clicking", async () => {
    const user = userEvent.setup();
    render(<Login />);

    const checkbox = screen.getByRole("checkbox", { name: "rememberMe" });

    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
