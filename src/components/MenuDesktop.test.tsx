import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuDesktop from "./MenuDesktop";
import { menuList } from "../types/menu-list";

// Mock DarkModeToggle
jest.mock("./DarkModeToggle", () => {
  return function MockDarkModeToggle() {
    return <div data-testid="dark-mode-toggle" />;
  };
});

describe("MenuDesktop", () => {
  it("renders all menu links", () => {
    render(<MenuDesktop />);
    
    menuList.forEach((page) => {
      const link = screen.getByText(page.label);
      expect(link).toBeInTheDocument();
      expect(link.closest('a')).toHaveAttribute("href", page.path);
    });
  });

  it("renders the DarkModeToggle", () => {
    render(<MenuDesktop />);
    expect(screen.getByTestId("dark-mode-toggle")).toBeInTheDocument();
  });
});
