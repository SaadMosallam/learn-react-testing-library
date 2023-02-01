import { render, screen } from "@testing-library/react";
import React from "react";
import testProducts from "src/api/retailProducts";
import Product from "./Product";
import { RetailProvider } from "./RetailContext";

test("Product, given product properties, renders to screen", () => {
  const product = testProducts[0];
  render(
    <RetailProvider products={testProducts}>
      <Product {...product} />
    </RetailProvider>
  );

  const productTitle = screen.getByRole("heading", { name: product.title });
  const productPrice = screen.getByText(new RegExp(`${product.price}`));

  expect(productTitle).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
});
