import { screen, render, fireEvent } from "@testing-library/react";
import BookDetails from "./BookDetails";
import { BrowserRouter } from "react-router-dom";
function renderBookDetails() {
  render(
    <BrowserRouter>
      <BookDetails />
    </BrowserRouter>
  );
}
describe("BookDetails", () => {
  it("render BookDetails title", () => {
    renderBookDetails();
    const HeadingElement = screen.getByText("Beyond Entrepreneurship 2.0");
    expect(HeadingElement).toBeInTheDocument();
  });
  it("render Turning Your Business into an Enduring Great Company", () => {
    renderBookDetails();
    const subtitleElement = screen.getByText("Turning Your Business into an Enduring Great Company");
    expect(subtitleElement).toBeInTheDocument();
  });
  it("render By Jim Collins and Bill Lazier", () => {
    renderBookDetails();
    const subtitleElement = screen.getByText("By Jim Collins and Bill Lazier");
    expect(subtitleElement).toBeInTheDocument();
  }); 
  it("render 15-minutes read", () => {
    renderBookDetails();
    const subtitleElement = screen.getByText("15-minutes read");
    expect(subtitleElement).toBeInTheDocument();
  });
  it("render image beyond enterpreneurship", () => {
    renderBookDetails();
    const imgElement = screen.getByAltText("beyond enterpreneurship");
    expect(imgElement).toBeInTheDocument();
  });
  it("render a finished reading button", () => {
    renderBookDetails();
    const ButtonElement = screen.getByRole("button", {
      name: /Finished Reading/i,
    });
    expect(ButtonElement).toBeInTheDocument();
  });
  it("should naviagate to my Library", () => {
    renderBookDetails();
    const ButtonElement = screen.getByRole("button", {
      name: /Finished Reading/i,
    });
    fireEvent.click(ButtonElement);
    expect(window.location.pathname).toBe("/");
  });
  it("should have read now button",()=>{
    renderBookDetails();
    const buttonElement = screen.getByRole("button",{name:/read now/i});
    expect(buttonElement).toBeTruthy();
  })
  it("should have send to kindle button",()=>{
    renderBookDetails();
    const buttonElement = screen.getByRole("button",{name:/send to kindle/i});
    expect(buttonElement).toBeTruthy();
  })
  it("should have synopsis tab",()=>{
    renderBookDetails();
    const synopsisTab = screen.getByRole("tab",{name:/synopsis/i});
    expect(synopsisTab).toBeTruthy();
  })
  it("should have synopsis tab value as today’s business world",()=>{
    renderBookDetails();
    const textElement = screen.getByText(/today’s business world/i);
    expect(textElement).toBeTruthy();
  })
  it("should have who tab",()=>{
    renderBookDetails();
    const whoTab = screen.getByRole("tab",{name:/who/i});
    expect(whoTab).toBeTruthy();
  })
  it("should have synopsis tab value as Far far away",()=>{
    renderBookDetails();
    const whoTab = screen.getByRole("tab",{name:/who/i});
    fireEvent.click(whoTab);
    const textElement = screen.getByText(/Far far away/i);
    expect(textElement).toBeTruthy();
  })
  it("should have about tab",()=>{
    renderBookDetails();
    const aboutTab = screen.getByRole("tab",{name:/about/i});
    expect(aboutTab).toBeTruthy();
  })
  it("should have synopsis tab value as Even the all-powerful",()=>{
    renderBookDetails();
    const aboutTab = screen.getByRole("tab",{name:/about/i});
    fireEvent.click(aboutTab);
    const textElement = screen.getByText(/Even the all-powerful/i);
    expect(textElement).toBeTruthy();
  })
  it("should display value starts with far on click who tab",()=>{
    renderBookDetails();
    const whoTab = screen.getByRole("tab",{name:/who/i});
    fireEvent.click(whoTab);
    expect(screen.getByText(/Far far away, behind the word mountains/i)).toBeTruthy();
  })
  it("should display value starts with Even the all-powerful on click about tab",()=>{
    renderBookDetails();
    const aboutTab = screen.getByRole("tab",{name:/about/i});
    fireEvent.click(aboutTab);
    expect(screen.getByText(/Even the all-powerful/i)).toBeTruthy();
  })
});
