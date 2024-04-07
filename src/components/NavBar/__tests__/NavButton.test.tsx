import NavButton from "../NavButton";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Tabs } from "~/components/Sections/types";

describe("NavButton", () => {
  it("renders a link button", () => {
    render(<NavButton title={Tabs.CAREER} />);

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
  });
});
