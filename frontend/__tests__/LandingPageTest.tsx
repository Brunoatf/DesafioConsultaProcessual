/* eslint-disable react/display-name */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from "../src/app/page";

jest.mock("../src/app/components/Hero", () => () => (
  <div data-testid="hero-component">Hero Component</div>
));

jest.mock("../src/app/components/About", () => () => (
  <div data-testid="features-component">Features Component</div>
));

describe("LandingPage", () => {
  it("renders the LandingPage component", () => {
    render(<LandingPage />);

    // Check if the Hero component is rendered
    expect(screen.getByTestId("hero-component")).toBeInTheDocument();

    // Check if the Divider is rendered
    expect(screen.getByRole("separator")).toBeInTheDocument();

    // Check if the Features component is rendered
    expect(screen.getByTestId("features-component")).toBeInTheDocument();
  });
});
