import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import Enterpreneurship from "./Enterpreneurship";
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
    status: "explore",
    category: "blink",
    value: 50,
  },
  {
    id: 17,
    title: "Loving Your Business",
    author: "Debbie King",
    image: "/assets/img/6.png",
    status: "explore",
    category: "added",
    value: 0,
  },
  {
    title: "Employee to Entrepreneur",
    author: "Steve Glaveski",
    category: "featured",
    image: "/assets/img/11.png",
    value: 0,
    status: "explore",
    id: 18,
  },
];
const response = { data: data };
function renderEnterPreneurship() {
  render(
    <BrowserRouter>
      <Enterpreneurship />
    </BrowserRouter>
  );
}

describe("input type to be worked", () => {
  it("should render input", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    renderEnterPreneurship();

    const textElement = screen.getByPlaceholderText(
      "Search by Title or Author"
    );
    await waitFor(() => {
      expect(textElement).toBeInTheDocument();
    });
  });
  it("should be able to type into input", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    renderEnterPreneurship();
    const inputElement = screen.getByPlaceholderText(
      "Search by Title or Author"
    );
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: "Beyond" } });
    await waitFor(() => {
      expect((inputElement as HTMLInputElement).value).toBe("Beyond");
    });
  });
});

describe("Enterpreneurship", () => {
  it("should render the card named loving your business", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    renderEnterPreneurship();
    const cardElement = await screen.findByTestId("card-17");
    await waitFor(() => {
      expect(cardElement).toBeInTheDocument();
    });
  });
  it("should render two cards", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    renderEnterPreneurship();
    const cardElements = await screen.findAllByTestId(/card/i);
    await waitFor(() => {
      expect(cardElements.length).toBe(3);
    });
  });
  it("should navigate to book details page on click the card", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    renderEnterPreneurship();
    const cardElement = await screen.findByTestId("card-17");
    fireEvent.click(cardElement);
    await waitFor(() => {
      expect(window.location.pathname).toBe("/book");
    });
  });
  it("should have trending blink category", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    renderEnterPreneurship();
    const textElememt = await screen.findByText(/trending blink/i);
    await waitFor(() => {
      expect(textElememt).toBeInTheDocument();
    });
  });
  it("should have just added category", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    renderEnterPreneurship();
    const textElememt = await screen.findByText(/just added/i);
    await waitFor(() => {
      expect(textElememt).toBeInTheDocument();
    });
  });
  it("should have featured audio blink category", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    renderEnterPreneurship();
    const textElememt = await screen.findByText(/featured audio blink/i);
    await waitFor(() => {
      expect(textElememt).toBeInTheDocument();
    });
  });
  it("should render one book in trending blink category", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    renderEnterPreneurship();
    const gridElement = await screen.findAllByTestId("trendingBlinks");
    await waitFor(() => {
      expect(gridElement.length).toBe(1);
    });
  });
  it("should render one book in just added category", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    renderEnterPreneurship();
    const gridElement = await screen.findAllByTestId("justAdded");
    await waitFor(() => {
      expect(gridElement.length).toBe(1);
    });
  });
  it("should render one book in featured category", async () => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
    renderEnterPreneurship();
    const gridElement = await screen.findAllByTestId("featuredAudio");
    await waitFor(() => {
      expect(gridElement.length).toBe(1);
    });
  });
});
