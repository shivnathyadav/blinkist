import CustomSearch from './CustomSearch';

import { ComponentStory } from '@storybook/react';
export default {
    title: 'atoms/Search',
    component:CustomSearch
};

const Template:ComponentStory<typeof CustomSearch> = (args) => <CustomSearch {...args} />;

export const customSearch = Template.bind({});