import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

it("renders a Logo", () => {
  render(<Logo />);
  const ReactElement = screen.getByTitle(/logo/i);
  expect(ReactElement).toBeInTheDocument();
});
