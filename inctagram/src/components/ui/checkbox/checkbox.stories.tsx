import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from './'

const meta = {
  title: 'Components/UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Unchecked',
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Checked',
  },
}

export const DisabledChecked: Story = {
  args: {
    checked: true,
    label: 'Disabled checked',
    disabled: true,
  },
}

export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    label: 'Disabled unchecked',
    disabled: true,
  },
}

export const Controlled: Story = {
  args: {
    checked: false,
    label: 'Click here',
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked)

    return (
      <>
        <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />
        Current value: {checked.toString()}
      </>
    )
  },
}
