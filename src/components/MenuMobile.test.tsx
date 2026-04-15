import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import MenuMobile from "./MenuMobile";
import { menuList } from "../types/menu-list";

// Mock DarkModeToggle
jest.mock("./DarkModeToggle", () => {
  return function MockDarkModeToggle() {
    return <div data-testid="dark-mode-toggle" />;
  };
});

describe("MenuMobile", () => {
  it("renders the menu button", () => {
    render(<MenuMobile />);
    const menuButton = screen.getByLabelText("menu");
    expect(menuButton).toBeInTheDocument();
  });

  it("opens the menu when the button is clicked", () => {
    render(<MenuMobile />);
    const menuButton = screen.getByLabelText("menu");
    
    fireEvent.click(menuButton);
    
    menuList.forEach((page) => {
      const link = screen.getByText(page.label);
      expect(link).toBeInTheDocument();
      expect(link.closest('a')).toHaveAttribute("href", page.path);
    });
  });

  it("renders the DarkModeToggle", () => {
    render(<MenuMobile />);
    expect(screen.getByTestId("dark-mode-toggle")).toBeInTheDocument();
  });
});
