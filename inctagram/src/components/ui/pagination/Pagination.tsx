import clsx from 'clsx'

import s from './Pagination.module.scss'

import { EllipsisSvg, LeftArrowSvg, RightArrowSvg } from './icons/icons'
import { ELLIPSIS, usePagination } from './usePagination'

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
  const { paginationRange } = usePagination({ page, portionSize, totalCount })

  const onNextHandler = () => {
    onChangePage(page + 1)
  }

  const onPrevHandler = () => {
    onChangePage(page - 1)
  }

  return (
    <div className={s.pagination}>
      <span className={clsx(s.icon, s.leftArrow)} onClick={onNextHandler}>
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
      <span className={clsx(s.icon, s.rightArrow)} onClick={onPrevHandler}>
        <RightArrowSvg />
      </span>
      <span>Show</span>
      <div>select</div>
      <span>on page</span>
    </div>
  )
}
