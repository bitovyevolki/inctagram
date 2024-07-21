import { ComponentPropsWithoutRef } from 'react'

import * as AvatarRadix from '@radix-ui/react-avatar'
import { clsx } from 'clsx'

import s from './avatar.module.scss'

type Props = {
  image?: string | undefined
  size?: 'small'
  userName: string
} & ComponentPropsWithoutRef<typeof AvatarRadix.Root>

export const Avatar = ({ className, image, size = 'small', userName, ...rest }: Props) => {
  const initials = userName
    .split(' ')
    .map(word => word[0].toUpperCase())
    .join(' ')

  return (
    <AvatarRadix.Root className={clsx(s.root, s[size], className)} {...rest}>
      <AvatarRadix.Image alt={`${userName} Avatar`} className={s.image} src={image} />
      <AvatarRadix.Fallback className={s.fallback}>{initials}</AvatarRadix.Fallback>
    </AvatarRadix.Root>
  )
}
