import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'

const meta: Meta<typeof Select> = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['small', 'large'],
    },
  },
  component: Select,
  decorators: [
    Story => (
      <div style={{ margin: '10px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { label: '10', value: '10' },
  { label: '20', value: '20' },
  { label: '30', value: '30' },
  { label: '50', value: '50' },
  { label: '100', value: '100' },
]

export const Large: Story = {
  args: {
    options,
    title: 'Portion size',
    value: options[0].value,
    variant: 'large',
  },
}

export const WithoutTitle: Story = {
  args: {
    options,
    value: options[0].value,
    variant: 'small',
  },
}

export const Small: Story = {
  args: {
    options,
    title: 'Portion size',
    value: options[0].value,
    variant: 'small',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    options,
    title: 'Portion size',
    value: options[0].value,
    variant: 'small',
  },
}
