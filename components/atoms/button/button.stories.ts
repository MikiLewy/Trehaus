import type { Meta, StoryObj } from '@storybook/react';

import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: 'contained',
    children: 'Click',
    loading: false,
    disabled: false,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Click',
    loading: false,
    disabled: false,
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'contained',
    children: 'Click',
    loading: false,
    disabled: false,
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'contained',
    children: 'Click',
    loading: false,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    variant: 'contained',
    children: 'Click',
    loading: true,
    disabled: false,
  },
};
