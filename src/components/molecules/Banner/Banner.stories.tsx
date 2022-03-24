import Banner from './Banner';
import { ComponentStory } from "@storybook/react";
import CustomThemeProvider from "../../../CustomThemeProvider";

export default {
  title: "molecules/Banner",
  component:Banner,
};
const template: ComponentStory<typeof Banner> = (args) => (
    <CustomThemeProvider>
      <Banner />
    </CustomThemeProvider>
  );

export const banner = template.bind({});

