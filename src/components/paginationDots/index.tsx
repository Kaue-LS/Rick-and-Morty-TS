import React, { useCallback, useEffect, useState } from 'react'
import { UseContext } from '../context/getContext'
import classNames from 'classnames'

export default function PaginationDots() {
  const getPage = localStorage.getItem('page')?.toString()
  const numberPage = getPage ? parseInt(getPage, 10) : 1
  const { useDataContext } = UseContext()
  const [pages, setPages] = useState<(number | string)[]>([])
  const [pageSelect, setPageSelect] = useState<number>(numberPage ? numberPage : 1)
  const [pageDots, setPageDots] = useState<(number | string)[]>([])

  const addDots = useCallback(() => {
    let numberOfPages: (number | string)[] = [...pages]
    if (pageSelect >= 1 && pageSelect <= 3) {
      numberOfPages = [1, 2, 3, 4, '...', pages.length]
    } else if (pageSelect === 4) {
      // const sliced = pages.slice(0, 1)
      const sliced2 = pages.slice(1, 5)
      numberOfPages = [...sliced2, '...', pages.length]
    } else if (pageSelect >= 5 && pageSelect <= pages.length - 3) {
      const slicedStart = pages.slice(0, 1)
      const slicedEnd = pages.slice(pageSelect - 2, pageSelect + 1)
      numberOfPages = [...slicedStart, '...', ...slicedEnd, '...', pages.length]
    } else if (pageSelect >= pages.length - 2) {
      const sliced = pages.slice(pages.length - 4, pages.length)
      numberOfPages = [1, '...', ...sliced]
    }

    setPageDots(numberOfPages)
  }, [pageSelect, pages])

  const makePages = useCallback(() => {
    if (useDataContext.pages) {
      const newPages = []

      for (let i = 1; i <= useDataContext.pages; i++) {
        newPages.push(i)
      }
      setPages(newPages)
    }
    if (useDataContext.filteredPages) {
      const newPages = []

      for (let i = 1; i <= useDataContext.filteredPages; i++) {
        newPages.push(i)
      }
      setPages(newPages)
    }
  }, [useDataContext])

  useEffect(() => {
    makePages()
  }, [makePages])

  useEffect(() => {
    addDots()
  }, [addDots])

  const handlePageDotClick = useCallback(
    (item: number | string) => {
      if (typeof item === 'number' && item !== pageSelect) {
        setPageSelect(item)
        localStorage.setItem('page', item.toString())
        if (useDataContext?.setGetNewData) {
          useDataContext.setGetNewData(false)
          window.scroll({
            top: 0,
            behavior: 'smooth',
          })
        }
      }
    },
    [pageSelect, useDataContext],
  )
  const handlePageDotFilteredClick = useCallback(
    (item: number | string) => {
      if (typeof item === 'number' && item !== useDataContext.selectFiltered) {
        const { setSelectFiltered } = useDataContext
        if (setSelectFiltered) {
          setSelectFiltered(item)
          localStorage.setItem('page', item.toString())
          window.scroll({
            top: 0,
            behavior: 'smooth',
          })
        }
      }
    },
    [useDataContext],
  )

  // eslint-disable-next-line
  return (
    <section className='e-paginationDots'>
      {!useDataContext.filteredPages && pageDots && (
        <div className={'e-paginationDots__container'}>
          {pageDots.map((item, index) => {
            return (
              <div
                className={classNames(
                  item === '...' ? 'dot--string' : '',
                  'e-paginationDots__container__dots',
                  `pageDot${item === pageSelect ? '--selected' : ''}`,
                )}
                key={index}
              >
                <input
                  onClick={() => handlePageDotClick(item)}
                  checked={item === pageSelect}
                  value={item}
                  disabled={item === '...'}
                  readOnly={item === '...'}
                  type={'radio'}
                  name={'PageDots'}
                  placeholder=''
                  title='number-dots'
                  className={classNames(
                    'e-paginationDots__container__dots__button',
                    `pageDot${item === pageSelect ? '--selected' : '--disabled'}`,
                    item === '...' ? 'pageDot--string' : '',
                  )}
                />

                <span className='e-paginationDots__container__dots__number'>{item}</span>
              </div>
            )
          })}
        </div>
      )}
      {pageDots && useDataContext.filteredPages && (
        <div className={'e-paginationDots__container'}>
          {pages.map((item, index) => {
            return (
              <div
                className={classNames(
                  item === '...' ? 'dot--string' : '',
                  'e-paginationDots__container__dots',
                  `pageDot${item === useDataContext.selectFiltered ? '--selected' : ''}`,
                )}
                key={index}
              >
                <input
                  onClick={() => handlePageDotFilteredClick(item)}
                  checked={item === useDataContext.selectFiltered}
                  value={item}
                  disabled={item === '...'}
                  readOnly={item === '...'}
                  type={'radio'}
                  name={'PageDots'}
                  placeholder=''
                  title='number-dots'
                  className={classNames(
                    'e-paginationDots__container__dots__button',
                    `pageDot${
                      item === useDataContext.selectFiltered ? '--selected' : '--disabled'
                    }`,
                    item === '...' ? 'pageDot--string' : '',
                  )}
                />

                <span className='e-paginationDots__container__dots__number'>{item}</span>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
