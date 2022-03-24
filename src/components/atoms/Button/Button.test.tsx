import { render, screen } from "@testing-library/react";
import CustomButton from "./CustomButton";

it("renders a Button", () => {
  render(<CustomButton />);
  const ReactElement = screen.getByTestId("customButton");
  expect(ReactElement).toBeInTheDocument();
});
