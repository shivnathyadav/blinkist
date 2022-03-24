import Enterpreneurship from "./Enterpreneurship";
import { ComponentStory } from '@storybook/react';
import CustomThemeProvider from "../../../CustomThemeProvider";
import { BrowserRouter as Router} from "react-router-dom";
export default {
    title:"organisms/Enterpreneurship",
    component:Enterpreneurship,
}
const template:ComponentStory<typeof Enterpreneurship>  = (args) => (
    <Router>
    <CustomThemeProvider>
    <Enterpreneurship />
    </CustomThemeProvider>
    </Router>
);

export const enterpreneurship= template.bind({});
