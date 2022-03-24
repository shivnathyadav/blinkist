import { screen, render, fireEvent } from "@testing-library/react";
import Explore from "./Explore";

import { BrowserRouter } from "react-router-dom";
function renderExplore() {
  render(
    <BrowserRouter>
      <Explore />
    </BrowserRouter>
  );
}

describe("Explore component", () => {
  it("should render explore button", () => {
    renderExplore();
    const ButtonElement = screen.getByRole("button", { name: /explore/i });
    expect(ButtonElement).toBeInTheDocument();
  });
  it("should have expandMoreIcon", () => {
    renderExplore();
    const more = screen.getByTestId("expandmore");
    expect(more).toBeInTheDocument();
  });
  it("should explore button to be clickable", () => {
    renderExplore();
    const ButtonElement = screen.getByRole("button", { name: /explore/i });
    fireEvent.click(ButtonElement);
    const text = screen.getByText(/Enterpreneurship/i);
    expect(text).toBeInTheDocument();
  });
  it("should have less icon on click explore button", () => {
    renderExplore();
    const ButtonElement = screen.getByRole("button", { name: /explore/i });
    fireEvent.click(ButtonElement);
    const less = screen.getByTestId("expandless");
    expect(less).toBeInTheDocument();
  });
  it("should navigate to bookdetailspage on click enterpreneurship link", () => {
    renderExplore();
    const ButtonElement = screen.getByRole("button", { name: /explore/i });
    fireEvent.click(ButtonElement);
    const text = screen.getByText(/Enterpreneurship/i);
    fireEvent.click(text);
    expect(window.location.pathname).toBe("/enterpreneurship");
  });
  it("should have different links", () => {
    renderExplore();
    const ButtonElement = screen.getByRole("button", { name: /explore/i });
    fireEvent.click(ButtonElement);
    const textElements = screen.getAllByTestId("text");
    expect(textElements.length).toBe(18);
  });
  it("should have different links on click navigate to enterpreneurship page", () => {
    renderExplore();
    const ButtonElement = screen.getByRole("button", { name: /explore/i });
    fireEvent.click(ButtonElement);
    const textElements = screen.getAllByTestId("text");
    for (var i = 0; i < textElements.length; i++) {
      fireEvent.click(textElements[i]);
      expect(window.location.pathname).toBe("/enterpreneurship");
    }
  });
  it("should Body is white", () => {
    renderExplore();
    expect(document.body).toHaveStyle("background-color: white");
  });
  it("render a backdrop onclick", () => {
    renderExplore();
    const backdropElement = screen.getByTestId("backdrop");
    fireEvent.click(backdropElement);
    const explore = screen.getByRole("button", { name: /explore/i });
    expect(explore).toBeInTheDocument();
  });
});
