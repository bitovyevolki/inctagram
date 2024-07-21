import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ReactNode } from 'react'
import { Avatar } from '../avatar/avatar'
import { Typography } from '../typography'
import s from './dropdown.module.scss'

type DropdownType = {
  trigger: ReactNode
  children: ReactNode
}

export const Dropdown = ({ children, trigger }: DropdownType) => {
  return (
    <div className={s.wrapper}>
      <Typography variant="subTitle2">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <div className={s.trigger}>{trigger}</div>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className={s.content} sideOffset={4} align={'end'}>
              {children}
              <DropdownMenu.Arrow className={s.arrow} width={16} height={8} />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </Typography>
    </div>
  )
}

type DropdownHeaderType = {
  image: string
  name: string
  email: string
}

export const DropdownHeader = ({ image, name, email }: DropdownHeaderType) => {
  return (
    <Typography variant="caption">
      <div className={s.dropdownHeader}>
        <div className={s.avatar}>
          <Avatar userName={name} image={image} />
        </div>
        <div className={s.profileInfo}>
          <Typography variant="subTitle2">{name}</Typography>
          <Typography className={s.email} variant={'caption'}>
            {email}
          </Typography>
        </div>
      </div>
    </Typography>
  )
}

type DropdownItemType = {
  title: string
  icon: ReactNode
  arrow?: boolean
}

export const DropdownItem = ({ title, icon, arrow = true }: DropdownItemType) => {
  return (
    <Typography variant="caption">
      {arrow && <DropdownMenu.Separator className={s.separator} />}
      <DropdownMenu.Item className={s.item}>
        {icon}
        <p>{title}</p>
      </DropdownMenu.Item>
    </Typography>
  )
}
