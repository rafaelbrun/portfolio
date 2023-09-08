import NavBar from "../NavBar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("NavBar", () => {
  it("renders a navbar", () => {
    render(<NavBar />);

    const navbar = screen.getByRole("menubar");

    expect(navbar).toBeInTheDocument();
  });
});
