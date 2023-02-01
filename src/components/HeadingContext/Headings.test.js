import { render } from "@testing-library/react";
import React from "react";
import Headings from "./Headings";
test("Headings, given context, renders heading of suitable level", () => {
  const { container } = render(<Headings />);
  const headingLevel1 = container.querySelector("h1");
  const headingLevel2 = container.querySelectorAll("h2");
  const headingLevel3 = container.querySelectorAll("h3");
  const headingLevel4 = container.querySelectorAll("h4");
  expect(headingLevel1).toBeInTheDocument();
  expect(headingLevel2).toHaveLength(3);
  expect(headingLevel3).toHaveLength(3);
  expect(headingLevel4).toHaveLength(3);
});
