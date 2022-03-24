import BasicTemplate from './BasicTemplate';
import { ComponentStory } from "@storybook/react";

export default {
  title: "Template/BasicTemplate",
  component:BasicTemplate,
};
const template: ComponentStory<typeof BasicTemplate> = () => (
    
      <BasicTemplate />
    
  );

export const basicTemplate = template.bind({});

