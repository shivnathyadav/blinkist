import EnterPreneurshipPage from "./EnterpreneurshipPage";
import { ComponentStory } from '@storybook/react';
import CustomThemeProvider from "../../../CustomThemeProvider";
import {BrowserRouter as Router} from "react-router-dom";
export default {
    title:"pages/EnterPreneurshipPage",
    component:EnterPreneurshipPage,
}
const template:ComponentStory<typeof EnterPreneurshipPage>  = () => (
    <Router>
    <CustomThemeProvider>
    <EnterPreneurshipPage />
    </CustomThemeProvider>
    </Router>
);

export const enterPreneurshipPage= template.bind({});
