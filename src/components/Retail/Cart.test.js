import React from "react";
import { render, screen } from "@testing-library/react";
import { RetailProvider } from "./RetailContext";
import Cart from "./Cart";
import testProducts from "src/api/retailProducts";
test("Cart, given initial render, returns empty cart", () => {
  render(
    <RetailProvider products={testProducts}>
      <Cart />
    </RetailProvider>
  );
  const numberOfItemsInCart = screen.getByText(/0 items/i);
  const subTotal = screen.getByText(/\$0.00/i);
  expect(numberOfItemsInCart).toBeInTheDocument();
  expect(subTotal).toBeInTheDocument();
});
