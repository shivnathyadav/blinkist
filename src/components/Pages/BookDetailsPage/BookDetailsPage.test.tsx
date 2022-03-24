import { screen, render } from "@testing-library/react";
import BookDetailsPage from "./BookDetailsPage";
import { BrowserRouter } from "react-router-dom";
function renderBookDetailsPage() {
  render(
    <BrowserRouter>
      <BookDetailsPage />
    </BrowserRouter>
  );
}
describe("BookDetailsPage", () => {
  it("should have header organisms", () => {
    renderBookDetailsPage();
    const headerOrganisms = screen.getByTestId(/header/i);
    expect(headerOrganisms).toBeInTheDocument();
  });
  it("should have bookDetails organisms", () => {
    renderBookDetailsPage();
    const bookDetailsOrganisms = screen.getByTestId(/bookdetails/i);
    expect(bookDetailsOrganisms).toBeInTheDocument();
  });
  it("should have footer organisms", () => {
    renderBookDetailsPage();
    const footerOrganisms = screen.getByTestId(/footer/i);
    expect(footerOrganisms).toBeInTheDocument();
  });
});
