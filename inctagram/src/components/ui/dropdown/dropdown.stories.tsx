import { Icon } from '@/components/ui/icon/icon'
import { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '../avatar'
import { Dropdown, DropdownHeader, DropdownItem } from './dropdown'

const meta = {
  component: Dropdown,
  tags: ['autodocs'],
  title: 'Components/UI/DropdownMenu',
  args: {},
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

//@ts-ignore
export const Default: Story = {
  render: () => {
    return (
      <Dropdown trigger={<Icon name="more" width={24} height={24} />}>
        <DropdownItem title={'Learn'} icon={<Icon name="play" />} arrow={false} />
        <DropdownItem title={'Edit'} icon={<Icon name="edit" />} />
        <DropdownItem title={'Delete'} icon={<Icon name="delete" />} />
      </Dropdown>
    )
  },
}

//@ts-ignore
export const DropdownProfile: Story = {
  
  render: () => {
    return (
      <Dropdown trigger={<Avatar
        userName="Name"
        image="https://lastfm.freetls.fastly.net/i/u/avatar170s/1a31ec80fdd1668f41682c4617620d3d"
      />}>
        <DropdownHeader name={'Name'} image={''} email={'randomLogin@gmail.com'} />
        <DropdownItem title={'My Profile'} icon={<Icon name="person" />} />
        <DropdownItem title={'Sign Out'} icon={<Icon name="logout" />} />
      </Dropdown>
    )
  },
}
