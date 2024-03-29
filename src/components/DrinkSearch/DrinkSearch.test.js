import { render, screen } from "@testing-library/react";
import React from "react";
import user from "@testing-library/user-event";
import DrinkSearch from "./DrinkSearch";
import { mockServer } from "src/mocks/server";
import { rest } from "msw";

beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());

describe("test drinks search", () => {
  test("drinks search displays results", async () => {
    render(<DrinkSearch />);

    const searchInput = screen.getByRole("searchbox");
    const searchButton = screen.getByRole("button", { name: /search/i });

    await user.type(searchInput, "test");
    await user.click(searchButton);

    const drink = await screen.findByText("test drink");
    expect(drink).toBeInTheDocument();
    const heading = screen.getByRole("heading", { name: /test drink/i });
    const ingredients = screen.getByText(/test ingredient/i);
    const instructions = screen.getByText(/test instructions/i);
    expect(heading).toBeInTheDocument();
    expect(instructions).toBeInTheDocument();
    expect(ingredients).toBeInTheDocument();
  });

  test("drinks search with no drink results", async () => {
    // we can modify the response of our MSW server to set up the scenario
    mockServer.use(
      rest.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php",
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              drinks: null,
            })
          );
        }
      )
    );

    render(<DrinkSearch />);

    const searchInput = screen.getByRole("searchbox");
    const searchButton = screen.getByRole("button", { name: /search/i });

    await user.type(searchInput, "test");
    await user.click(searchButton);

    const noResults = await screen.findByRole("heading", {
      name: /No drinks found/i,
    });
    expect(noResults).toBeInTheDocument();
  });

  test("drinks search when service unavailable", async () => {
    mockServer.use(
      rest.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php",
        (req, res, ctx) => {
          return res(ctx.status(505));
        }
      )
    );

    render(<DrinkSearch />);

    const searchInput = screen.getByRole("searchbox");

    await user.type(searchInput, "test, {enter}");

    const serviceUnavailable = await screen.findByRole("heading", {
      name: /Service unavailable/i,
    });
    expect(serviceUnavailable).toBeInTheDocument();
  });

  test("prevents GET request when search input empty", async () => {
    render(<DrinkSearch />);

    const searchInput = screen.getByRole("searchbox");

    user.type(searchInput, "{enter}");

    // we expect no element with the role of heading on the screen
    // the queryBy is preferred when you want to verify that specific elements are not on the screen
    // unlike getBy* and findBy* queries, queryBy* queries do not throw and error and fail the test when an element is not found
    // queryBy* return null when an element is not found, allowing you to assert the expected absence of elements in the DOM without test failing
    const heading = screen.queryByRole("heading", { name: /test drink/i });
    expect(heading).not.toBeInTheDocument();
  });
});
