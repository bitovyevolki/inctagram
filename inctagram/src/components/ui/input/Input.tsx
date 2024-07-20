import { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'

import clsx from 'clsx'

import s from './Input.module.scss'

import { CrossedEyeIcon, EyeSvg, SearchSvg } from './icons/Icons'

type InputVariantType = 'base' | 'password' | 'search'

type MyInputPropsType = {
  className?: string
  error?: string
  isDisabled?: boolean
  onChange: (value: string) => void
  value: string
  variant: InputVariantType
} & Omit<ComponentPropsWithoutRef<'input'>, 'onChange'>

export const Input = ({
  error,
  isDisabled,
  onChange,
  placeholder,
  variant = 'base',
  ...props
}: MyInputPropsType) => {
  const [type, setType] = useState<'password' | 'text'>(
    variant === 'password' ? 'password' : 'text'
  )

  const setTypeHandler = () => {
    setType(type === 'text' ? 'password' : 'text')
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value)
  }

  return (
    <>
      <label
        className={clsx(s.input, {
          [s.disabled]: isDisabled,
          [s.errorB]: error,
        })}
      >
        <span className={s.placeholder}>{placeholder}</span>
        {variant === 'search' && (
          <span className={`${s.searchIcon} ${s.icon}`}>
            <SearchSvg />
          </span>
        )}
        <input {...props} onChange={onChangeHandler} type={type} />
        {variant === 'password' && (
          <span className={`${s.eyeIcon} ${s.icon}`} onClick={setTypeHandler}>
            {type === 'text' ? <EyeSvg /> : <CrossedEyeIcon />}
          </span>
        )}
      </label>
      {error && <div className={s.error}>{error}</div>}
    </>
  )
}
