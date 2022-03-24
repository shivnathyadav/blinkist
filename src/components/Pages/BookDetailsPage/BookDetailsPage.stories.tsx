import BookDetailsPage from "./BookDetailsPage";
import { ComponentStory } from '@storybook/react';
import CustomThemeProvider from "../../../CustomThemeProvider";
import {BrowserRouter as Router} from "react-router-dom";
export default {
    title:"pages/BookDetailsPage",
    component:BookDetailsPage,
}
const template:ComponentStory<typeof BookDetailsPage>  = () => (
    <Router>
    <CustomThemeProvider>
    <BookDetailsPage />
    </CustomThemeProvider>
    </Router>
);

export const BookdetailsPage= template.bind({});
