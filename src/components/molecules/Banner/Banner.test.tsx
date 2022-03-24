import { render, screen } from "@testing-library/react";
import Banner from "./Banner";
describe("Banner", () => {
  it("Should render Banner Heading", () => {
    render(<Banner />);
    const HeadingElement = screen.getByText(/Explore Books on entrepreneurship/i);
    expect(HeadingElement).toBeInTheDocument();
  });
  it("Should render Banner content", () => {
    render(<Banner />);
    const ParaElement = screen.getByText(/Everything you need to know about thriving on a shoestring budget,/i);
    expect(ParaElement).toBeInTheDocument();
  });
  it("Should render Banner Image", () => {
    render(<Banner />);
    const imgElement = screen.getByAltText(/banner/i);
    expect(imgElement).toBeInTheDocument();
  });

});
