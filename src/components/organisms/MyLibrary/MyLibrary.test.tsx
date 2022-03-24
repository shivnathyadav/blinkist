import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import MyLibrary from "./MyLibrary";
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
function renderMyLibrary() {
  render(
    <BrowserRouter>
      <MyLibrary />
    </BrowserRouter>
  );
}

describe("MyLibrary", () => {
  describe("Currently reading tab", () => {
    it("should render the card named loving your business", async () => {
      mockedAxios.get.mockResolvedValue(Promise.resolve(response));
      renderMyLibrary();
      const cardElement = await screen.findByTestId("card-17");
      await waitFor(() => {
        expect(cardElement).toBeInTheDocument();
      });
    });
    it("should consist of currently reading tab", async () => {
      mockedAxios.get.mockResolvedValue(Promise.resolve(response));
      renderMyLibrary();
      const currentlyReadingTab = screen.getByRole("tab", {
        name: /currently reading/i,
      });
      await waitFor(() => {
        expect(currentlyReadingTab).toBeTruthy();
      });
    });
    it("should navigate to book details page on click the card", async () => {
      mockedAxios.get.mockResolvedValue(Promise.resolve(response));
      renderMyLibrary();
      const cardElement = await screen.findByTestId("card-17");
      fireEvent.click(cardElement);
      await waitFor(() => {
        expect(window.location.pathname).toBe("/book");
      });
    });
    it("should consist two currently reading cards", async () => {
      mockedAxios.get.mockResolvedValue(Promise.resolve(response));
      renderMyLibrary();
      const cardElements = await screen.findAllByTestId(/current/i);
      await waitFor(() => {
        expect(cardElements.length).toBe(2);
      });
    });
  });
  describe("finished reading tab", () => {
    it("should consists of finished reading tab", async () => {
      mockedAxios.get.mockResolvedValue(Promise.resolve(response));
      renderMyLibrary();
      const finishedReadingTab = screen.getByRole("tab", { name: /finished/i });
      await waitFor(() => {
        expect(finishedReadingTab).toBeInTheDocument();
      });
    });
    it("should show three finished cards on click of finished reading tab", async () => {
      mockedAxios.get.mockResolvedValue(Promise.resolve(response));
      renderMyLibrary();
      const finishedReadingTab = screen.getByRole("tab", { name: /finished/i });
      fireEvent.click(finishedReadingTab);
      const cardElements = await screen.findAllByTestId("finished");
      await waitFor(() => {
        expect(cardElements.length).toBe(3);
      });
    });
    it("should have eat better feel better text on click of finished reading tab", async () => {
      mockedAxios.get.mockResolvedValue(Promise.resolve(response));
      renderMyLibrary();
      const finishedReadingTab = screen.getByRole("tab", { name: /finished/i });
      fireEvent.click(finishedReadingTab);
      const paraElement = await screen.findByText(/eat better, feel better/i);
      await waitFor(() => {
        expect(paraElement).toBeInTheDocument();
      });
    });

  });
});
