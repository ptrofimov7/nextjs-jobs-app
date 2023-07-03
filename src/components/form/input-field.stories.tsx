import { Meta } from '@storybook/react';
import type { StoryFn } from '@storybook/react';

import { InputField } from './input-field';

const meta: Meta = {
  title: 'Components/Form/InputField',
  component: InputField,
};

export default meta;

const Template: StoryFn<typeof InputField> = (props) => (
  <InputField {...props} />
);

export const Default = Template.bind({});

Default.args = {
  label: 'Name',
};

export const WithError = Template.bind({});

WithError.args = {
  label: 'Name',
  error: {
    type: 'required',
    message: 'Name is required!',
  },
};
