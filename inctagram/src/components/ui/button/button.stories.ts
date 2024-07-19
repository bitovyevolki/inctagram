import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const meta = {
  title: 'Components/UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'outline', 'textbutton'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    disabled: false,
  },
}

export const Active: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
    disabled: false,
  },
}

export const Hover: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    disabled: false,
    fullWidth: true,
  },
}

export const Focus: Story = {
  args: {
    variant: 'primary',
    children: ' Button',
    disabled: false,
    fullWidth: true,
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    disabled: true,
    fullWidth: true,
  },
}
