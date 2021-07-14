import React from "react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import { cleanup, render, screen } from "@testing-library/react";

describe("Home", () => {
  test("renders Home Component", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByText("Virtual Reality")).toHaveClass(
      "home-main__image-description"
    );
  });
});
