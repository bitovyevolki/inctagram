import { useMemo } from 'react'

interface IProps {
  page: number
  portionSize: number
  siblingCount?: number
  totalCount: number
}

export const ELLIPSIS = 'ELLIPSIS'

export const usePagination = ({
  page,
  portionSize,
  siblingCount = 1,
  totalCount,
}: IProps): (number | string)[] => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / portionSize)
    const totalPageNumbers = siblingCount + 5

    if (totalPageNumbers >= totalPageCount) {
      return [...Array(totalPageCount).keys()].map(n => n + 1)
    }

    const leftSiblingIndex = Math.max(page - siblingCount, 1)
    const rightSiblingIndex = Math.min(page + siblingCount, totalPageCount)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = [...Array(leftItemCount).keys()].map(n => n + 1)

      return [...leftRange, ELLIPSIS, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = [...Array(rightItemCount).keys()].map(
        n => n + totalPageCount - rightItemCount + 1
      )

      return [firstPageIndex, ELLIPSIS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = [...Array(rightSiblingIndex - leftSiblingIndex + 1).keys()].map(
        n => n + leftSiblingIndex
      )

      return [firstPageIndex, ELLIPSIS, ...middleRange, ELLIPSIS, lastPageIndex]
    }
  }, [page, totalCount, portionSize, siblingCount])

  return paginationRange || []
}
