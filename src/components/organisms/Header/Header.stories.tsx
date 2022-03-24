import Header from './Header';
import { ComponentStory } from "@storybook/react";
import CustomThemeProvider from "../../../CustomThemeProvider";


import { BrowserRouter as Router} from "react-router-dom";
  

export default {
  title: "organisms/Header",
  component:Header,
};
const template: ComponentStory<typeof Header> = (args) => (
    <Router>
    <CustomThemeProvider>
      <Header />
    </CustomThemeProvider>
    </Router>
  );

export const header = template.bind({});

