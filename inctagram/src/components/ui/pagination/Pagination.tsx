import clsx from 'clsx'

import s from './Pagination.module.scss'

import { IOption, Select } from '../select'
import { EllipsisSvg, LeftArrowSvg, RightArrowSvg } from './icons/icons'
import { ELLIPSIS, usePagination } from './usePagination'

const options: IOption[] = [
  {
    label: '10',
    value: '10',
  },
  {
    label: '20',
    value: '20',
  },
  {
    label: '50',
    value: '50',
  },
  {
    label: '100',
    value: '100',
  },
]

interface IPaginationProps {
  disabled: boolean
  onChangePage: (page: number) => void
  onChangePortionSize: (size: number) => void
  page: number
  portionSize: number
  totalCount: number
}

export const Pagination = ({
  onChangePage,
  onChangePortionSize,
  page,
  portionSize,
  totalCount,
}: IPaginationProps) => {
  const paginationRange = usePagination({ page, portionSize, totalCount })

  const onNextHandler = () => {
    onChangePage(page + 1)
  }

  const onPrevHandler = () => {
    onChangePage(page - 1)
  }

  const onChangePortionSizeHandler = (size: string) => {
    onChangePortionSize(Number(size))
  }

  return (
    <div className={s.pagination}>
      <span
        className={clsx(s.icon, s.leftArrow, {
          [s.disabledIcon]: page === 1,
        })}
        onClick={onPrevHandler}
      >
        <LeftArrowSvg />
      </span>
      <div className={s.pages}>
        {paginationRange?.map((elem, index) => {
          return elem === ELLIPSIS ? (
            <span className={clsx(s.icon, s.ellipsis)} key={index}>
              <EllipsisSvg />
            </span>
          ) : (
            <span
              className={clsx(s.page, {
                [s.active]: page === elem,
              })}
              key={index}
              onClick={() => onChangePage(elem as number)}
            >
              {elem}
            </span>
          )
        })}
      </div>
      <span
        className={clsx(s.icon, s.rightArrow, {
          [s.disabledIcon]: paginationRange[paginationRange.length - 1] === page,
        })}
        onClick={onNextHandler}
      >
        <RightArrowSvg />
      </span>
      <span>Show</span>
      <div className={s.selectBox}>
        <Select
          onValueChange={onChangePortionSizeHandler}
          options={options}
          value={String(portionSize)}
          variant={'small'}
        />
      </div>
      <span>on page</span>
    </div>
  )
}
