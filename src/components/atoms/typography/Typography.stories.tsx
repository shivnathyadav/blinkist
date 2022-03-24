import Text from './Typographys';

import { ComponentStory } from '@storybook/react';
export default{
    title:'atoms/Text',
    component:Text,
    argTypes: {
        variant: { control: "select", options: ["h1", "subtitle1", "subtitle2","subtitle3","body1","body2","body3","caption1","caption2","caption3"] },
      },
};

const Template:ComponentStory<typeof Text> = (args) => <Text {...args}/>;

export const text = Template.bind({});


text.args={
    variant:"h1",
    content:"text item"
};