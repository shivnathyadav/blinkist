import { screen, render, waitFor } from "@testing-library/react";
import MyLibraryPage from "./MyLibraryPage";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import "@testing-library/jest-dom";
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
const data = [
    {
      id: 16,
      title: "Lives of the Stoics",
      author: "Ryan Holiday, Stephen Hansel",
      image: "/assets/img/5.png",
      status: "current",
      value: 50,
    },
    {
      id: 17,
      title: "Loving Your Business",
      author: "Debbie King",
      image: "/assets/img/6.png",
      status: "current",
      value: 0,
    },
    {
      id: 11,
      title: "Eat Better, Feel Better",
      author: "Giada De Laurentiis",
      image: "/assets/img/8.png",
      status: "finished",
    },
    {
      id: 2,
      title: "Beyond Entrepreneurship",
      author: "Jim Collins & Bill Lazier",
      image: "/assets/img/2.png",
      status: "finished",
    },
    {
      id: 3,
      title: "Beyond Entrepreneurship",
      author: "Jim Collins & Bill Lazier",
      image: "/assets/img/2.png",
      status: "finished",
    },
  ];
const response = { data: data };
function renderMyLibraryPage() {
  render(
    <BrowserRouter>
      <MyLibraryPage />
    </BrowserRouter>
  );
}
describe("MyLibraryPage", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
  });
  it("should have header organisms", async () => {
    renderMyLibraryPage();
    const headerOrganisms = screen.getByTestId(/header/i);
    await waitFor(() => {
      expect(headerOrganisms).toBeInTheDocument();
    });
  });
  it("should have MyLibrary organisms", async () => {
    renderMyLibraryPage();
    const MyLibraryOrganisms = await screen.findByTestId(
      /Mylibrary/i
    );
    await waitFor(() => {
      expect(MyLibraryOrganisms).toBeInTheDocument();
    });
  });
  it("should have footer organisms", async () => {
    renderMyLibraryPage();
    const footerOrganisms = screen.getByTestId(/footer/i);
    await waitFor(() => {
      expect(footerOrganisms).toBeInTheDocument();
    });
  });
});
