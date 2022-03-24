import { screen, render, waitFor } from "@testing-library/react";
import EnterPreneurshipPage from "./EnterpreneurshipPage";
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
    value: 50,
  },
  {
    id: 17,
    title: "Loving Your Business",
    author: "Debbie King",
    image: "/assets/img/6.png",
    status: "explore",
    value: 0,
  },
];
const response = { data: data };
function renderEnterPreneurshipPage() {
  render(
    <BrowserRouter>
      <EnterPreneurshipPage />
    </BrowserRouter>
  );
}
describe("EnterPreneurshipPage", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue(Promise.resolve(response));
  });
  it("should have header organisms", async () => {
    renderEnterPreneurshipPage();
    const headerOrganisms = screen.getByTestId(/header/i);
    await waitFor(() => {
      expect(headerOrganisms).toBeInTheDocument();
    });
  });
  it("should have enterprenurship organisms", async () => {
    renderEnterPreneurshipPage();
    const enterprenurshipOrganisms = await screen.findByTestId(
      /Enterpreneurship/i
    );
    await waitFor(() => {
      expect(enterprenurshipOrganisms).toBeInTheDocument();
    });
  });
  it("should have footer organisms", async () => {
    renderEnterPreneurshipPage();
    const footerOrganisms = screen.getByTestId(/footer/i);
    await waitFor(() => {
      expect(footerOrganisms).toBeInTheDocument();
    });
  });
});
