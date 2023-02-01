import { render, screen } from "@testing-library/react";
import React from "react";
import ProductDetail from "./ProductDetail";
import { RetailProvider } from "./RetailContext";
import testProducts from "src/api/retailProducts";

test("ProductDetail, given initial state, renders placeholder component", () => {
  render(
    <RetailProvider products={testProducts}>
      <ProductDetail />
    </RetailProvider>
  );

  const RetailStoreHeading = screen.getByRole("heading", {
    name: /retail store/i,
  });
  expect(RetailStoreHeading).toBeInTheDocument();
});
