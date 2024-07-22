import * as T from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './Tabs.module.scss'

import { IOption } from '../select'

interface ITabsProps {
  defaultValue?: string
  onValueChange: (value: string) => void
  options: ({
    disabled?: boolean
  } & IOption)[]
  value: string
}

export const Tabs = ({ defaultValue, onValueChange, options, value }: ITabsProps) => {
  return (
    <T.Root
      className={s.TabsRoot}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
    >
      <T.List className={s.TabsList}>
        {options.map(t => (
          <T.Trigger
            className={clsx(s.TabsTrigger, {
              [s.active]: t.value === value,
            })}
            key={t.value}
            value={t.value}
          >
            <h3>{t.label}</h3>
          </T.Trigger>
        ))}
      </T.List>
      {/* {options.map((t, ind) => (
        <T.Content className={s.TabsContent} key={t.value + '---' + ind} value={t.value}>
          {t.label}
        </T.Content>
      ))} */}
    </T.Root>
  )
}
