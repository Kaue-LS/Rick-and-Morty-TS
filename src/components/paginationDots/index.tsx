import React, { useCallback, useState } from 'react'
import { UseCharacterContext } from '../context/getContext'
import classNames from 'classnames'
import MakePages from './makePages'
import { MakeDots, MakeFilteredDots } from './makeDots'

export default function PaginationDots() {
  const getPage = localStorage.getItem('page')?.toString()
  const numberPage = getPage ? parseInt(getPage, 10) : 1
  const { useCharacterContext } = UseCharacterContext()
  const { pages, filteredPages } = MakePages()
  const [pageSelect, setPageSelect] = useState<number>(numberPage ? numberPage : 1)
  const { pageDots } = MakeDots(pages, pageSelect)
  const { filteredPageDots } = MakeFilteredDots(filteredPages)

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

  // eslint-disable-next-line
  console.log(pageDots)
  return (
    <>
      {!useCharacterContext.filteredMode && pageDots.length > 0 && (
        <section className='e-paginationDots'>
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
        </section>
      )}
      {useCharacterContext.filteredMode && filteredPageDots.length > 0 ? (
        <section className='e-paginationDots'>
          <div className={'e-paginationDots__container'}>
            {filteredPageDots.map((item, index) => {
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
        </section>
      ) : null}
    </>
  )
}
