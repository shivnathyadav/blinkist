import MyLibraryPage from "./MyLibraryPage";
import { ComponentStory } from '@storybook/react';
import CustomThemeProvider from "../../../CustomThemeProvider";
import {BrowserRouter as Router} from "react-router-dom";
export default {
    title:"pages/MyLibraryPage",
    component:MyLibraryPage,
}
const template:ComponentStory<typeof MyLibraryPage>  = () => (
    <Router>
    <CustomThemeProvider>
    <MyLibraryPage />
    </CustomThemeProvider>
    </Router>
);

export const myLibraryPage= template.bind({});
