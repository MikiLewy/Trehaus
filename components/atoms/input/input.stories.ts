import type { Meta, StoryObj } from '@storybook/react';

import Input from './input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email',
    value: '',
    onChange: e => console.log(e.target.value),
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    value: '',
    onChange: e => console.log(e.target.value),
    errorMessage: 'This is an error message',
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    value: '',
    onChange: e => console.log(e.target.value),
    required: true,
  },
};
