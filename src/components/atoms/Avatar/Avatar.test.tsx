import { render, screen } from "@testing-library/react";
import CustomAvatar from "./CustomAvatar";

it("renders a avatar", () => {
  render(<CustomAvatar />);
  const ReactElement = screen.getByTestId("avatar");
  expect(ReactElement).toBeInTheDocument();
});
