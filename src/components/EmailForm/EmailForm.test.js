import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmailForm from "./EmailForm";

describe("Email form tests", () => {
  test("Email form renders email correctly", async () => {
    const user = userEvent.setup();
    render(<EmailForm />);

    const emailInput = screen.getByRole("textbox", { name: /username/i });
    const emailAttachedString = screen.getByText(/@software-plus\.com/i);

    expect(emailInput).toBeInTheDocument();
    expect(emailAttachedString).toBeInTheDocument();

    await user.type(emailInput, "saad");
    await user.keyboard("{Enter}");
    const generatedEmail = screen.getByText("saad@software-plus.com");

    expect(generatedEmail).toBeInTheDocument();
  });
});
