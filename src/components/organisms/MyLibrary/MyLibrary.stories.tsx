import Library from "./MyLibrary";
import { ComponentStory } from '@storybook/react';
import CustomThemeProvider from "../../../CustomThemeProvider";
import {BrowserRouter as Router} from "react-router-dom";
export default {
    title:"organisms/MyLibrary",
    component:Library,
}
const template:ComponentStory<typeof Library>  = (args) => (
    <Router>
    <CustomThemeProvider>
    <Library />
    </CustomThemeProvider>
    </Router>
);

export const MyLib = template.bind({});
