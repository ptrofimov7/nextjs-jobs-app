import { DeleteIcon } from '@chakra-ui/icons';
import { Meta } from '@storybook/react';
import type { StoryFn } from '@storybook/react';

import { Link, LinkProps } from './link';

const meta: Meta = {
  title: 'Components/Link',
  component: Link,
};

export default meta;

const Template: StoryFn<typeof Link> = (props) => (
  <Link {...props} />
);

export const Default = Template.bind({});

Default.args = {
  href: '/',
  children: 'Click Me',
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  href: '/',
  children: 'Remove',
  icon: <DeleteIcon />,
};
