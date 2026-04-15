import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";

// Mock sub-components
jest.mock("./Logo", () => {
  return function MockLogo({ title }: { title: string }) {
    return <div data-testid="mock-logo">{title}</div>;
  };
});

jest.mock("./MenuMobile", () => {
  return function MockMenuMobile() {
    return <div data-testid="mock-menu-mobile" />;
  };
});

jest.mock("./MenuDesktop", () => {
  return function MockMenuDesktop() {
    return <div data-testid="mock-menu-desktop" />;
  };
});

describe("Header", () => {
  it("renders the Logo with the correct title", () => {
    render(<Header />);
    const logo = screen.getByTestId("mock-logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveTextContent("Portal de Notícias");
  });

  it("renders the MenuMobile component", () => {
    render(<Header />);
    expect(screen.getByTestId("mock-menu-mobile")).toBeInTheDocument();
  });

  it("renders the MenuDesktop component", () => {
    render(<Header />);
    expect(screen.getByTestId("mock-menu-desktop")).toBeInTheDocument();
  });
});
