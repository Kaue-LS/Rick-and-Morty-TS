import React, { useCallback, useEffect, useState } from 'react'
import { UseContext } from '../context/getContext'
import classNames from 'classnames'

export default function PaginationDots() {
  const { useDataContext } = UseContext()
  const [pages, setPages] = useState<(number | string)[]>([])
  const [pageSelect, setPageSelect] = useState<number>(1)
  const [pageDots, setPageDots] = useState<(number | string)[]>([])
  const makePages = useCallback(() => {
    const newPages = []
    for (let i = 1; i <= useDataContext.pages; i++) {
      newPages.push(i)
    }
    setPages(newPages)
  }, [useDataContext])

  const addDots = useCallback(() => {
    let numberOfPages: (number | string)[] = [...pages]

    if (pageSelect >= 1 && pageSelect <= 3) {
      // eslint-disable-next-line
      console.log('op 1', pages, numberOfPages)
      numberOfPages = [1, 2, 3, 4, '...', pages.length]
    } else if (pageSelect === 4) {
      // eslint-disable-next-line
      console.log('op 2')
      const sliced = pages.slice(0, 5)
      numberOfPages = [...sliced, '...', pages.length]
    } else if (pageSelect >= 5 && pageSelect <= pages.length - 3) {
      // eslint-disable-next-line
      console.log('op 3')
      const slicedStart = pages.slice(0, 2)
      const slicedEnd = pages.slice(pageSelect - 2, pageSelect + 1)
      numberOfPages = [...slicedStart, '...', ...slicedEnd, '...', pages.length]
    } else if (pageSelect >= pages.length - 2) {
      // eslint-disable-next-line
      console.log('op 4')
      const sliced = pages.slice(pages.length - 4, pages.length)
      numberOfPages = [1, '...', ...sliced]
    }

    setPageDots(numberOfPages)
  }, [pageSelect])

  useEffect(() => {
    if (useDataContext) makePages()
    if (pages) addDots()
  }, [makePages, useDataContext])

  // eslint-disable-next-line
  console.log({ pages })

  return (
    pages && (
      <div>
        {pageSelect !== 1 && <div>{'<'}</div>}
        {pageDots.map((item) => (
          <div key={item}>
            <span
              className={classNames('pageDot', item === pageSelect ? '--selected' : '--disabled')}
            >
              {item}
            </span>
          </div>
        ))}
        {pageSelect <= pages.length && <div>{'>'}</div>}
      </div>
    )
  )
}
