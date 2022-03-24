import {screen,render} from "@testing-library/react";
import Footer from "./Footer";
describe("footer",()=>{
  it("render footer title",()=>{
    render(<Footer/>);
    const paraElement = screen.getByText("Big ideas in small packages Start learning now");
    expect(paraElement).toBeInTheDocument();
  });
  it("render copyright from footer",()=>{
    render(<Footer/>);
    const paraElement = screen.getByText("© Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy Policies");
    expect(paraElement).toBeInTheDocument();
  })
})