import CardItems from "./Card";
import { ComponentStory } from "@storybook/react";
import CustomThemeProvider from "../../../CustomThemeProvider";
import { BrowserRouter as Router } from "react-router-dom";
export default {
  title: "molecules/Card",
  component: CardItems,
};
const template: ComponentStory<typeof CardItems> = (args) => (
  <Router>
    <CustomThemeProvider>
      <CardItems {...args} />
    </CustomThemeProvider>
  </Router>
);

export const explore = template.bind({});
explore.args = {
  role: "explore",
  title: "Bring Your Human to Work",
  author: "Erica Keswin",
  image: "/assets/img/1.png",
};
export const current = template.bind({});
current.args = {
  role: "current",
  title: "Bring Your Human to Work",
  author: "Erica Keswin",
  image: "/assets/img/2.png",
};
export const finished = template.bind({});
finished.args = {
  role: "finished",
  title: "Bring Your Human to Work",
  author: "Erica Keswin",
  image: "/assets/img/3.png",
};
