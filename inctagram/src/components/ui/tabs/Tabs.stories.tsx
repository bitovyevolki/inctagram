import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './Tabs'

const meta: Meta<typeof Tabs> = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['dark', 'blue'],
    },
  },
  component: Tabs,
  decorators: [
    Story => (
      <div style={{ margin: '10px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { disabled: false, label: '10', value: '10' },
  { disabled: false, label: '20', value: '20' },
  { disabled: false, label: '30', value: '30' },
  { disabled: false, label: '50', value: '50' },
  { disabled: false, label: '100', value: '100' },
]

export const Large: Story = {
  args: {
    options,
    value: options[0].value,
    variant: 'blue',
  },
}
