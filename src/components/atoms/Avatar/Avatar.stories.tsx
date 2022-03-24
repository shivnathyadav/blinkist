import CustomAvatar from "./CustomAvatar";
import CustomThemeProvider from "../../../CustomThemeProvider";
import { ComponentStory } from '@storybook/react';
export default {
  title: "atoms/Avatar",
  component: CustomAvatar,
};

const template:ComponentStory<typeof CustomAvatar>  = (args) => <CustomThemeProvider> <CustomAvatar {...args} /> </CustomThemeProvider>;

export const DefaultAvatar = template.bind({});
