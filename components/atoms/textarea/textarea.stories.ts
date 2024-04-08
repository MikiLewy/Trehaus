import type { Meta, StoryObj } from '@storybook/react';

import Textarea from './textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Message',
    value: '',
    onChange: e => console.log(e.target.value),
  },
};

export const Error: Story = {
  args: {
    label: 'Message',
    value: '',
    onChange: e => console.log(e.target.value),
    errorMessage: 'This is an error message',
  },
};

export const Required: Story = {
  args: {
    label: 'Message',
    value: '',
    onChange: e => console.log(e.target.value),
    required: true,
  },
};
