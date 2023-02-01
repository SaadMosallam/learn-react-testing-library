import { render, screen } from "@testing-library/react";
import React from "react";
import Retail from "./Retail";
import { ErrorBoundary } from "react-error-boundary";
import { RetailProvider } from "./RetailContext";
import testProducts from "src/api/retailProducts";
import user from "@testing-library/user-event";

describe("Retail tests", () => {
  test("Retail, rendered without context provider, throws an error", () => {
    // SpyOn: keeps an eye on the console log method throughout the test
    // mockImplementation: controls what happens when console.error is called
    // we don't want anything specific logged to the console in our test results related to the console for this test.error execution
    // so we pass an empty callback function in mockImplementation
    // ErrorFallback a component we use to receive the error message included in the error thrown by RetailContext
    // ErrorBoundary wrapping Retail gives us control over error thrown by components
    jest.spyOn(console, "error").mockImplementation(() => {});
    const ErrorFallback = ({ error }) => error.message;
    render(
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Retail />
      </ErrorBoundary>
    );

    const errorMessage = screen.getByText(
      /must be used within the RetailProvider/i
    );
    expect(errorMessage).toBeInTheDocument();
    expect(console.error).toHaveBeenCalled();
    console.error.mockRestore();
  });
  test("A user can view product details", async () => {
    render(
      <RetailProvider products={testProducts}>
        <Retail />
      </RetailProvider>
    );
    const firstProduct = testProducts[0];
    await user.click(screen.getByRole("heading", { name: firstProduct.title }));

    expect(
      screen.getAllByRole("heading", { name: firstProduct.title })
    ).toHaveLength(2);
    expect(screen.getByText(firstProduct.description)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: `$${firstProduct.price}` }));
  });
  async function addFirstItemToCart() {
    const firstProduct = testProducts[1];
    const firstProductTitle = screen.getByRole("heading", {
      name: firstProduct.title,
    });
    await user.click(firstProductTitle);
    await user.click(screen.getByRole("button", { name: /add to cart/i }));
  }
  test("A user can add a product to the cart", async () => {
    render(
      <RetailProvider products={testProducts}>
        <Retail />
      </RetailProvider>
    );
    await addFirstItemToCart();
    expect(screen.getByText(/1 items/i)).toBeInTheDocument();
  });
  test("A user can update the quantity for cart items", async () => {
    render(
      <RetailProvider products={testProducts}>
        <Retail />
      </RetailProvider>
    );
    const firstProduct = testProducts[1];
    const firstProductTitle = screen.getByRole("heading", {
      name: firstProduct.title,
    });
    await user.click(firstProductTitle);
    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    const input = screen.getByRole("spinbutton");
    await user.clear(input);
    await user.type(input, "4");
    await user.click(addToCartButton);
    const updatedQty = screen.getByText(`$${firstProduct.price * 4}`);
    expect(updatedQty).toBeInTheDocument();
  });
  test("A user cannot submit a quantity greater than 10", async () => {
    render(
      <RetailProvider products={testProducts}>
        <Retail />
      </RetailProvider>
    );
    const firstProduct = testProducts[1];
    const firstProductTitle = screen.getByRole("heading", {
      name: firstProduct.title,
    });
    await user.click(firstProductTitle);
    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    const input = screen.getByRole("spinbutton");
    await user.clear(input);
    await user.type(input, "15");
    await user.click(addToCartButton);
    const updatedQty = screen.getByText(/0 items/i);
    expect(updatedQty).toBeInTheDocument();
  });
  test("A user cannot submit a quantity less than 1", async () => {
    render(
      <RetailProvider products={testProducts}>
        <Retail />
      </RetailProvider>
    );
    const firstProduct = testProducts[1];
    const firstProductTitle = screen.getByRole("heading", {
      name: firstProduct.title,
    });
    await user.click(firstProductTitle);
    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    const input = screen.getByRole("spinbutton");
    await user.clear(input);
    await user.type(input, "0");
    await user.click(addToCartButton);
    const updatedQty = screen.getByText(/0 items/i);
    expect(updatedQty).toBeInTheDocument();
  });
  test("A user can add an item to favorites", async () => {
    render(
      <RetailProvider products={testProducts}>
        <Retail />
      </RetailProvider>
    );
    await addFirstItemToCart();
    const addToFavoritesButton = screen.getByRole("button", {
      name: /add to favorites/i,
    });
    await user.click(addToFavoritesButton);
    const addedToFavoritesButton = screen.getByRole("button", {
      name: /added to favorites/i,
    });
    expect(addedToFavoritesButton).toBeInTheDocument();
    expect(addedToFavoritesButton).toHaveClass("btn-warning");
  });
});
