import { screen, render, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
function renderHeader() {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

describe("Header Component", () => {
  it("should render explore component", () => {
    renderHeader();
    const exploreComponent = screen.getByTestId("explorebutton");
    expect(exploreComponent).toBeInTheDocument();
  });
  it("should render MyLibrary Button", () => {
    renderHeader();
    const mylibraryButton = screen.getByRole("button", { name: /mylibrary/i });
    expect(mylibraryButton).toBeInTheDocument();
  });
  it("should Mylibrary on click naviagate to homepage", () => {
    renderHeader();
    const mylibraryButton = screen.getByRole("button", { name: /mylibrary/i });
    fireEvent.click(mylibraryButton);
    expect(window.location.pathname).toBe("/");
  });
  it("should have Account details button", () => {
    renderHeader();
    const Button = screen.getByRole("button", { name: /Account details/i });
    expect(Button).toBeInTheDocument();
  });
  it("should have login button on click of AccountDetails button", () => {
    renderHeader();
    const Button = screen.getByRole("button", { name: /Account details/i });
    fireEvent.click(Button);
    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });
});
