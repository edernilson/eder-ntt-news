import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";
import { menuList } from "../../types/menu-list";

describe("Footer", () => {
  it("renders the copyright text with the current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(new RegExp(`© ${currentYear} IA News. Todos os direitos reservados.`, "i"));
    expect(copyrightText).toBeInTheDocument();
  });

  it("renders all menu links from menuList", () => {
    render(<Footer />);
    
    menuList.forEach((page) => {
      const link = screen.getByRole("link", { name: page.label });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", page.path);
    });
  });

  it("has the correct footer role", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });
});
