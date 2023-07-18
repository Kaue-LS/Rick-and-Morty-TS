import React, { useCallback, useState } from 'react'
import classNames from 'classnames'
import FilteredDots from './filteredDots'
import type { PaginationsProps } from './paginations.types'

export default function PaginationDots({
  pageSelect,
  setPageSelect,
  getNewData,
  setGetNewData,
  pageDots,
  filteredPageDots,
  filteredMode,
  selectFiltered,
  setGetFilteredData,
  setSelectFiltered
}: PaginationsProps) {

  // Add number to localStorage and change the items per page
  const handlePageDotClick = useCallback(
    (item: number | string) => {
      if (typeof item === 'number' && item !== pageSelect) {
        setPageSelect(item)

        localStorage.setItem('page', item.toString())
        if (getNewData) setGetNewData(false)
        window.scroll({
          top: 0,
          behavior: 'smooth',
        })
      }
    },
    [pageSelect, getNewData, setPageSelect, setGetNewData],
  )

  return (
    <>
      {!filteredMode && pageDots.length > 0 && (
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
      {filteredMode && filteredPageDots.length > 0 && <FilteredDots selectFiltered={selectFiltered} setGetFilteredData={setGetFilteredData} setSelectFiltered={setSelectFiltered} filteredPageDots={filteredPageDots} />}

    </>
  )
}
