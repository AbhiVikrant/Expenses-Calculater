import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App.js";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/my expenses/i);
  expect(linkElement).toBeInTheDocument();
});
