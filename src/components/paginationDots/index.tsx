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
    const newPages = []
    for (let i = 1; i <= useDataContext.pages; i++) {
      newPages.push(i)
    }
    setPages(newPages)
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
          // eslint-disable-next-line
          console.log('Executou')
          window.scroll({
            top: 0,
            behavior: 'smooth',
          })
        }
      }
    },
    [pageSelect, useDataContext],
  )
  return (
    pageDots && (
      <section className='e-paginationDots'>
        {/* {pageSelect !== 1 && (
          <div
            onClick={() => {
              setPageSelect(pageSelect - 1)
            }}
          >
            <span>{'<'}</span>
          </div>
        )} */}
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
          {/* {pageSelect < pages.length && (
          <div onClick={() => setPageSelect(pageSelect + 1)}>
            <span>{'>'}</span>
          </div>
        )} */}
        </div>
      </section>
    )
  )
}
