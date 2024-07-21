import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  decorators: [
    Story => (
      <div style={{ margin: '10px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/UI/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const PaginationBase: Story = {
  args: {
    page: 1,
    portionSize: 10,
    totalCount: 500,
  },
}
