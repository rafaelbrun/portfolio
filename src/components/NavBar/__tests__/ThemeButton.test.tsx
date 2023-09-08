import ThemeButton from "../ThemeButton";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ThemeButton", () => {
  it("renders a theme button", () => {
    render(<ThemeButton />);

    const link = screen.getByRole("button");

    expect(link).toBeInTheDocument();
  });
});
