import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Logo from "./Logo";

// jest.mock("next/link", () => ({
//   __esModule: true,
//   default: ({ children, href }: { children: React.ReactNode; href: string }) => (
//     <a href={href}>{children}</a>
//   ),
// }));

describe("Logo", () => {
  it("renders the title and links to the home page", () => {
    render(<Logo title="My Site" />);

    const link = screen.getByRole("link", { name: /my site/i });

    expect(link).toHaveAttribute("href", "/");
    expect(link).toHaveTextContent("My Site");
    expect(link).toHaveStyle({
      textDecoration: "none",
      color: "inherit",
    });
  });
});