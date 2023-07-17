import React, { useCallback, useState } from 'react'
import { UseCharacterContext } from '../context/getContext'
import classNames from 'classnames'
import MakePages from './makePages'
import { MakeDots } from './makeDots'

export default function PaginationDots() {
  // get the current page
  const getPage = localStorage.getItem('page')?.toString()
  const numberPage = getPage ? parseInt(getPage, 10) : 1
  // get context
  const { useCharacterContext } = UseCharacterContext()
  // getPages Filtered
  const { pages } = MakePages()
  // Add selectedPage on useState
  const [pageSelect, setPageSelect] = useState<number>(numberPage ? numberPage : 1)
  // // makeDots
  const { pageDots } = MakeDots(pages, pageSelect)



  // Add number to localStorage and change the items per page
  const handlePageDotClick = useCallback(
    (item: number | string) => {
      if (typeof item === 'number' && item !== pageSelect) {
        setPageSelect(item)

        localStorage.setItem('page', item.toString())
        if (useCharacterContext.setGetNewData) useCharacterContext.setGetNewData(false)
        window.scroll({
          top: 0,
          behavior: 'smooth',
        })
      }
    },
    [pageSelect, useCharacterContext],
  )

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
    </>
  )
}
