import {screen, render, fireEvent} from "@testing-library/react";
import CustomTabs from "./CustomTabs";
describe("Tabs",()=>{
    it("should consists of currently reading tab",()=>{
        render(<CustomTabs/>);
        const currentlyReadingTab = screen.getByRole('tab',{name:/currently reading/i});
        expect(currentlyReadingTab).toBeInTheDocument();
    })
    it("should have green indicator color for currently reading tab by default",()=>{
        render(<CustomTabs/>);
        const currentlyReadingTab = screen.getByRole('tab',{name:/currently reading/i});
        expect(currentlyReadingTab).toHaveStyle("color:rgb(25, 118, 210)");
    })
    it("should have white indicator color for finished reading tab by default",()=>{
        render(<CustomTabs/>);
        const finishedReadingTab = screen.getByRole('tab',{name:/finished/i});
        expect(finishedReadingTab).toHaveStyle("color:rgba(0, 0, 0, 0.6)");
    })
    it("should consists of finished reading tab",()=>{
        render(<CustomTabs/>);
        const finishedReadingTab = screen.getByRole('tab',{name:/finished/i});
        expect(finishedReadingTab).toBeInTheDocument();
    })
    it("should have white indicator color for currently reading tab on click of finished reading tab",()=>{
        render(<CustomTabs/>);
        const finishedReadingTab = screen.getByRole('tab',{name:/finished/i});
        fireEvent.click(finishedReadingTab);
        const currentlyReadingTab = screen.getByRole('tab',{name:/currently reading/i});
        expect(currentlyReadingTab).toHaveStyle("color:rgba(0, 0, 0, 0.6)");
    })
    it("should have green indicator color for finished reading tab on click of finished reading tab",()=>{
        render(<CustomTabs/>);
        const finishedReadingTab = screen.getByRole('tab',{name:/finished/i});
        fireEvent.click(finishedReadingTab);
        expect(finishedReadingTab).toHaveStyle("color:rgb(25, 118, 210)");
    })
})