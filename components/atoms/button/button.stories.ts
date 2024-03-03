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
    size: 'md',
    loading: false,
    disabled: false,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Click',
    size: 'md',
    loading: false,
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    variant: 'contained',
    children: 'Click',
    size: 'lg',
    loading: false,
    disabled: false,
  },
};

export const Medium: Story = {
  args: {
    variant: 'contained',
    children: 'Click',
    size: 'md',
    loading: false,
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    variant: 'contained',
    children: 'Click',
    size: 'sm',
    loading: false,
    disabled: false,
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'contained',
    children: 'Click',
    size: 'md',
    loading: false,
    disabled: false,
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'contained',
    children: 'Click',
    size: 'md',
    loading: false,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    variant: 'contained',
    children: 'Click',
    size: 'md',
    loading: true,
    disabled: false,
  },
};
