import React, { useCallback, useEffect, useState } from 'react'
import { UseCharacterContext } from '../context/getContext'
import classNames from 'classnames'

export default function PaginationDots() {
  const getPage = localStorage.getItem('page')?.toString()
  const numberPage = getPage ? parseInt(getPage, 10) : 1
  const { useCharacterContext } = UseCharacterContext()
  const [pages, setPages] = useState<(number | string)[]>([])
  const [pageSelect, setPageSelect] = useState<number>(numberPage ? numberPage : 1)
  const [pageDots, setPageDots] = useState<(number | string)[]>([])

  const addDots = useCallback(() => {
    if (pages.length > 4) {
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
    }
  }, [pageSelect, pages])

  const addFilteredDots = useCallback(() => {
    if (pages.length > 4) {
      let numberOfPages: (number | string)[] = [...pages]
      if (useCharacterContext.selectFiltered) {
        if (useCharacterContext.selectFiltered >= 1 && useCharacterContext.selectFiltered <= 3) {
          numberOfPages = [1, 2, 3, 4, '...', pages.length]
        } else if (useCharacterContext.selectFiltered === 4) {
          // const sliced = pages.slice(0, 1)
          const sliced2 = pages.slice(1, 5)
          numberOfPages = [...sliced2, '...', pages.length]
        } else if (
          useCharacterContext.selectFiltered >= 5 &&
          useCharacterContext.selectFiltered <= pages.length - 3
        ) {
          const slicedStart = pages.slice(0, 1)
          const slicedEnd = pages.slice(
            useCharacterContext.selectFiltered - 2,
            useCharacterContext.selectFiltered + 1,
          )
          numberOfPages = [...slicedStart, '...', ...slicedEnd, '...', pages.length]
        } else if (useCharacterContext.selectFiltered >= pages.length - 2) {
          const sliced = pages.slice(pages.length - 4, pages.length)
          numberOfPages = [1, '...', ...sliced]
        }
        setPageDots(numberOfPages)
      }
    }
  }, [pages, useCharacterContext.selectFiltered])
  const makePages = useCallback(() => {
    if (useCharacterContext.characterData.totalPages) {
      const newPages = []

      for (let i = 1; i <= useCharacterContext.characterData.totalPages; i++) {
        newPages.push(i)
      }
      setPages(newPages)
    }
    if (useCharacterContext.filteredPages) {
      const newPages = []

      for (let i = 1; i <= useCharacterContext.filteredPages; i++) {
        newPages.push(i)
      }
      setPages(newPages)
    }
  }, [useCharacterContext])

  useEffect(() => {
    makePages()
  }, [makePages])

  useEffect(() => {
    addDots()
    addFilteredDots()
  }, [addDots, addFilteredDots])

  const handlePageDotClick = useCallback(
    (item: number | string) => {
      if (typeof item === 'number' && item !== pageSelect) {
        setPageSelect(item)
        localStorage.setItem('page', item.toString())
        if (useCharacterContext?.setGetNewData) {
          useCharacterContext.setGetNewData(false)
          window.scroll({
            top: 0,
            behavior: 'smooth',
          })
        }
      }
    },
    [pageSelect, useCharacterContext],
  )
  const handlePageDotFilteredClick = useCallback(
    (item: number | string) => {
      if (typeof item === 'number' && item !== useCharacterContext.selectFiltered) {
        const { setSelectFiltered, setGetFilteredData } = useCharacterContext
        if (setSelectFiltered && setGetFilteredData) {
          setSelectFiltered(item)
          setGetFilteredData(true)
          // localStorage.setItem('pageFiltered', item.toString())
          window.scroll({
            top: 0,
            behavior: 'smooth',
          })
        }
      }
    },
    [useCharacterContext],
  )

  return (
    <section className='e-paginationDots'>
      {!useCharacterContext.filteredPages && pageDots && (
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
      {pageDots &&
        useCharacterContext.filteredCharacter &&
        useCharacterContext.filteredCharacter.length > 0 && (
          <div className={'e-paginationDots__container'}>
            {pageDots.map((item, index) => {
              return (
                <div
                  className={classNames(
                    item === '...' ? 'dot--string' : '',
                    'e-paginationDots__container__dots',
                    `pageDot${item === useCharacterContext.selectFiltered ? '--selected' : ''}`,
                  )}
                  key={index}
                >
                  <input
                    onClick={() => handlePageDotFilteredClick(item)}
                    checked={item === useCharacterContext.selectFiltered}
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
                        item === useCharacterContext.selectFiltered ? '--selected' : '--disabled'
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
