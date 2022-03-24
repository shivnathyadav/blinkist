import BookDetails from "./BookDetails";
import { ComponentStory } from '@storybook/react';
import CustomThemeProvider from "../../../CustomThemeProvider";
import {BrowserRouter as Router} from "react-router-dom";
export default {
    title:"organisms/BookDetails",
    component:BookDetails,
}
const template:ComponentStory<typeof BookDetails>  = (args) => (
    <Router>
    <CustomThemeProvider>
    <BookDetails />
    </CustomThemeProvider>
    </Router>
);

export const bookDetails = template.bind({});
