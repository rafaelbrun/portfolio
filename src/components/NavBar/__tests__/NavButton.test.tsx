import NavButton from "../NavButton";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("NavButton", () => {
  it("renders a link button", () => {
    render(<NavButton title="Test 1" />);

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
  });
});
