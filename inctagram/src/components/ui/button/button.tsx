import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'textbutton'
  className?: string
  disable?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { variant = 'primary', className, disable, as: Component = 'button', ...rest } = props

  return <Component className={`${s[variant]} ${className}`} {...rest} />
}
