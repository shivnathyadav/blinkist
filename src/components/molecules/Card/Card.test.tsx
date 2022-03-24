import {fireEvent, render,screen} from "@testing-library/react";
import CardItems from "./Card";
const book={
    "role": "current",
    "title": "Bring Your Human to Work",
    "author": "Erica Keswin",
    "value": 15,
    "image":"/assests/img/1.png",
}

describe("cardItems",()=>{
    it("renders a resting Card",()=>{
        
        render(<CardItems title={book.title} author={book.author} role={book.role} image={book.image} value={book.value} />);
        const cardElement = screen.getByTestId("current");
        expect(cardElement).toBeInTheDocument();
    })
    it("renders a explore card",()=>{
        render(<CardItems title={book.title} author={book.author} role="explore" image={book.image} value={book.value} />);
        const ButtonElement = screen.getByTestId("add");
        expect(ButtonElement).toBeInTheDocument();
    })
   
    it("render a finished card",()=>{
        render(<CardItems title={book.title} author={book.author} role="finished" image={book.image} value={book.value}  />);
        const ButtonElement = screen.getByRole("button",{name:/finished/i});
        fireEvent.click(ButtonElement);
        expect(window.location.pathname).toBe('/');
    })
})