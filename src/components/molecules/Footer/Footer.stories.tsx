import Footer from './Footer';
import { ComponentStory } from "@storybook/react";
import CustomThemeProvider from "../../../CustomThemeProvider";


import { BrowserRouter as Router} from "react-router-dom";
  

export default {
  title: "molecules/Footer",
  component:Footer,
};
const template: ComponentStory<typeof Footer> = (args) => (
    <Router>
    <CustomThemeProvider>
      <Footer />
    </CustomThemeProvider>
    </Router>
  );

export const footer = template.bind({});

